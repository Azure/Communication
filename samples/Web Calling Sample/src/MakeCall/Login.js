import React from "react";
import { PrimaryButton } from 'office-ui-fabric-react'
import { utils } from "../Utils/Utils";
import { TextField } from 'office-ui-fabric-react'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userDetailsResponse = undefined;
        this.userIdentity = undefined;

        this.state = {
            showUserProvisioningAndSdkInitializationCode: false,
            showSpinner: false,
            disableInitializeButton: false,
            loggedIn: false
        }
    }

    provisionNewUser = async () => {
        try {
            this.setState({ showSpinner: true});
            this.userDetailsResponse = await utils.provisionNewUser(this.userIdentity);
            this.setState({ id: utils.getIdentifierText(this.userDetailsResponse.user) });
            await this.props.onLoggedIn({ id: this.state.id, token: this.userDetailsResponse.token });
            this.setState({ loggedIn: true });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ disableInitializeButton: true, showSpinner: false });
        }
    }

    render() {
        const userProvisioningAndSdkInitializationCode = `
/**************************************************************************************
 *   User token provisioning service should be set up in a trusted backend service.   *
 *   Client applications will make requests to this service for gettings tokens.      *
 **************************************************************************************/
import  { CommunicationIdentityClient } from @azure/communication-administration;
const communicationIdentityClient = new CommunicationIdentityClient(<RESOURCE CONNECTION STRING>);
app.get('/tokens/provisionUser', async (request, response) => {
    try {
        const communicationUserId = await communicationIdentityClient.createUser();
        const tokenResponse = await communicationIdentityClient.issueToken({ communicationUserId }, ['voip']);
        response.json(tokenResponse);
    } catch(error) {
        console.log(error);
    }
});

/********************************************************************************************************
 *   Client application initializing the ACS Calling Client Web SDK after receiving token from service   *
 *********************************************************************************************************/
import { CallClient } from '@azure/communication-calling';
import { AzureCommunicationUserCredentials } from '@azure/communication-common';
import { createClientLogger, setLogLevel } from '@azure/logger';

export class MyCallingApp {
    constructor() {
        this.callClient = undefined;
        this.callAgent = undefined;
        this.deviceManager = undefined;
        this.currentCall = undefined;
    }

    public async initCallClient() {
        const response = (await fetch('/tokens/provisionUser')).json();
        const token = response.token;
        const tokenCredential = new AzureCommunicationUserCredential(token);

        // Create Azure logger
        const logger = createClientLogger('ACS');
        setLogLevel('verbose');
        // Redirect logger output to wherever desired
        logger.verbose.log = (...args) => { console.log(...args); };
        logger.info.log = (...args) => { console.info(...args) ; };
        logger.warning.log = (...args) => { console.warn(...args); };
        logger.error.log = (...args) => { console.error(...args); };
        const options = { logger };
    
        // CallClient is the entrypoint for the SDK. Use it to
        // to instantiate a CallClient and to access the DeviceManager
        this.callClient = new CallClient(options);
        this.callAgent = await this.callClient.createCallAgent(tokenCredential);
        this.deviceManager = await this.callClient.getDeviceManager();

        // Handle Calls and RemoteParticipants
        // Subscribe to 'callsUpdated' event to be when a a call is added or removed
        this.callAgent.on('callsUpdated', calls => {
            calls.added.foreach(addedCall => {
                //Subscribe to call state changed event
                addedCall.on('callStateChanged', callStateChangedHandler);

                /Subscribe to call id changed event
                addedCall.on('callIdChanged', callIdChangedHandler);

                // Subscribe to remote participants updated event
                addedCall.on('remoteParticipantsUpdated', participants => {
                    participants.added.forEach(addedParticipant => {
                        // Subscribe to participant state changed event.
                        addedParticipant.on('participantStateChanged', participantStateChangedHandler);

                        // Subscribe to is muted changed event.
                        addedParticipant.on('isMutedChanged', isMutedChangedHandler);

                        // Subscribe to display name changed event
                        addedParticipant.on('displayNameChanged', dispalyNameChangedHandler);

                        // Subscribe to participant is speaking changed event
                        addedParticipant.on('isSpeakingChanged', isSpeakingChangedHandler);

                        // Subscribe to video streams and screen-sharing streams updated event.
                        addedParticipant.on('videoStreamsUpdated', handleStreamsUpdated);
                    });

                    participants.removed.forEach(removedParticipant => {
                        removedParticipantHandler(removedParticipant);
                    });
                });
            });

            calls.removed.foreach(removedCall => {
                removedCallHandler(removedCall);
            });
        });
    }
}
        `;

        return (
            <div className="card">
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <h2 className="ms-Grid-col ms-lg6 ms-sm6 mb-4">User Provisioning and SDK Initialization</h2>
                        <div className="ms-Grid-col ms-lg6 ms-sm6 text-right">
                            <PrimaryButton className="code-button"
                                iconProps={{iconName: 'ReleaseGate', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                text={`${this.state.showUserProvisioningAndSdkInitializationCode ? 'Hide' : 'Show'} code`}
                                onClick={() => this.setState({showUserProvisioningAndSdkInitializationCode: !this.state.showUserProvisioningAndSdkInitializationCode})}>
                            </PrimaryButton>
                        </div>
                    </div>
                    {
                        this.state.showUserProvisioningAndSdkInitializationCode &&
                        <pre>
                            <code style={{color: '#b3b0ad'}}>
                                {userProvisioningAndSdkInitializationCode}
                            </code>
                        </pre>
                    }
                    <div>The ACS Administration SDK can be used to create a user access token which authenticates the calling clients. </div>
                    <div>The example code shows how to use the ACS Administration SDK from a backend service. A walkthrough of integrating the ACS Administration SDK can be found on <a className="sdk-docs-link" target="_blank" href="https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/access-tokens?branch=pr-en-us-104477&pivots=programming-language-javascript">Microsoft Docs</a></div>
                    {
                        this.state.loggedIn && 
                        <div>
                            <br></br>
                            <div>Congrats! You've provisioned an ACS user identity and initialized the ACS Calling Client Web SDK. You are ready to start making calls!</div>
                            <div>The Identity you've provisioned is: <span className="identity"><b>{this.state.id}</b></span></div>
                        </div>
                    }
                    {
                        this.state.showSpinner &&
                        <div className="custom-row justify-content-left align-items-center mt-4">
                            <div className="loader"> </div>
                            <div className="ml-2">Fetching token from service and initializing SDK...</div>
                        </div>
                              
                    }
                    {
                        !this.state.loggedIn &&
                        <div className="mt-3">
                            <div className="ms-Grid-row">
                                <div className="ms-Grid-col ms-lg3">
                                    <TextField label="User identity to provision a token for. If no user identity specified, then a random user identity will be generated"
                                                componentRef={(val) => this.userIdentity = val} />
                                </div>
                            </div>
                            <PrimaryButton className="primary-button mt-3"
                                iconProps={{iconName: 'ReleaseGate', style: {verticalAlign: 'middle', fontSize: 'large'}}}
                                label="Provision an user" 
                                disabled={this.state.disableInitializeButton}
                                onClick={() => this.provisionNewUser()}>
                                    Provision user and initialize SDK
                            </PrimaryButton>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
