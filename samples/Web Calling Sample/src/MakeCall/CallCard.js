import React from "react";
import { DefaultButton } from 'office-ui-fabric-react'
import StreamMedia from "./StreamMedia";
import AddParticipantPopover from "./AddParticipantPopover";
import { Persona, PersonaSize } from 'office-ui-fabric-react'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Icon } from '@fluentui/react/lib/Icon';
import LocalVideoPreviewCard from './LocalVideoPreviewCard';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { LocalVideoStream } from '@azure/communication-calling';
import { utils } from '../Utils/Utils';
export default class CallCard extends React.Component {
    constructor(props) {
        super(props);
        this.mutePromise = undefined;
        this.videoPromise = undefined;
        this.holdPromise = undefined;
        this.callFinishConnectingResolve = undefined;
        this.state = {
            call: props.call,
            deviceManager: props.deviceManager,
            callState: props.call.state,
            callId: props.call.id,
            remoteParticipants: props.call.remoteParticipants,
            streams: [],
            videoOn: true,
            micOn: true,
            onHold: false,
            screenShareOn: false,
            cameraDeviceOptions:[],
            speakerDeviceOptions:[],
            microphoneDeviceOptions:[],
            selectedCameraDeviceId: props.selectedCameraDeviceId,
            selectedSpeakerDeviceId: props.selectedSpeakerDeviceId,
            selectedMicrophoneDeviceId: props.selectedMicrophoneDeviceId,
            showSettings: false,
            showLocalVideo: false
        };
    }

    componentWillMount() {
        if (this.state.call) {
            const cameraDevices = this.state.deviceManager.getCameraList();
            const speakerDevices = this.state.deviceManager.getSpeakerList();
            const microphoneDevices = this.state.deviceManager.getMicrophoneList();

            cameraDevices.map(cameraDevice => { this.state.cameraDeviceOptions.push({key: cameraDevice.id, text: cameraDevice.name}) });
            speakerDevices.map(speakerDevice => { this.state.speakerDeviceOptions.push({key: speakerDevice.id, text: speakerDevice.name}) });
            microphoneDevices.map(microphoneDevice => { this.state.microphoneDeviceOptions.push({key: microphoneDevice.id, text: microphoneDevice.name}) });

            this.state.deviceManager.on('videoDevicesUpdated', e => {
                e.added.forEach(cameraDevice => { this.state.cameraDeviceOptions.push({key: cameraDevice.id, text: cameraDevice.name}); });

                e.removed.forEach(removedCameraDevice => {
                    this.state.cameraDeviceOptions.forEach((value, index) => {
                        if(value.key === removedCameraDevice.id) {
                            this.state.cameraDeviceOptions.splice(index, 1);
                            if(removedCameraDevice.id === this.state.selectedCameraDeviceId) {
                                const cameraDevice = this.state.deviceManager.getCameraList()[0];
                                this.setState({selectedCameraDeviceId: cameraDevice.id});
                            }
                        }
                    });
                });
            });

            this.state.deviceManager.on('audioDevicesUpdated', e => {
                e.added.forEach(audioDevice => {
                    if (audioDevice.deviceType === 'Speaker') {
                        this.state.speakerDeviceOptions.push({key: audioDevice.id, text: audioDevice.name});

                    } else if(audioDevice.deviceType === 'Microphone') {
                        this.state.microphoneDeviceOptions.push({key: audioDevice.id, text: audioDevice.name});
                    }
                });

                e.removed.forEach(removedAudioDevice => {
                    if(removedAudioDevice.deviceType === 'Speaker') {
                        this.state.speakerDeviceOptions.forEach((value, index) => {
                            if(value.key === removedAudioDevice.id) {
                                this.state.speakerDeviceOptions.splice(index, 1);
                                if(removedAudioDevice.id === this.state.selectedSpeakerDeviceId) {
                                    const speakerDevice = this.state.deviceManager.getSpeakerList()[0];
                                    this.state.deviceManager.setSpeaker(speakerDevice);
                                    this.setState({selectedSpeakerDeviceId: speakerDevice.id});
                                }
                            }
                        });
                    } else if (removedAudioDevice.deviceType === 'Microphone') {
                        this.state.microphoneDeviceOptions.forEach((value, index) => {
                            if(value.key === removedAudioDevice.id) {
                                this.state.microphoneDeviceOptions.splice(index, 1);
                                if(removedAudioDevice.id === this.state.selectedMicrophoneDeviceId) {
                                    const microphoneDevice = this.state.deviceManager.getMicrophoneList()[0];
                                    this.state.deviceManager.setMicrophone(microphoneDevice);
                                    this.setState({selectedMicrophoneDeviceId: microphoneDevice.id});
                                }
                            }
                        });
                    }
                });
            });

            const onCallStateChanged = () => {
                console.log('callStateChanged', this.state.call.state);
                this.setState({callState: this.state.call.state});

                if (this.state.call.state !== 'None' &&
                    this.state.call.state !== 'Connecting' &&
                    this.state.call.state !== 'Incoming') {
                        if (this.callFinishConnectingResolve) {
                            this.callFinishConnectingResolve();
                        }
                }
                if (this.state.call.state === 'Incoming') {
                    this.selectedCameraDeviceId = cameraDevices[0]?.id;
                    this.selectedSpeakerDeviceId = speakerDevices[0]?.id;
                    this.selectedMicrophoneDeviceId = microphoneDevices[0]?.id;
                }
            }
            onCallStateChanged();
            this.state.call.on('callStateChanged', onCallStateChanged);
            this.state.call.on('callIdChanged', () => {
                this.setState({ callId: this.state.call.id});
            });
            this.state.call.remoteParticipants.forEach(rp => this.subscribeToRemoteParticipant(rp));
            this.state.call.on('remoteParticipantsUpdated', e => {
                console.log(`Call=${this.state.call.callId}, remoteParticipantsUpdated, added=${e.added}, removed=${e.removed}`);
                e.added.forEach(p => {
                    console.log('participantAdded', p);
                    this.subscribeToRemoteParticipant(p);
                    this.setState({remoteParticipants: [...this.state.call.remoteParticipants.values()]});
                });
                e.removed.forEach(p => {
                    console.log('participantRemoved');
                    this.setState({remoteParticipants: [...this.state.call.remoteParticipants.values()]});
                });
            });
        }
    }

    subscribeToRemoteParticipant(participant) {
        let id = utils.getIdentifierText(participant.identifier);

        participant.on('participantStateChanged', () => {
            console.log('participantStateChanged', participant.identifier.communicationUserId, participant.state);
            this.setState({remoteParticipants: [...this.state.call.remoteParticipants.values()]});
        });

        const handleParticipantStream = (e) => {
            e.added.forEach(stream => {
                console.log('video stream added', id, stream, stream.type);
                    this.setState({streams: this.state.streams.concat({stream: stream, id: id})});
            });
            e.removed.forEach(stream => {
                console.log('video stream removed', id, stream, stream.type)
            });
        }

        // Get participants video streams and screen sharing streams
        let participantStreams = participant.videoStreams.map(v => { return {stream: v, id}});
        // Filter out the participant stream tuples that are not already in this.state.streams
        participantStreams = participantStreams.filter(streamTuple => {return !this.state.streams.some(tuple => { return tuple.stream === streamTuple.stream && tuple.id === streamTuple.id})});
        // Add participantStreams to the list of all remote participant streams
        this.setState({streams: this.state.streams.concat(participantStreams)});
        participant.on('videoStreamsUpdated', handleParticipantStream);
        participant.on('screenSharingStreamsUpdated', handleParticipantStream);
    }

    async handleAcceptCall() {
        const cameraDevice = this.state.deviceManager.getCameraList()[0];
        if(!cameraDevice || cameraDevice.id === 'camera:') {
            this.props.onShowCameraNotFoundWarning(true);
        } else if (cameraDevice) {
            this.setState({ selectedCameraDeviceId: cameraDevice.id });
            const localVideoStream = new LocalVideoStream(cameraDevice);
        }

        const speakerDevice = this.state.deviceManager.getSpeakerList()[0];
        if(!speakerDevice || speakerDevice.id === 'speaker:') {
            this.props.onShowSpeakerNotFoundWarning(true);
        } else if(speakerDevice) {
            this.setState({selectedSpeakerDeviceId: speakerDevice.id});
            this.state.deviceManager.setSpeaker(speakerDevice);
        }

        const microphoneDevice = this.state.deviceManager.getMicrophoneList()[0];
        if(!microphoneDevice || microphoneDevice.id === 'microphone:') {
            this.props.onShowMicrophoneNotFoundWarning(true);
        } else {
            this.setState({selectedMicrophoneDeviceId: microphoneDevice.id});
            this.state.deviceManager.setMicrophone(microphoneDevice);
        }

        this.state.call.accept({
            videoOptions: this.state.videoOn && cameraDevice ? { localVideoStreams: [new LocalVideoStream(cameraDevice)] } : undefined
        }).catch((e) => console.error(e));
    }

    getIncomingActionContent() {
        return (
            <>
                <DefaultButton
                    className="answer-button my-3"
                    onClick={() => this.handleAcceptCall()}>
                    <i className="fas fa-phone"></i>Accept
                </DefaultButton>
            </>
        );
    }

    async handleVideoOnOff () {
        try {
            if (this.state.call.state === 'None' || 
                this.state.call.state === 'Connecting' ||
                this.state.call.state === 'Incoming') {
                    if(this.state.videoOn) {
                        this.setState({ videoOn: false });
                    } else {
                        this.setState({ videoOn: true })
                    }
                    await this.watchForCallFinishConnecting();
                    if(this.state.videoOn) {
                        const cameraDeviceInfo = this.state.deviceManager.getCameraList().find(cameraDeviceInfo => {
                            return cameraDeviceInfo.id === this.state.selectedCameraDeviceId
                        });
                        this.state.call.startVideo(new LocalVideoStream(cameraDeviceInfo)).catch(error => {});
                    } else {
                        this.state.call.stopVideo(this.state.call.localVideoStreams[0]).catch(error => {});
                    }
            } else {
                if(!this.videoPromise) {
                    if(this.state.videoOn) {
                        if (this.state.call.localVideoStreams && this.state.call.localVideoStreams.length > 0) {
                            this.videoPromise = this.state.call.stopVideo(this.state.call.localVideoStreams[0]).then(() => {
                                this.setState({videoOn: false});
                                this.videoPromise = undefined;
                            }).catch(error => {
                                this.videoPromise = undefined;
                            });
                        }
                    } else {
                        const cameraDeviceInfo = this.state.deviceManager.getCameraList().find(cameraDeviceInfo => {
                            return cameraDeviceInfo.id === this.state.selectedCameraDeviceId
                        });
                        this.videoPromise = this.state.call.startVideo(new LocalVideoStream(cameraDeviceInfo)).then(() => {
                            this.setState({videoOn: true});
                            this.videoPromise = undefined;
                        }).catch(error => {
                            this.videoPromise = undefined;
                        });
                    }
                }
            }
        } catch(e) {
            this.videoPromise = undefined;
            console.error(e);
        }
    }

    async watchForCallFinishConnecting() {
        return new Promise((resolve) => {
            if (this.state.call.state !== 'None' && this.state.call.state !== 'Connecting' && this.state.call.state !== 'Incoming') {
                resolve();
            } else {
                this.callFinishConnectingResolve = resolve;
            }
        }).then(() => {
            this.callFinishConnectingResolve = undefined;
        });
    }

    handleMicOnOff() {
        try {
            if(!this.mutePromise) {
                if (this.state.micOn) {
                    this.mutePromise = this.state.call.mute().then(() => {
                        this.setState({micOn: false});
                        this.mutePromise = undefined;
                    });
                } else {
                    this.mutePromise = this.state.call.unmute().then(() => {
                        this.setState({micOn: true});
                        this.mutePromise = undefined;
                    });
                }
            }
        } catch(e) {
            this.mutePromise = undefined;
            console.error(e);
        }
    }

    async handleHoldUnhold() {
        try {
            if(!this.holdPromise) {
                if (this.state.onHold) {
                    this.holdPromise = this.state.call.unhold().then(() => {
                        this.setState({onHold: false});
                        this.holdPromise = undefined;
                    });
                } else {
                    this.holdPromise = this.state.call.hold().then(() => {
                        this.setState({onHold: true});
                        this.holdPromise = undefined;
                    });
                }
            }
        } catch(e) {
            this.holdPromise = undefined;
            console.error(e);
        }
    }

    handleRemoveParticipant(e, identifier) {
        e.preventDefault();
        this.state.call.removeParticipant(identifier).catch((e) => console.error(e))
    }

    async handleScreenSharingOnOff() {
        try {
            if (this.state.screenShareOn) {
                await this.state.call.stopScreenSharing()
            } else {
                await this.state.call.startScreenSharing();
            }
            this.setState({screenShareOn: !this.state.screenShareOn});
        } catch(e) {
            console.error(e);
        }
    }

    cameraDeviceSelectionChanged = (event, item) => {
        const cameraDeviceInfo = this.state.deviceManager.getCameraList().find(cameraDeviceInfo => {
            return cameraDeviceInfo.id === item.key
        });
        const localVideoStream = this.state.call.localVideoStreams[0];
        localVideoStream.switchSource(cameraDeviceInfo);
        this.setState({selectedCameraDeviceId: cameraDeviceInfo.id});
    };

    speakerDeviceSelectionChanged = (event, item) => {
        const speakerDeviceInfo = this.state.deviceManager.getSpeakerList().find(speakerDeviceInfo => {
                                                                                            return speakerDeviceInfo.id === item.key
                                                                                        });
        this.state.deviceManager.setSpeaker(speakerDeviceInfo);
        this.setState({selectedSpeakerDeviceId: speakerDeviceInfo.id});
    };

    microphoneDeviceSelectionChanged = (event, item) => {
        const microphoneDeviceInfo = this.state.deviceManager.getMicrophoneList().find(microphoneDeviceInfo => {
                                                                                            return microphoneDeviceInfo.id === item.key
                                                                                        });
        this.state.deviceManager.setMicrophone(microphoneDeviceInfo);
        this.setState({selectedMicrophoneDeviceId: microphoneDeviceInfo.id});
    };

    render() {
        return (
            <div className="ms-Grid mt-2">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg6">
                        <h2>{this.state.callState !== 'Connected' ? `${this.state.callState}...` : `Connected`}</h2>
                    </div>
                    <div className="ms-Grid-col ms-lg6 text-right">
                        {
                            this.state.call &&
                            <h2>Call Id: {this.state.callId}</h2>
                        }
                    </div>
                </div>
                <div className="ms-Grid-row">
                    {
                        this.state.callState === 'Connected' &&
                        <div className="ms-Grid-col ms-lg3 ms-sm12">
                            <div className="participants-panel mt-1 mb-3">
                                    <div className="participants-panel-title custom-row text-center">
                                        <AddParticipantPopover call={this.state.call}/>
                                    </div>
                                    {
                                        this.state.remoteParticipants.length === 0 &&
                                        <p className="text-center">No other participants currently in the call</p>
                                    }
                                    <ul className="participants-panel-list">
                                        {
                                            this.state.remoteParticipants.map(v =>
                                                <li className="participant-item" action key={utils.getIdentifierText(v.identifier)}>
                                                    <Persona size={PersonaSize.size40}
                                                            text={ utils.getIdentifierText(v.identifier) }
                                                            secondaryText={v.state}
                                                            styles={{ primaryText: {color: '#edebe9'}, secondaryText: {color: '#edebe9'} }}/>
                                                    <div className="text-right">
                                                        <a href="#" onClick={e => this.handleRemoveParticipant(e, v.identifier)} className="participant-remove float-right ml-3">Remove participant</a>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                            </div>
                            <div>
                                {
                                    this.state.callState === 'Connected' && this.state.showLocalVideo &&
                                    <div className="mb-3">
                                        <LocalVideoPreviewCard selectedCameraDeviceId={this.state.selectedCameraDeviceId} deviceManager={this.state.deviceManager}/>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    <div className={ this.state.callState === 'Connected' ? `ms-Grid-col ms-lg9 ms-sm12`: 'ms-Grid-col ms-lg12 ms-sm12'}>
                        {
                            <div className="video-grid-row">
                                {
                                    this.state.streams.map((v, index) =>
                                        <StreamMedia key={index} stream={v.stream} id={v.id}/>
                                    )
                                }
                            </div>
                        }
                        <div className="my-4">
                            {
                                this.state.callState !== 'Connected' &&
                                <div className="custom-row">
                                    <div className="ringing-loader mb-4"></div>
                                </div>
                            }
                            <div className="text-center">
                                    <span className="in-call-button"
                                        title={`Turn your video ${this.state.videoOn ? 'off' : 'on'}`}
                                        variant="secondary"
                                        onClick={() => this.handleVideoOnOff()}>
                                        {
                                            this.state.videoOn &&
                                            <Icon iconName="Video"/>
                                        }
                                        {
                                            !this.state.videoOn &&
                                            <Icon iconName="VideoOff"/>
                                        }
                                    </span>
                                    <span className="in-call-button"
                                        title={`${this.state.micOn ? 'Mute' : 'Unmute'} your microphone`}
                                        variant="secondary"
                                        onClick={() => this.handleMicOnOff()}>
                                        {
                                            this.state.micOn &&
                                            <Icon iconName="Microphone"/>
                                        }
                                        {
                                            !this.state.micOn &&
                                            <Icon iconName="MicOff2"/>
                                        }
                                    </span>
                                    {
                                        (this.state.callState === 'Connected' || this.state.callState === 'Hold') &&
                                        <span className="in-call-button"
                                            title={`${this.state.onHold ? 'Unhold' : 'Hold'} call`} 
                                            variant="secondary"
                                            onClick={() => this.handleHoldUnhold()}>
                                            {
                                                this.state.onHold &&
                                                <Icon iconName="Pause"/>
                                            }
                                            {
                                                !this.state.onHold &&
                                                <Icon iconName="Play"/>
                                            }
                                        </span>
                                    }
                                    <span className="in-call-button"
                                        title={`${this.state.screenShareOn ? 'Stop' : 'Start'} sharing your screen`}
                                        variant="secondary"
                                        onClick={() => this.handleScreenSharingOnOff()}>
                                        {
                                            !this.state.screenShareOn &&
                                            <Icon iconName="TVMonitor"/>
                                        }
                                        {
                                            this.state.screenShareOn &&
                                            <Icon iconName="CircleStop"/>
                                        }
                                    </span>
                                    <span className="in-call-button"
                                        title="Settings"
                                        variant="secondary"
                                        onClick={() => this.setState({showSettings: true})}>
                                        <Icon iconName="Settings"/>
                                    </span>
                                    <span className="in-call-button"
                                        onClick={() => this.state.call.hangUp({forEveryone: false}).catch((e) => console.error(e))}>
                                        <Icon iconName="DeclineCall"/>
                                    </span>
                                <Panel type={PanelType.medium}
                                    isLightDismiss
                                    isOpen={this.state.showSettings}
                                    onDismiss={() => this.setState({showSettings: false})}
                                    closeButtonAriaLabel="Close"
                                    headerText="Settings">
                                        <div className="pl-2 mt-3">
                                            <h3>Video settings</h3>
                                            <div className="pl-2">
                                                <span>
                                                    <h4>Camera preview</h4>
                                                </span>
                                                <DefaultButton onClick={() => this.setState({showLocalVideo: !this.state.showLocalVideo})}>
                                                    Show/Hide
                                                </DefaultButton>
                                                {
                                                    this.state.cameraDeviceOptions.length > 0  && this.state.callState === 'Connected' &&
                                                    <Dropdown
                                                        selectedKey={this.state.selectedCameraDeviceId}
                                                        onChange={this.cameraDeviceSelectionChanged}
                                                        label={'Camera'}
                                                        options={this.state.cameraDeviceOptions}
                                                        disabled={this.state.deviceManager.getCameraList().length === 0 }
                                                        placeHolder={this.state.deviceManager.getCameraList().length === 0 ? 'No camera devices found' :
                                                                    this.state.selectedCameraDeviceId ? '' : 'Select camera'}
                                                        styles={{dropdown: { width: 400 }}}
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="pl-2 mt-4">
                                            <h3>Sound Settings</h3>
                                            <div className="pl-2">
                                                {
                                                    this.state.speakerDeviceOptions.length > 0 && this.state.callState === 'Connected' &&
                                                    <Dropdown
                                                        selectedKey={this.state.selectedSpeakerDeviceId}
                                                        onChange={this.speakerDeviceSelectionChanged}
                                                        options={this.state.speakerDeviceOptions}
                                                        label={'Speaker'}
                                                        disabled={this.state.deviceManager.getSpeakerList().length === 0}
                                                        placeHolder={this.state.deviceManager.getSpeakerList().length === 0 ? 'No speaker devices found' :
                                                                    this.state.selectedSpeakerDeviceId ? '' : 'Select speaker'}
                                                        styles={{dropdown: { width: 400 }}}
                                                    />
                                                }
                                                {
                                                    this.state.microphoneDeviceOptions.length > 0 && this.state.callState === 'Connected' &&
                                                    <Dropdown
                                                        selectedKey={this.state.selectedMicrophoneDeviceId}
                                                        onChange={this.microphoneDeviceSelectionChanged}
                                                        options={this.state.microphoneDeviceOptions}
                                                        label={'Microphone'}
                                                        disabled={this.state.deviceManager.getMicrophoneList().length === 0}
                                                        placeHolder={this.state.deviceManager.getMicrophoneList().length === 0 ? 'No microphone devices found' :
                                                                    this.state.selectedMicrophoneDeviceId ? '' : 'Select microphone'}
                                                        styles={{dropdown: { width: 400 }}}
                                                    />
                                                }
                                            </div>
                                        </div>
                                </Panel>
                            </div>
                            <div className="text-center">
                            {
                                this.state.callState === 'Incoming' ? this.getIncomingActionContent() : undefined
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}