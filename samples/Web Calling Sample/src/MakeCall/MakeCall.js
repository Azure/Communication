import React from "react";
import { CallClient, LocalVideoStream } from '@azure/communication-calling';
import { AzureCommunicationUserCredential } from '@azure/communication-common';
import {
    PrimaryButton,
    TextField,
    MessageBar,
    MessageBarType
} from 'office-ui-fabric-react'
import { Icon } from '@fluentui/react/lib/Icon';
import CallCard from '../MakeCall/CallCard'
import Login from './Login';
import CallEndReasonCard from "./CallEndReasonCard";
import { createClientLogger, setLogLevel } from '@azure/logger';

export default class MakeCall extends React.Component {
    constructor(props) {
        super(props);
        this.destinationUserIds = null;
        this.destinationPhoneIds = null;
        this.destinationGroup = null;
        this.threadIdInput = null;
        this.messageIdInput = null;
        this.organizerIdInput = null;
        this.tenantIdInput = null;
        this.callClient = null;
        this.callAgent = null;
        this.deviceManager = null;

        this.state = {
            id: undefined,
            loggedIn: false,
            showCallSampleCode: false,
            showMuteUnmuteSampleCode: false,
            showHoldUnholdCallSampleCode: false,
            selectedCameraDeviceId: null,
            selectedSpeakerDeviceId: null,
            selectedMicrophoneDeviceId: null,
            showCameraNotFoundWarning: false,
            showSpeakerNotFoundWarning: false,
            showMicrophoneNotFoundWarning: false,
        };
    }

    handleLogIn = async (userDetails) => {
        if(userDetails) {
            try {
                const tokenCredential = new AzureCommunicationUserCredential(userDetails.token);
                const logger = createClientLogger('ACS');
                setLogLevel('warning');
                logger.verbose.log = (...args) => { console.log(...args); };
                logger.info.log = (...args) => { console.info(...args) ; };
                logger.warning.log = (...args) => { console.warn(...args); };
                logger.error.log = (...args) => { console.error(...args); };
                const options = { logger: logger };
                this.callClient = new CallClient(options);
                this.callAgent = await this.callClient.createCallAgent(tokenCredential);
                this.deviceManager = await this.callClient.getDeviceManager();
                this.callAgent.updateDisplayName(userDetails.id);
                this.callAgent.on('callsUpdated', e => {
                    console.log(`callsUpdated, added=${e.added}, removed=${e.removed}`);

                    e.added.forEach(call => {
                        if (this.state.call && call.isIncoming) {
                            call.reject();
                            return;
                        }
                        this.setState({ call: call, callEndReason: undefined })
                    });

                    e.removed.forEach(call => {
                        if (this.state.call && this.state.call === call) {
                            this.setState({
                                call: null,
                                callEndReason: this.state.call.callEndReason
                            });
                        }
                    });
                });
                this.setState({ loggedIn: true });
            } catch (e) {
                console.error(e);
            }
        }
    }

    placeCall = () => {
        try {
            let identitiesToCall = [];
            const userIdsArray = this.destinationUserIds.value.split(',');
            const phoneIdsArray = this.destinationPhoneIds.value.split(',');

            userIdsArray.forEach((userId, index) => {
                if (userId) {
                    userId = userId.trim();
                    userId = { communicationUserId: userId };
                    if (!identitiesToCall.find(id => { return id === userId })) {
                        identitiesToCall.push(userId);
                    }
                }
            });

            phoneIdsArray.forEach((phoneNumberId, index) => {
                if (phoneNumberId) {
                    phoneNumberId = phoneNumberId.trim();
                    phoneNumberId = { phoneNumber: phoneNumberId };
                    if (!identitiesToCall.find(id => { return id === phoneNumberId })) {
                        identitiesToCall.push(phoneNumberId);
                    }
                }
            });

            let callOptions = this.getCallOptions();
            if (this.alternateCallerId.value !== '') {
                callOptions.alternateCallerId = { phoneNumber: this.alternateCallerId.value.trim() };
            }
            this.callAgent.call(identitiesToCall, callOptions);

        } catch (e) {
            console.log('Failed to place a call', e);
        }
    };

    joinGroup = () => {
        try {
            this.callAgent.join({ groupId: this.destinationGroup.value }, this.getCallOptions());
        } catch (e) {
            console.log('Failed to join a call', e);
        }
    };

    getCallOptions() {
        let callOptions = {
            videoOptions: {
                localVideoStreams: undefined
            },
            audioOptions: {
                muted: false
            }
        };

        const cameraDevice = this.deviceManager.getCameraList()[0];
        if(!cameraDevice || cameraDevice.id === 'camera:') {
            this.setShowCameraNotFoundWarning(true);
        } else if (cameraDevice) {
            this.setState({ selectedCameraDeviceId: cameraDevice.id });
            const localVideoStream = new LocalVideoStream(cameraDevice);
            callOptions.videoOptions = { localVideoStreams: [localVideoStream] };
        }

        const speakerDevice = this.deviceManager.getSpeakerList()[0];
        if(!speakerDevice || speakerDevice.id === 'speaker:') {
            this.setShowSpeakerNotFoundWarning(true);
        } else if(speakerDevice) {
            this.setState({selectedSpeakerDeviceId: speakerDevice.id});
            this.deviceManager.setSpeaker(speakerDevice);
        }

        const microphoneDevice = this.deviceManager.getMicrophoneList()[0];
        if(!microphoneDevice || microphoneDevice.id === 'microphone:') {
            this.setShowMicrophoneNotFoundWarning(true);
        } else {
            this.setState({selectedMicrophoneDeviceId: microphoneDevice.id});
            this.deviceManager.setMicrophone(microphoneDevice);
        }

        return callOptions;
    }

    setShowCameraNotFoundWarning(show) {
        this.setState({showCameraNotFoundWarning: show});
    }

    setShowSpeakerNotFoundWarning(show) {
        this.setState({showSpeakerNotFoundWarning: show});
    }

    setShowMicrophoneNotFoundWarning(show) {
        this.setState({showMicrophoneNotFoundWarning: show});
    }

    render() {
        const callSampleCode = `
/******************************/
/*       Placing a call       */
/******************************/
// Set up CallOptions
const cameraDevice = this.callClient.getDeviceManager().getCameraList()[0];
const localVideoStream = new LocalVideoStream(cameraDevice);
this.callOptions.videoOptions = { localVideoStreams: [localVideoStream] };

// To place a 1:1 call to another ACS user
const userId = { communicationUserId: 'ACS_USER_ID');
this.currentCall = this.callAgent.call([userId], this.callOptions);

// Place a 1:1 call to am ACS phone number. PSTN calling is currently in private preview.
// When making PSTN calls, your Alternate Caller Id must be specified in the call options.
const phoneNumber = { phoneNumber: <ACS_PHONE_NUMBER>);
this.callOptions.alternateCallerId = { phoneNumber: <ALTERNATE_CALLER_ID>}
this.currentCall = this.callAgent.call([phoneNumber], this.callOptions);

// Place a 1:N call. Specify a multiple destinations
// When making PSTN calls, your Alternate Caller Id must be specified in the call options.
this.callOptions.alternateCallerId = { phoneNumber: <ALTERNATE_CALLER_ID>}
this.currentCall = this.callAgent.call([userId1, phoneNumber], this.callOptions);

/******************************/
/*      Receiving a call      */
/******************************/
calls.added.foreach(addedCall => {
    this.currentCall = addedCall;
    if (this.currentCall.isIncoming) {
        // Incoming call was detected.
    }
});

/******************************/
/*    Joining a group call    */
/******************************/
// Set up CallOptions
const cameraDevice = this.callClient.deviceManager.getCameraList()[0];
const localVideoStream = new LocalVideoStream(cameraDevice);
this.callOptions.videoOptions = { localVideoStreams: [localVideoStream] };

// Join a group call
this.currentCall = this.callAgent.join({groupId: <GUID>}, this.callOptions);
        `;

        const streamingSampleCode = `
/************************************************/
/*     Local Video and Local Screen-sharing     */
/************************************************/
// To start a video, you have to enumerate cameras using the getCameraList()
// method on the deviceManager object. Then create a new instance of
// LocalVideoStream passing the desired camera into the startVideo() method as
// an argument
const cameraDevice = this.callClient.getDeviceManager().getCameraList()[0];
const localVideoStream = new LocalVideoStream(cameraDevice);
await call.startVideo(localVideoStream);

// To stop local video, pass the localVideoStream instance available in the
// localVideoStreams collection
await this.currentCall.stopVideo(localVideoStream);

// You can use DeviceManager and Renderer to begin rendering streams from your local camera.
// This stream won't be sent to other participants; it's a local preview feed. This is an asynchronous action.
const renderer = new Renderer(localVideoStream);
const view = await renderer.createView();
document.getElementById('someDiv').appendChild(view.target);

// You can switch to a different camera device while video is being sent by invoking
// switchSource() on a localVideoStream instance
const cameraDevice1 = this.callClient.getDeviceManager().getCameraList()[1];
localVideoStream.switchSource(cameraDeivce1);

// Handle 'localVideoStreamsUpdated' event
this.currentCall.on('localVideoStreamsUpdated', e => {
    e.added.forEach(addedLocalVideoStream => { this.handleAddedLocalVideoStream(addedLocalVideoStream) });
    e.removed.forEach(removedLocalVideoStream => { this.handleRemovedLocalVideoStream(removedLocalVideoStream) });
});

// To start sharing your screen
await this.currentCall.startScreenSharing();

// To stop sharing your screen
await this.currentCall.stopScreenSharing();

// Handle 'isScreenSharingOnChanged' event
this.currentCall.on('isScreenSharingOnChanged', this.handleIsScreenSharingOnChanged());




/**************************************************************************************/
/*     Handling Video streams and Screen-sharing streams from remote participants     */
/**************************************************************************************/

// Handle remote participant video and screen-sharing streams
addedParticipant.videoStreams.forEach(stream => handleRemoteStream(stream))

// Handle remote participant 'videoStreamsUpdated' event. This is for videos and screen-shrings streams.
addedParticipant.on('videoStreamsUpdated', videoStreams => {
    videoStreams.added.forEach(addedStream => {
        handleRemoteStream(addedStream)
    });

    videoStreams.removed.forEach(removedStream => {
        handleRemoveStream(removedStream);
    });
});

// Render remote streams on UI. Do this logic in a UI component.
// Please refer to /src/MakeCall/StreamMedia.js for an example of how to render streams on the UI.
const handleRemoteStream = (stream) => {
    let renderer = new Renderer(this.stream);
    let view;
    let videoContainer;

    const renderStream = async () => {
        if(!view) {
            view = await renderer.createView();
        }
        videoContainer = document.getElementById('someHtmlElementDiv');
        videoContainer.hidden = false;
        videoContainer.appendChild(view.target);
    }

    this.stream.on('availabilityChanged', async () => {
        if (this.stream.isAvailable) {
            this.setState({ isAvailable: true });
            await renderStream();
        } else {
           videoContainer.hidden = true;
            this.setState({ isAvailable: false });
        }
    });

    if (this.stream.isAvailable) {
        this.setState({ isAvailable: true });
        await renderStream();
    }
}

        `;

        const muteUnmuteSampleCode = `
// To mute your microphone
await this.currentCall.mute();

// To unmute your microphone
await this.currentCall.unmute();

// Handle remote participant isMutedChanged event
addedParticipant.on('isMutedChanged', () => {
    if(remoteParticipant.isMuted) {
        console.log('Remote participant is muted');
    } else {
        console.log('Remote participant is unmuted');
    }
});
        `;

        const holdUnholdSampleCode = `
/******************************/
/*      To hold the call      */
/******************************/
    // Call state changes when holding
    this.currentCall.on('callStateChanged', () => {
        // Call state changes to 'Hold'
        console.log(this.currentCall.state);
    });

    // If you hold the Call, remote participant state changes to 'Hold'.
    // Handle remote participant stateChanged event
    addedParticipant.on('participantStateChanged', () => {
        console.log(addedParticipant.state); // 'Hold'
    });

    // If you want to hold the call use:
    await this.currentCall.hold();

/******************************/
/*     To unhold the call     */
/******************************/
    // The Call state changes when unholding
    this.currentCall.on('callStateChanged', () => {
        // Call state changes back to 'Connected'
        console.log(this.currentCall.state);
    });

    // Remote participant state changes to 'Connected'
    addedParticipant.on('participantStateChanged', () => {
        console.log(addedParticipant.state); // 'Connected'
    });

    // If you want to unhold the call use:
    await this.currentCall.unhold();
        `;

        const deviceManagerSampleCode = `
/*************************************/
/*           Device Manager          */
/*************************************/
// Get the Device Manager.
// The CallAgent must be initialized first in order to be able to access the DeviceManager.
this.deviceManager = this.callClient.getDeviceManager();

// Get list of devices
const cameraDevices = this.deviceManager.getCameraList();
const speakerDevices = this.deviceManager.getSpeakerList();
const microphoneDevices = this.deviceManager.getMicrophoneList();

// Set microphone device and speaker device to use across the call stack.
this.deviceManager.setSpeaker(speakerDevices[0]);
this.deviceManager.setMicrophone(microphoneDevices[0]);
// NOTE: Setting of video camera device to use is specified on CallAgent.call() and Call.join() APIs
// by passing a LocalVideoStream into the options paramter.
// To switch video camera device to use during call, use the LocalVideoStream.switchSource() method.

// Handle videoDevicesUpdated event
this.callClient.deviceManager.on('videoDevicesUpdated', e => {
    e.added.forEach(cameraDevice => { this.handleAddedCameraDevice(cameraDevice); });
    e.removed.forEach(removedCameraDevice => { this.handleRemovedCameraDevice(removeCameraDevice); });
});

// Handle audioDevicesUpdate
this.state.callClient.deviceManager.on('audioDevicesUpdated', e => {
    e.added.forEach(audioDevice => { this.handleAddedAudioDevice(audioDevice); });
    e.removed.forEach(removedAudioDevice => { this.handleRemovedAudioDevice(removedAudioDevice); });
});

        `;

        // TODO: Create section component. Couldnt use the ExampleCard compoenent from uifabric becuase its buggy,
        //       when toggling their show/hide code functionality, videos dissapear from DOM.

        return (
            <div>
                <Login onLoggedIn={this.handleLogIn}/>
                <div className="card">
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <h2 className="ms-Grid-col ms-lg6 ms-sm6 mb-4">Placing and receiving calls</h2>
                            <div className="ms-Grid-col ms-lg6 ms-sm6 text-right">
                                <PrimaryButton
                                    className="code-button"
                                    iconProps={{iconName: 'TransferCall', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                    text={`${this.state.showCallSampleCode ? 'Hide' : 'Show'} code`}
                                    onClick={() => this.setState({showCallSampleCode: !this.state.showCallSampleCode})}>
                                </PrimaryButton>
                            </div>
                        </div>
                        <div>Having provisioned an ACS Identity and initialized the SDK from the section above, you are now ready to place calls, join group calls, and receiving calls.</div>
                        {
                            this.state.showCallSampleCode &&
                            <pre>
                                <code style={{color: '#b3b0ad'}}>
                                    {callSampleCode}
                                </code>
                            </pre>
                        }
                        {
                            this.state.showCameraNotFoundWarning && 
                            <MessageBar
                                messageBarType={MessageBarType.warning}
                                isMultiline={false}
                                onDismiss={ () => { this.setShowCameraNotFoundWarning(false) }}
                                dismissButtonAriaLabel="Close">
                                <b>No camera device found!</b>
                            </MessageBar>
                        }
                        {
                            this.state.showSpeakerNotFoundWarning && 
                            <MessageBar
                                messageBarType={MessageBarType.warning}
                                isMultiline={false}
                                onDismiss={ () => { this.setShowSpeakerNotFoundWarning(false) }}
                                dismissButtonAriaLabel="Close">
                                <b>No speaker device found!</b>
                            </MessageBar>
                        }
                        {
                            this.state.showMicrophoneNotFoundWarning && 
                            <MessageBar
                                messageBarType={MessageBarType.warning}
                                isMultiline={false}
                                onDismiss={ () => { this.setShowMicrophoneNotFoundWarning(false) }}
                                dismissButtonAriaLabel="Close">
                                <b>No microphone device found!</b>
                            </MessageBar>
                        }
                        {
                            !this.state.call &&
                            <div className="ms-Grid-row mt-3">
                                <div className="mb-5 ms-Grid-col ms-lg4 ms-lgPush1 ms-sm12">
                                    <h3 className="mb-1">Place a call</h3>
                                    <div>Enter an Identity to make a call to.</div>
                                    <div>You can specify multiple Identities to call by using "," separated values.</div>
                                    <div>If calling a Phone Identity, your Alternate Caller Id must be specified. </div>
                                    <TextField disabled={this.state.call || !this.state.loggedIn}
                                                label="Destination Identity or Identities"
                                                componentRef={(val) => this.destinationUserIds = val} />
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-lg6 ms-sm12">
                                            <TextField className="mb-3" disabled={this.state.call || !this.state.loggedIn}
                                                        label="Destination Phone Identity or Phone Identities"
                                                        componentRef={(val) => this.destinationPhoneIds = val} />
                                        </div>
                                        <div className="ms-Grid-col ms-lg6 ms-sm12 mb-3">
                                            <TextField disabled={this.state.call || !this.state.loggedIn}
                                                        label="Alternate Caller Id (For calling phone numbers only)"
                                                        componentRef={(val) => this.alternateCallerId = val} />
                                        </div>
                                    </div>
                                    <PrimaryButton className="primary-button" iconProps={{iconName: 'Phone', style: {verticalAlign: 'middle', fontSize: 'large'}}} text="Place call" disabled={this.state.call || !this.state.loggedIn} label="Place call" onClick={this.placeCall}></PrimaryButton>
                                </div>
                                <div className="mb-5 ms-Grid-col ms-lg4 ms-lgPush3 ms-sm12">
                                    <h3 className="mb-1">Join a group call</h3>
                                    <div>Group Id must be in GUID format.</div>
                                    <TextField className="mb-3" disabled={this.state.call || !this.state.loggedIn} label="Group Id" placeholder="29228d3e-040e-4656-a70e-890ab4e173e5" defaultValue="29228d3e-040e-4656-a70e-890ab4e173e5" componentRef={(val) => this.destinationGroup = val} />
                                    <PrimaryButton className="primary-button" iconProps={{iconName: 'Group', style: {verticalAlign: 'middle', fontSize: 'large'}}} text="Join group" disabled={this.state.call || !this.state.loggedIn} label="Join group call" onClick={this.joinGroup}></PrimaryButton>
                                </div>
                            </div>
                        }
                        {
                            this.state.call && (<CallCard call={this.state.call}
                                                    deviceManager={this.deviceManager}
                                                    selectedCameraDeviceId={this.state.selectedCameraDeviceId}
                                                    selectedSpeakerDeviceId={this.state.selectedSpeakerDeviceId}
                                                    selectedMicrophoneDeviceId={this.state.selectedMicrophoneDeviceId}
                                                    onShowCameraNotFoundWarning={() => {this.setShowCameraNotFoundWarning}}
                                                    onShowSpeakerNotFoundWarning={() => {this.setShowSpeakerNotFoundWarning}}
                                                    onShowMicrophoneNotFoundWarning={() => {this.setShowMicrophoneNotFoundWarning}}/>)
                        }
                        {
                            this.state.callEndReason &&
                            (<CallEndReasonCard callEndReason={this.state.callEndReason} />)
                        }
                    </div>
                </div>
                <div className="card">
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <h2 className="ms-Grid-col ms-lg6 ms-sm6 mb-4">Video, Screen sharing, and local video preview</h2>
                            <div className="ms-Grid-col ms-lg6 ms-sm6 text-right">
                                <PrimaryButton className="code-button"
                                    iconProps={{iconName: 'Video', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                    text={`${this.state.showStreamingSampleCode ? 'Hide' : 'Show'} code`}
                                    onClick={() => this.setState({showStreamingSampleCode: !this.state.showStreamingSampleCode})}>
                                </PrimaryButton>
                            </div>
                        </div>
                        {
                            this.state.showStreamingSampleCode &&
                            <pre>
                                <code style={{color: '#b3b0ad'}}>
                                    {streamingSampleCode}
                                </code>
                            </pre>
                        }
                        <h3>
                            Video - try it out.
                        </h3>
                        <div>
                            From your current call, toggle your video on and off by clicking on the <Icon className="icon-text-xlarge" iconName="Video"/> icon.
                            When you start you start your video, remote participants can see your video by receiving a stream and rendering it in an HTML element.
                        </div>
                        <br></br>
                        <h3>
                            Screen sharing - try it out.
                        </h3>
                        <div>
                            From your current call, toggle your screen sharing on and off by clicking on the <Icon className="icon-text-xlarge" iconName="TVMonitor"/> icon.
                            When you start sharing your screen, remote participants can see your screen by receiving a stream and rendering it in an HTML element.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <h2 className="ms-Grid-col ms-lg6 ms-sm6 mb-4">Mute / Unmute</h2>
                            <div className="ms-Grid-col ms-lg6 ms-sm6 text-right">
                                <PrimaryButton 
                                    className="code-button"
                                    iconProps={{iconName: 'Microphone', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                    text={`${this.state.showMuteUnmuteSampleCode ? 'Hide' : 'Show'} code`}
                                    onClick={() => this.setState({showMuteUnmuteSampleCode: !this.state.showMuteUnmuteSampleCode})}>
                                </PrimaryButton>
                            </div>
                        </div>
                        {
                            this.state.showMuteUnmuteSampleCode &&
                            <pre>
                                <code style={{color: '#b3b0ad'}}>
                                    {muteUnmuteSampleCode}
                                </code>
                            </pre>
                        }
                        <h3>
                            Try it out.
                        </h3>
                        <div>
                            From your current call, toggle your microphone on and off by clicking on the <Icon className="icon-text-xlarge" iconName="Microphone"/> icon.
                            When you mute or unmute your microphone, remote participants can receive an event about wether your micrphone is muted or unmuted.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <h2 className="ms-Grid-col ms-lg6 ms-sm6 mb-4">Hold / Unhold</h2>
                            <div className="ms-Grid-col ms-lg6 ms-sm6 text-right">
                                <PrimaryButton
                                    className="code-button"
                                    iconProps={{iconName: 'Play', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                    text={`${this.state.showHoldUnholdSampleCode ? 'Hide' : 'Show'} code`}
                                    onClick={() => this.setState({showHoldUnholdSampleCode: !this.state.showHoldUnholdSampleCode})}>
                                </PrimaryButton>
                            </div>
                        </div>
                        {
                            this.state.showHoldUnholdSampleCode &&
                            <pre>
                                <code style={{color: '#b3b0ad'}}>
                                    {holdUnholdSampleCode}
                                </code>
                            </pre>
                        }
                        <h3>
                            Try it out.
                        </h3>
                        <div>
                            From your current call, toggle hold call and unhold call on by clicking on the <Icon className="icon-text-xlarge" iconName="Play"/> icon.
                            When you hold or unhold the call, remote participants can receive other participant state changed events. Also, the call state changes.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <h2 className="ms-Grid-col ms-lg6 ms-sm6 mb-4">Device Manager</h2>
                            <div className="ms-Grid-col ms-lg6 ms-sm6 text-right">
                                <PrimaryButton
                                    className="code-button"
                                    iconProps={{iconName: 'Settings', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                    text={`${this.state.showDeviceManagerSampleCode ? 'Hide' : 'Show'} code`}
                                    onClick={() => this.setState({showDeviceManagerSampleCode: !this.state.showDeviceManagerSampleCode})}>
                                </PrimaryButton>
                            </div>
                        </div>
                        {
                            this.state.showDeviceManagerSampleCode &&
                            <pre>
                                <code style={{color: '#b3b0ad'}}>
                                    {deviceManagerSampleCode}
                                </code>
                            </pre>
                        }
                        <h3>
                            Try it out.
                        </h3>
                        <div>
                            From your current call, click on the <Icon className="icon-text-xlarge" iconName="Settings"/> icon to open up the settings panel.
                            The DeviceManager is used to select the devices (camera, microphone, and speakers) to use across the call stack and to preview your camera.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}