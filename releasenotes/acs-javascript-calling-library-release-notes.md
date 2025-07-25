# ACS Calling Web (JavaScript) SDK - Release History
- [Sample Applications](https://docs.microsoft.com/azure/communication-services/samples/overview)
- [API usage documentation](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/calling-client-samples?pivots=platform-web)
- [API reference documentation](https://docs.microsoft.com/en-us/javascript/api/azure-communication-services/@azure/communication-calling/?view=azure-communication-services-js)
- [Voice and Video Calling quickstart](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-with-video-calling?pivots=platform-web) - This is a quick start application to get started with voice and video calling.
- [Overview](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/calling-sdk-features) - Concepts, supported environments, and best practices.

If you are working with **Teams users**, please follow the `Teams identities` documentation in the list for example and usage
- [Teams Identities API usage](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/cte-calling-sdk/manage-calls)
- [Teams Identities quick start](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-with-voice-video-calling-custom-teams-client)
- [Teams Identities object model](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-with-voice-video-calling-custom-teams-client#azure-communication-services-calling-web-sdk-object-model)

## 1.37.2 (2025-07-22)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.37.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.37.2)

### New features
- Support for [3-layer simulcast support]( https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/simulcast)  is now available on Desktop Chrome and Edge environments. This allows multiple renditions of video streams to be sent, providing options for video quality selection.

### Bug Fixes
- Improved compatibility with the Next.js frameworks by Removing 'browser' key from package.json .
- Addressed screen sharing resolution degradation affecting some desktop environments in low network conditions.
- Resolved issue where calls were dropped in iOS Safari when multiple microphones (e.g., built-in and Bluetooth) were simultaneously connected.
- Fixed a bug where the hold API was failing during rendering of 4x4 video layouts
- Corrected issue causing call drops with subcode 3111 under certain conditions.

## 1.38.1-beta.1 (2025-07-21)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.38.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.38.1-beta.1)

### New Features
- Support for [3-layer simulcast support]( https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/simulcast)  is now available on Desktop Chrome and Edge environments. This allows multiple renditions of video streams to be sent, providing options for video quality selection.-
- A [5x5 video grid]( https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/optimizing-video-placement#how-many-videos-to-place-in-a-grid-at-a-time) is now available on Web Desktop, enabling up to 25 remote participants to be displayed for enhanced group calls.
- The Calling SDK for Web Desktop has enhanced its audio technology by introducing [echo suppression]( https://learn.microsoft.com/en-us/azure/communication-services/tutorials/audio-quality-enhancements/add-noise-supression?pivots=platform-web) functionality. This advancement enables developers to offer their customers the ability to eliminate undesired microphone feedback echoes.

### Bug Fixes
- Improved compatibility with the Next.js frameworks by Removing 'browser' key from package.json.
- Addressed screen sharing resolution degradation affecting some desktop environments in low network conditions.
- Resolved issue where calls were dropped in iOS Safari when multiple microphones (e.g., built-in and Bluetooth) were simultaneously connected.
- Fixed a bug where the hold API was failing during rendering of 4x4 video layouts.
- Corrected issue causing call drops with subcode 3111 under certain conditions.
- Fixed a bug where DeviceManager failed to enumerate devices, improving reliability of device selection across environments.

## 1.37.1 (2025-07-08)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.37.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.37.1)

### New Features
- Dual Pin - Released to GA support for rendering 2 streams with high resolution - up to [2 streams with resolution up to 720p](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/optimizing-video-placement#things-to-consider-when-adding-a-1080p-or-720p-video-to-a-page) can be rendered simultaneously.

## 1.36.1 (2025-06-16)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.36.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.36.1)

### New Features
- RAW screen sharing stream API access - Enabled the ability to use screen share as a second virtual camera [https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-raw-media-access?pivots=platform-web#access-raw-screen-sharing](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-raw-media-access?pivots=platform-web#access-raw-screen-sharing))


## 1.37.1-beta.1 (2025-06-16)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.37.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.37.1-beta.1)

### New Features
- Bugfix:  Resolved issue related to adding a dual persona participant to a call. See [https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/tpe/teams-phone-extensibility-quickstart#ccaas-client-developer-how-to-authenticate-as-dual-persona]( for more details on dual persona.Teams Phone System extensibility)

## 1.35.1 (2025-05-08)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.35.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.35.1)

### New Features
- Added a new feature that allows for promoting Teams Shared Line Appearance for CTE users to GA. Please see [here](https://learn.microsoft.com/en-us/azure/communication-services/concepts/interop/teams-user/teams-shared-line-appearance) for more details.

### Fixes and Improvements
- [Real Time Text](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/real-time-text) support for Custom Teams Endpoint (CTE) participants.

## 1.36.1-beta.1 (2025-05-08)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.36.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.36.1-beta.1)

### New features 
- Teams Phone System extensibility [https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/tpe/teams-phone-extensibility-quickstart#ccaas-client-developer-how-to-authenticate-as-dual-persona](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/tpe/teams-phone-extensibility-quickstart#ccaas-client-developer-how-to-authenticate-as-dual-persona))
  
### Fixes and Improvements
- [Real Time Text](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/real-time-text) support for Custom Teams Endpoint (CTE) participants.

## 1.34.1 (2025-04-7)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.34.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.34.1)

### New Features
- Mobile web browsers now support sending video at [720p resolution](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/calling-sdk-features#supported-video-resolutions).
- [Real Time Text](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/real-time-text) Instantly transmit text as you type while in a call, enabling seamless and immediate communication for more accessible and responsive interactions.
- [Collaborator role](https://learn.microsoft.com/en-us/azure/communication-services/concepts/rooms/room-concept#predefined-participant-roles-and-permissions-in-virtual-rooms-calls) for Rooms, granting participants permissions for using audio, video, and screensharing features.
- [Background blur and background replacement](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-video-effects?pivots=platform-web) on Android mobile browsers.

### Fixes and Improvements
- Fixed an issue that caused the Web SDK bundle size to improperly increase in size, starting in version 1.33 and 1.34.1-beta.
- Updated message for subcode 0/5003: "Call was ended by Azure Communication Service as the call has ended."
- Added a new subcode for 401/71005: "Call failed due to a validation error in Azure Communication Services."

## 1.35.1-beta.1 (2025-04-7)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.35.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.35.1-beta.1)

### New Features
- Desktop browsers (Chrome and Edge), now support sending [1080p video resolution](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/optimizing-video-placement#how-to-configure-to-send-a-1080p-stream)
- Mobile web browsers now support sending video at [720p resolution](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/calling-sdk-features#supported-video-resolutions).

### Fixes and Improvements
- Fixed an issue that caused the Web SDK bundle size to improperly increase in size, starting in version 1.33 and 1.34.1-beta.
- Updated message for subcode 0/5003: "Call was ended by Azure Communication Service as the call has ended."
- Added a new subcode for 401/71005: "Call failed due to a validation error in Azure Communication Services."

## 1.34.1-beta.2 (2025-03-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.34.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.34.1-beta.2)

### New features:
- Introduce the [Collaborator role](https://learn.microsoft.com/azure/communication-services/concepts/rooms/room-concept#predefined-participant-roles-and-permissions-in-virtual-rooms-calls) for Rooms, granting participants permissions for using audio, video, and screensharing features.
- Support for muting remote PSTN participants

## 1.33.3 (2025-03-07)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.33.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.33.3)

### Fixes and Improvements:
- Fixed an issue that caused audio echo when starting screen sharing with system audio.


## 1.33.2 (2025-02-24)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.33.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.33.2)

### New features:
- <b>handleIncomingCall event</b> - Added new telemetry value handleIncomingCall to the Calling SDK that notifies whether the incoming call notification on the client side has been acknowledged. This telemetry will be available in the Call client operations log schema. Azure Communication Services call client operations log schema - An Azure Communication Services concept article | Microsoft Learn and will appear as part of the [OperationsPayload property](https://learn.microsoft.com/en-us/azure/communication-services/concepts/analytics/logs/call-client-operations-log-schema#call-client-operations-log-schema-1).

### Fixes and Improvements:
- Addressed an issue that the user could not stop video when a cameraFailed UFD is fired before the call is connected.
- Added new  event named transferorInfoChanged object that contains information about the prior call state, the callerInfo (about the initial caller) and the transferorInfo (about the entity transferring or forwarding the call). For more information about these objects, see [transfer calls](https://learn.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/transfer-calls#initial-caller-and-transferor-information).

## 1.33.1 (2025-02-11)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.33.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.33.1)

### Fixes and Improvements:
- Enhanced the End of Call survey feature in the stable SDK to use slightly less memory. Please see [https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/end-of-call-survey-concept](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/end-of-call-survey-concept) for more detials.
- Implemented improvements in the NetworkInfo telemetry ability so that network telemetry data can be collected before a client joins a call. This data is now also available in the Call Diagnostics toolkit. See [https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/call-diagnostics](https://learn.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/call-diagnostics) to learn more about Call Diagnostics capabilities
- Improved the calling experience when a WebJS user calls another directly, and the caller closes the browser tab before the recipient accepts. The call will now signal properly as the call ended instead of continuously ringing for the recipient.
- A new telemetry value handleIncomingCall has been added to Caling SDk that notifies whether the incoming call notification on the client side has been acknowledged.
  
## 1.33.2-beta.1 (2025-01-30)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.33.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.33.2-beta.1)

### New features:
- <b>Dual Pin</b> - Support for rendering 2 streams with high resolution - up to 2 streams with resolution up to 720p can be rendered simultaneously. 
- <b>RealTimeText</b> - Instantly transmit text as you type while in a call, enabling seamless and immediate communication for more accessible and responsive interactions.

## 1.32.1 (2024-01-09)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.32.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.32.1)

### Fixes
- Addressed an issue where clients using MacOS Safari were sending low-quality screen share resolutions.

## 1.31.2 (2024-12-12)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.31.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.31.2)

### New features:
- <b>Ad hoc calling</b> - ACS WebJS SDK now enables users to make ad hoc calls to Teams users. This offers external customers a custom experience and allows employees to meet all communication needs in one hub: Teams. See [Quickstart - Teams interop calls on Azure Communication Services - An Azure Communication Services quickstart | Microsoft Learn](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-teams-interop-group-calls) for more learning and details.
- <b>Together Mode</b> – ACS web calling now supports joining and viewing Teams Together Mode calls, a feature that places participants in a shared virtual background to make meetings more engaging. This enhances virtual meetings and calls by creating a unified view that places everyone in a shared background, allowing participants to connect and collaborate effectively. Unify your virtual meetings experience with a shared background. See [Together Mode - An Azure Communication Services how-to guide | Microsoft Learn](https://review.learn.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/together-mode?branch=live) to learn more.
- <b>Breakout Rooms</b> - Enable users of ACS and Custom Teams Endpoint (CTE) to participate in Teams Breakout Rooms, facilitating more personal connections and meaningful discussions. See [Tutorial - Integrate Microsoft Teams breakout rooms - An Azure Communication Services tutorial | Microsoft Learn](https://learn.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/breakoutrooms) for more details.
- <b>Media Access</b> - The media access feature allows organizers or presenters to prevent attendees from unmuting themselves or turning on their video during a Microsoft Teams meeting. If the microphone or camera is disabled by the organizer or presenter, attendees will not be able to unmute or turn on their video until the organizer enables it.
- <b>Ensure explicit consent for recording and transcription when utilizing the ACS SDK.</b> - The ACS calling SDK includes an API that facilitates obtaining consent for recording and transcription during meetings. See [Manage call recording on the client - An Azure Communication Services how-to guide | Microsoft Learn](https://learn.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/record-calls?pivots=platform-web) and [Display call transcription state on the client - An Azure Communication Services how-to guide | Microsoft Learn](https://learn.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/call-transcription?pivots=platform-web) for more details.

## 1.32.1-beta.1 (2024-12-05)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.31.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.31.2-beta.1)

## 1.30.4 (2024-11-12)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.30.4](https://www.npmjs.com/package/@azure/communication-calling/v/1.30.4)

### Fixes
- This update resolves an issue in the Web SDK that disabled early media when making 1:1 calls to a PSTN phone number. Please upgrade to this SDK to enable early media for outbound calls

## 1.31.2-beta.1 (2024-11-11)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.31.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.31.2-beta.1)

### Fixes
- This update resolves an issue in the Web SDK that disabled early media when making 1:1 calls to a PSTN phone number. Please upgrade to this SDK to enable early media for outbound calls

## 1.31.1-beta.1 (2024-11-05)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.31.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.31.1-beta.1)

### New features:
- Organizers and presenters can manage attendee audio and video permissions. They have the ability to disable the microphone or camera for all attendees, or for specific individuals, at any time during the Microsoft Teams meeting.

## 1.30.2 (2024-10-31)
- Available in NPM - ⁠[https://www.npmjs.com/package/@azure/communication-calling/v/1.30.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.30.2)

### New features
- iOS Edge support GA
- Call survey data of interop call is now accessible through the Teams Admin Center, Call Quality Dashboard (CQD), PowerBI (via the CQD connector), and Graph API.

### Fixes
- Telemetry improvements

## 1.30.1-beta.2 (2024-10-22)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.30.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.30.1-beta.2)

### Fixes
- Telemetry improvement
- ⁠Added additional logging for video and audio effects usage.
- Fixed issues of missing headers for inbound PSTN call

## 1.29.1 (2024-10-07)
- Available in NPM - ⁠[https://www.npmjs.com/package/@azure/communication-calling/v/1.29.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.29.1)

### New features
- ⁠Transfer to VoiceMail feature GA
- ⁠Audio Effects feature GA

### Fixes
- ⁠Added additional logging for video and audio effects usage.
- ⁠Fixed thread id updating issue.
- Fixed issues of missing headers for inbound PSTN call

## 1.30.1-beta.1 (2024-10-01)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.30.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.30.1-beta.1)

### New features:
- Remote Client User Facing Diagnostics - You can now see UFDs for remote participants in the call.
- iOS Edge support - The SDK now supports the iOS Edge platform

### Fixes
- Telemetry improvement
- Added additional logging for video and audio effects usage.
- Fixed the screen sharing issue that occurred when a call was put on hold. Now, screen sharing stops before the call is placed on hold
- Fixed scene and seat changed events for together mode

## 1.28.4 (2024-9-11)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.4?activeTab=readme](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.4?activeTab=readme)

### Features
- Noise suppression now available in GA. Try it out with the help of our latest effects stable SDK [https://www.npmjs.com/package/@azure/communication-calling-effects/v/1.1.1](https://www.npmjs.com/package/@azure/communication-calling-effects/v/1.1.1).
	- More info: [https://review.learn.microsoft.com/en-us/azure/communication-services/tutorials/audio-quality-enhancements/add-noise-supression?branch=main&branchFallbackFrom=pr-en-us-286559&pivots=platform-web](https://review.learn.microsoft.com/en-us/azure/communication-services/tutorials/audio-quality-enhancements/add-noise-supression?branch=main&branchFallbackFrom=pr-en-us-286559&pivots=platform-web)

## 1.29.1-beta.2 (2024-9-5)
## 1.28.2 (2024-9-5)
## 1.27.7 (2024-9-5)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.29.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.29.1-beta.2)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.2)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.7](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.7)

### Fixes
- Fixed a crash on incoming calls when customer application was built using Angular JS framework, would cause the application to freeze and incoming calls to fail to connect.

## 1.29.1-beta.1 (2024-08-26)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.29.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.29.1-beta.1)

### New features
- Background blur and background replacement features are now available in public preview on Android Chrome.
- Pass contextual data between calls through headers during call initialization, adding participant and call transfer.
```js

   // Setting custom context.
   // Any combination of only sipHeaders or voipHeaders or both is allowed.
 
   const callOptions = {
        customContext: {
            voipHeaders: [
                {key: 'voip-key-1', value: 'voip-value-1'},
                {key: 'voip-key-2', value: 'voip-value-2'}
            ],
            sipHeaders: [
                {key: 'sip-key-1', value: 'sip-value-1'},
                {key: 'sip-key-2', value: 'sip-value-2'}
            ],
            userToUser: 'userToUserHeader',
        },
    };
    // Starting a call with custom context.
    
    callAgent.startCall("USER_ID", callOptions);
    
    // adding participant to existing call or transfer with custom context.
    
    call.addParticipant("USER_ID", callOptions);

    // Parsing custom context on the receiver side
    
    let info = '';
 
    callAgent.on("incomingCall", (args) => {
        const incomingCall = args.incomingCall;
        if (incomingCall.customContext) {
            if (incomingCall.customContext.userToUser) {
                info += `userToUser: '${incomingCall.customContext.userToUser}'\n`;
            }
            if (incomingCall.customContext.sipHeaders) {
                incomingCall.customContext.sipHeaders.forEach(header => info += `sip: ${header.key}: '${header.value}'\n`);
            }
            if (incomingCall.customContext.voipHeaders) {
                incomingCall.customContext.voipHeaders.forEach(header => info += `voip: ${header.key}: '${header.value}'\n`);
            }
        }
    });
    
```
  
### Fixes
- Bug Fixes
- Telemetry improvements

## 1.28.1 stable (2024-08-26)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1)
  
### Fixes
- Bug Fixes
- Telemetry improvements

## 1.28.1-beta.4 (2024-08-15)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.4](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.4)

### Fixes
- Fixed issue where Call.callEndReason API returns the wrong code/subcode.
- Fixed RoomID being undefined in CallInfo object.

## 1.27.5 stable (2024-08-15)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.5](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.5)

### Fixes
- Fixed issue where Call.callEndReason API returns the wrong code/subcode.
- Fixed RoomID being undefined in CallInfo object.

## 1.28.1-beta.3 (2024-08-08)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.3)

### Fixes
- Fixed the issue where Teams Captions did not start for ACS users in P2P and Group Call scenarios with CTE users

## 1.27.4 stable (2024-08-08)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.4](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.4)

### Fixes
- Fixed the issue where Teams Captions did not start for ACS users in P2P and Group Call scenarios with CTE users

## 1.28.1-beta.2 (2024-07-31)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.2)

### Fixes
- Fixed the issue where Teams Captions did not start in P2P and Group Call scenarios involving CTE users with enabled policies

## 1.27.3 stable (2024-07-31)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.3)

### Fixes
- Fixed the issue where Teams Captions did not start in P2P and Group Call scenarios involving CTE users with enabled policies

## 1.28.1-beta.1 (2024-07-24)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.28.1-beta.1)

### New features:
- Together Mode - Bring everyone's video stream together in a shared background.
- Transfer to VoiceMail - Transfer a call directly to a colleague's voicemail.
- Breakout Rooms - ACS identities and Teams identities can join breakout rooms.

## 1.27.2 stable (2024-07-24)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.2)

### Fixes
- Added new internal telemetry to capture network information.
- Added ability to mute remote participants who are on hold.
- Fixed the issue where the incoming screensharing stream freezes when the mobile phone's camera is enabled.
  
### New features:
- Upgraded muteOthers capability to GA for Soft Mute.
- Rendering 4x4 (16) incoming videos is now GA on desktop browsers.
    - Requirements: 
        - 16GB RAM and 4-core CPU no older than 3 years as minimal recommended requirements for 4x4.
        - Use OVC (Optimal Video Count) API to render the most optimal count of incoming videos.

  
## 1.27.1-beta.2 (2024-07-18)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.1-beta.2)

### Fixes:
- Fixed uncaught exception leak on TeamsCall when terminated the call before it is connected.
- Updated the fix for tab screenshare banner not disappearing immediately after stopping screenshare. The screenshare banner should now disappear immediately on stopping screenshare.
- Hotfix for video effects not working in subsequent calls, after ending the first call.
- Improve networkReceiveQuality UFD.
- Rendering 4x4 (16) incoming videos is now GA on desktop browsers,also available in BETA SDKs
  - Requirements: 
    - 16GB RAM and 4-core CPU no older than 3 years as minimal recommended requirements for 4x4.
    - Use OVC (Optimal Video Count) API to render the most optimal count of incoming videos.

## 1.26.2 stable (2024-07-18)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.26.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.26.2)

### Fixes:
- Hotfix for video effects not working in subsequent calls, after ending the first call.
- Fixed uncaught exception leak on TeamsCall when terminated the call before it is connected.

## 1.27.1-beta.1 (2024-07-04)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.27.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.27.1-beta.1)

### New Features:
- Soft Mute - mute a specific participant or all participants in the call, and a local event notifying connected participants they have been muted by others.

### Fixes:
- The audio effect feature clears the active effect when the call is over.
- Fixed a bug where the screenshare banner would not disappear immediately while sharing a tab on Windows Chrome.
- When rendering remote participants video, createView method shall return faster with the perfomance improvements added to the SDK.

## 1.26.1 stable (2024-07-04)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.26.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.26.1)

### New Features:
- Add captions feature allowing ACS users to enable closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call.
- Soft Mute - mute a specific participant or all participants in the call, and a local event notifying connected participants they have been muted by others.
- Call information reaches general availability, application can see these extra properties and methods right on the call object and access groupid, participantid and getServerCallId().
- [Proxy and Turn](https://learn.microsoft.com/en-us/azure/communication-services/tutorials/proxy-calling-support-tutorial?pivots=platform-web) configuration options reach general availability, application can configure and send all client traffic proxied to a different server.

### Fixes:
- The audio effect feature clears the active effect when the call is over.
- Fixed a [bug](https://github.com/Azure/azure-sdk-for-js/issues/29391) where remote mute status state was not propagating correctly.
- Fixed a memory leak where disposing local audio/video streams was not disposing correctly.
- Fixed a [bug](https://github.com/Azure/azure-sdk-for-js/issues/29260) where Screenshare DOM element had wrong attributes.
- When rendering remote participants video, createView method shall return faster with the perfomance improvements added to the SDK.

## 1.26.1-beta.1 (2024-05-30)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.26.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.26.1-beta.1)

### New Features:
- Adding support for teams premium license check with Captions related calling and meeting policy checks for Capabilities.

## 1.25.1 stable (2024-05-30)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.25.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.25.1)

### New Features:
- New start call API `startCall(participants: (CommunicationIdentifier)[], options?: StartCallOptions): Call`
- Custom context feature. Adding support for calling with userToUser and custom headers.

## 1.25.3-beta.1 (2024-05-30)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.25.3-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.25.3-beta.1)

### Fixes:
- When participant added after recording started, then the `RecordingCallFeature::isRecordingActive` was not giving correct value. Now it will give accurate state when the API is called.
- Fixed an issue where the microphone would remain on even after the call was over. The microphone usage now stops properly on call end.

## 1.24.4 stable (2024-05-30)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.24.4](https://www.npmjs.com/package/@azure/communication-calling/v/1.24.4)

### Fixes:
- When participant added after recording started, then the `RecordingCallFeature::isRecordingActive` was not giving correct value. Now it will give accurate state when the API is called.
- Fixed an issue where the microphone would remain on even after the call was over. The microphone usage now stops properly on call end.

## 1.24.3-beta.1 (2024-05-30)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.24.3-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.24.3-beta.1)

### Fixes:
- When participant added after recording started, then the `RecordingCallFeature::isRecordingActive` was not giving correct value. Now it will give accurate state when the API is called.
- Fixed an issue where the microphone would remain on even after the call was over. The microphone usage now stops properly on call end.

## 1.25.2-beta.2 (2024-05-16)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.25.2-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.25.2-beta.2)

### Fixes:
- `CallAgent` connection state bug fix to show `Disconnected` as initial state.
- Allow to initialize SDK regardless of the `CallAgent` connection state.

## 1.24.3 stable (2024-05-14)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.24.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.24.3)

### Fixes:
- `CallAgent` connection state bug fix to show `Disconnected` as initial state.
- Allow to initialize SDK regardless of the `CallAgent` connection state.

## 1.25.1-beta.1 (2024-05-02)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.25.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.25.1-beta.1)

### New Features:
- Disable PSTN participants from being able to be soft muted by others

## 1.24.1 stable (2024-05-01)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.24.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.24.1)

### New Features:
- Enable ACS-Teams interop Group call scenarios - moved to GA

## 1.24.2-beta.1 beta (2024-05-01)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.24.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.24.2-beta.1)

### New Features:
- Added new event when muted by another participant in the call

### Fixes
- Adding support for background noise suppression in calls - New AudioEffects feature that can now be used to start our ML based Noise Suppression.
	- Fixed DeepNoiseSuppressionEffect not applying correctly if BrowserNoiseSuppression was used.

## 1.24.1-beta.2 beta (2024-04-17)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.24.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.24.1-beta.2)

### New Features:
- Adding support for background noise suppression in calls - New AudioEffects feature that can now be used to start our ML based Noise Suppression.
- Adding support for enhanced PSTN coordinates when retrieving meeting dial-in details; country name and city name are now available for configured PSTN numbers in the meeting policy

### Fixes
- Fixed an issue where the remoteAudioStreamsUpdated event is missing when a call is in LocalHold state.
- Fixed an issue where the volume indicator doesn't show the volume level when a call is escalated from 1:1 to group call.
- Fixed an issue where PSTN coordinates weren't being retrieved properly when calling for meeting dial-in details
- The localAudioStreams collection on the Call object now correctly has an instance of LocalAudioStream of the current audio source in the call.
- Expose the details of the PPTLive presenter.
- View Attendee names - Enabled view attendee names to the Capabilities features. When enabled, this capability would allow or restrict user to view the attendee names based on their role and Teams Premium option of hiding attendees in the meeting.

## 1.23.2 stable (2024-04-04)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.23.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.23.2)

### New Features:
- CallInfo (call.info) and a GroupId property of CallInfo made available for GA
- ConnectionState feature made available for GA. Application must use connectionState property to check if ACS SDK is actively connected to ACS service and capable of receiving incoming calls, or if it's disconnected due to network problems or invalid token. Application should handle this information and either re-initialize ACS SDK and/or prompt user to check their network. ConnectionState 'reason' value were updated comparing to beta release.
- View Attendee names - Enabled view attendee names to the Capabilities features. When enabled, this capability would allow or restrict user to view the attendee names based on their role and Teams Premium option of hiding attendees in the meeting.

## 1.23.2-beta.1 beta (2024-03-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.23.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.23.2-beta.1)

### Fixes
- Fixed token refresh mechanism in the SDK, now during call SDK will correctly ask application for a new token if current one is expired.

## 1.22.4 stable (2024-03-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.4](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.4)

### Fixes
- Fixed token refresh mechanism in the SDK, now during call SDK will correctly ask application for a new token if current one is expired.
- Fixed support for new Microsoft Teams transcription. If you try to connect to Teams meeting or a call with Teams user with SDK version lower than this version, Teams transcription would be stopped and won't be able to start. You need to update your SDK in order to leverage Teams transcription in calls and meetings.

## 1.22.3-beta.1 beta (2024-03-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.3-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.3-beta.1)

### Fixes
- Fixed token refresh mechanism in the SDK, now during call SDK will correctly ask application for a new token if current one is expired.

## 1.21.3 stable (2024-03-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.21.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.21.3)

### Fixes
- Fixed token refresh mechanism in the SDK, now during call SDK will correctly ask application for a new token if current one is expired.

## 1.21.2-beta.1 beta (2024-03-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.21.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.21.2-beta.1)

### Fixes
- Fixed token refresh mechanism in the SDK, now during call SDK will correctly ask application for a new token if current one is expired.

## 1.22.3 stable (2024-02-29) (Deprecated)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.3)

### Fixes
- Fixed OVC.
  
## 1.23.1-beta.2 beta (2024-02-29)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.23.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.23.1-beta.2)

### Fixes
- Fixed OVC.
- Fixed a raw video stream subscription error when the remote participant stops and starts sending video in a short time.

### Improvement: 
- PPTLive - clears the target before starting a new session to prevent duplicate views.
  
## 1.20.3 stable (2024-02-20)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.20.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.20.3)

### Fixes
- Fixed MediaStats feature declaration in the type declaration file.
- Fixed an uncaught error of DataChannel feature when call is disconnected

## 1.22.2 stable (2024-02-16)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.2)

### Fixes
- Fixed a raw video stream subscription error when the remote participant stops and starts sending video in a short time.
- Fixed an uncaught error of DataChannel feature when call is disconnected

## 1.21.2 stable (2024-02-16)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.21.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.21.2)

### Fixes
- Fixed MediaStats feature declaration in the type declaration file.
- Fixed an uncaught error of DataChannel feature when call is disconnected

## 1.22.2-beta.1 (2024-02-13)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.2-beta.1)

### Fixes
 - Fix Transcription feature's 'isTranscriptionActive' flag

## 1.22.1 stable (2024-02-13) (Deprecated)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.1)

### New Features:
- Transfer API made available for GA

### Fixes
- Fix Transcription feature's 'isTranscriptionActive' flag

## 1.22.1-beta.1 (2024-02-07) (Deprecated)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.22.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.22.1-beta.1)
### New Features:
 - Support receiving one incoming video stream with Full HD(1080p) resolution
 - ACS captions - allows ACS users to enable closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call

### Fixes
 - Improved the PPTLive feature so that it only shows the active signal after the call has been connected.
 - Always render N number of videos in a large meeting. Dominant speakers video will be rendered as priority then non-dominant speakers by their join order (if need to have N videos).
 - Enabled auto-acceptance for transfer requests within the transfer feature. Replaced the `transferRequested` event with `transferAccepted` due to auto-transfer acceptance.
 - Fix the video source when starting a video call with raw video stream.
 - Improved selectMicrophone/selectSpeaker input validation.

## 1.21.1 stable (2024-02-07)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.21.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.21.1)

### New Features:
- Support receiving one incoming video stream with Full HD(1080p) resolution

### Fixes
- Fix the video source when starting a video call with raw video stream.

## 1.21.1-beta.4 (2024-01-09) (Deprecated)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.21.1-beta.4](https://www.npmjs.com/package/@azure/communication-calling/v/1.21.1-beta.4)

### New Features
 - Introduced subCodes and resultCategories in exceptions thrown by the sdk
 - `voip.join` toke scope to have token based access control
 - Update the public interface in MediaStats feature

### Fixes
 - Fix an potential unhandled error when subscribing the raw screensharing stream.
 - Hide unexpected bot participants

### Breaking API Changes
 - `call.feature(Features.Capabilities).capabilities.reaction` property renamed to `call.feature(Features.Capabilities).capabilities.useReaction`.

## 1.19.2-beta.2 (2024-01-09)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.19.2-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.19.2-beta.2)

### Fixes
 - Workaround for a bug on iOS, Users making video calls on iOS with Safari (iOS versions 16 and 17) browser would send incorrect video resolution from the iOS Safari browser, resulting in no video being rendered on the receiver side
 - Hide unexpected bot participants
 - Show correct participant count in XL meeting
 
## 1.20.1 stable (2023-12-12)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.20.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.20.1)

### New Features
 - Media quality stats API made available for GA
 - Sender video constraints feature made available for GA
 - Data channel Feature made available for GA

### Fixes
 - Fix screen sharing being cropped when resizing the sharing window
  
## 1.19.1 stable (2023-11-22)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.19.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.19.1)

### New Features
 - participantId in CallInfo made available for GA
 - Reaction Feature API made available for GA
 - PPTLive Feature made available for GA


## 1.20.1-beta.2 (2023-11-22)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.20.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.20.1-beta.2)

### Fixes
 - Fix for ask device permissions where permissions are denied at the OS level
 - New isSupported method on the VideoEffectsFeature API to check support for effects. Deprecated the old one that on the effects themselves.


## 1.18.1 stable (2023-11-02)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.18.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.18.1)

### New Features
 - Reaction API made available for GA and Reaction Capability resolution added for teams meetings
 - Teams Meeting Audio Conferencing API made available for GA

### Fixes
 - Bug fixes and telemetry imporevements
 - Call survey - validate survey data s. Throw validation error if there is unexpected elements in survey data.
 - Fixed broken regression bug due to Reaction Feature not being initialized in Lobby
 - Fix long delay for selectSpeaker and selectMicrophone API

### Breaking API Changes
 - Enforce callAgent to be created ONLY with ACS token. Creating a callAgent with any other token will throw an error
    ```js
    const userToken = '<ACCESS_TOKEN_FOR_ACS_IDENTITY>';
    callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential(userToken);
    const callAgent = await callClient.createCallAgent(tokenCredential);
    ```
 - Enforce teamsCallAgent to be created only with Microsoft 365 user token. Creating a teamsCallAgent with any other token will throw an error
    ```js
    const userToken = '<ACCESS_TOKEN_FOR_MICROSOFT_365_IDENTITY>';
    callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential(userToken);
    const teamsCallAgent = await callClient.createTeamsCallAgent(tokenCredential);
    ```

## 1.19.1-beta.2 (2023-11-02)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.19.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.19.1-beta.2)

### New Features
 - PPTLive -  View the powerpoint in teams meeting as attendee.
 - CallInfoCommon.participantId - The local participant Id
 - RemoteParticipant.endpointDetails - The details of all the endpoints for this remote participant such as the participant id

### Fixes
 - Bug fixes and telemetry improvements
 - Added missing reaction capability resolution for teams and rooms meetings
 - Fixed broken regression bug due to Reaction Feature not being initialized in Lobby
 - Call survey - validate survey data s. Throw validation error if there is unexpected elements in survey data.

### Breaking API Changes
 - Enforce callAgent to be created ONLY with ACS token. Creating a callAgent with any other token will throw an error
    ```js
    const userToken = '<ACCESS_TOKEN_FOR_ACS_IDENTITY>';
    callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential(userToken);
    const callAgent = await callClient.createCallAgent(tokenCredential);
    ```
 - Enforce teamsCallAgent to be created only with Microsoft 365 user token. Creating a teamsCallAgent with any other token will throw an error 
    ```js
    const userToken = '<ACCESS_TOKEN_FOR_MICROSOFT_365_IDENTITY>';
    callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential(userToken);
    const teamsCallAgent = await callClient.createTeamsCallAgent(tokenCredential);
    ```

## 1.17.1 stable (2023-10-02)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.17.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.17.1)

## 1.18.1-beta.1 (2023-09-29)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.18.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.18.1-beta.1)

### New Features
 - Reaction - Send and receive meeting reactions in calls and Teams meetings.
 - Soft Mute - Mute a specific participant or all participants in the call.
 - Teams Meeting Audio Conferencing - Retrieve the pstn dial in details of a Teams Meeting.
 - ACS support to call Teams voice applications such as an Auto Attendant or Call Queue.
 - Join Teams Meeting with MeetingId and Passcode.

### Fixes
 - Bug fixes and telemetry imporevements
 - `MicrosoftBotIdentifier` was renamed to `MicrosoftTeamsAppIdentifier` in new `@azure/communication-common@2.3.0`

## 1.17.1-beta.5 (2023-09-01)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.17.1-beta.5](https://www.npmjs.com/package/@azure/communication-calling/v/1.17.1-beta.5)

### New Features
 - Enabling ACS/CTE Users to join Teams Meeting with MeetingId and Passcode
 - Support for sending two different cameras with two different call agents in the same call (on Desktop)
 - Pre Call Diagnostics now supports individual test runs. User can pass a second input as options specifying which Pre Call Diagnostics steps they would like to run.
 - Adding support for dynamically setting video send constraints during the call.

### Breaking API Changes
 - The video send constraints object has a minor change in the name of the 'height' property. It's now 'frameHeight' starting from this beta.


## 1.16.3 stable (2023-08-24)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.16.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.16.3)

Features:
 - Promoted 3x3 video rendering on desktop to GA
 - Promoted Capabilities feature to GA
 - Promoted Teams Captions feature to GA
 - Promoted isLocalVideoStarted API to GA
 - Promoted CallClient.features() API to GA

Fixes:
 - Fixed broken MicrosoftBotIdentifier in communication-calling.d.ts

## 1.15.3 stable (2023-08-18)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.15.3](https://www.npmjs.com/package/@azure/communication-calling/v/1.15.3)
- Promoted Optimal Video Count feature to GA

Fixes:
- Fixes for the type declaration file

## 1.16.3-beta.1 (2023-08-18)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.16.3-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.16.3-beta.1)

Features:
- Updated Teams captions feature with redesigned interface

## 1.16.2-beta.1 (2023-08-10)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.16.2-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.16.2-beta.1)

Features:
- Added Teams captions feature that allows ACS users to enable closed captions in Teams meeting and allows Microsoft 365 users on ACS SDK to use closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call and caption language for themselves (requires Teams Premium).

Fixes:
- Bug Fixes
- Telemetry improvements

## 1.15.2 stable (2023-08-08)
- Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.15.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.15.2)
  
Features:
- Promoted OVC from beta to GA
- Promoted isReceiving from beta to GA
- Added support for Edge browser on Android.

Fixes:
- Fixed participants in the call are not able to see all the other participants while the call is initialized
- Fixed disposing of Call Agent to not throw

## 1.15.2-beta.1 (2023-08-04)
- Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.15.2-beta.1
  
Features:
- Added support for Edge browser on Android.
  
Fixes:
- Fixed participants in the call are not able to see all the other participants while the call is initialized

## 1.15.1-beta.1 (2023-07-03)
- Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.15.1-beta.1

Features:
- Local screen sharing rendering/preview
    - You can now view a preview of your local screen sharing stream that is being sent out to remote particiapants in the call.
    - Call.localVideoStreams[] array will now contain the local screen sharing stream of mediaStreamType === 'ScreenSharing' if your local screen share is on.
    - [Local screen share preview usage documentation](https://learn.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/manage-video?pivots=platform-web#local-screen-share-preview) - docs will be live shortly
- Raw media access to local screen sharing stream
    - Start screen sharing a screen, browser tab, or application, and access the raw media stream.
    - Start screen sharing with a custom media stream.
    - Call.localVideoStreams[] array will now contain the local screen sharing stream of mediaStreamType === 'RawMedia' if your local screen share is on.
    - [Raw media access sample usage documentation](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-raw-media-access) - docs will be live shortly

- Data Channel
    - Send and receive messages between the participants in a call via Datachannel.
    - Send messges to specific remote participants.
    - Broadcast a message to all remote participants.
  
- Call agent connection state
    - New property on the Call Agent which indicates if the Call Agent is connected to ACS services.
    - Disconnected state will be due to conectivity issues or token credential expiration.
- Lobby admit/reject
    - Admit/reject participants from a Teams meeting lobby into the Teams meeting.

Fixes:
- When mobile users exit/kill the browser while on a call, they will now be removed from the call after 60 seconds
- Bug Fixes
- Telemetry improvements

## 1.14.1 (2023-06-21)
- Calling - Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.14.1

Bug fixes:
- Telemetry improvements

## 1.14.1-beta.1 (2023-06-01)
- Calling - Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.14.1-beta.1

Features:
- 3x3 for ACS in public preview

Bug fixes:
- Telemetry improvements

## 1.13.1 (2023-05-09)
- Calling - Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.13.1
- Calling effects - Available in NPM - https://www.npmjs.com/package/@azure/communication-calling-effects/v/1.0.1

Features:
- Background Blur / Replacement on desktop
    - Promoted APIs from beta to GA
    - Added a new property on the feature called "activeEffects" that will provide the current status of effects.
- RAW audio/video - Promoted APIs from beta to GA.
- Volume Indicator - Promoted APIs from beta to GA.
- Mute Incoming Audio - Promoted APIs from beta to GA.
- End of Call Survey - Promoted APIs from beta to GA.
- Environment isSupported / Multiple tabs - Promoted APIs from beta to GA.
- Rooms - Promoted APIs from beta to GA.
- Spotlight - Promoted APIs from beta to GA.
- Raise hand - Promoted APIs from beta to GA.

Bug fixes:
- RAW audio/video - Fixed RemoteVideoStream.getMediaStream() API to only allow to be called when the stream's isAvailable flag is true. 
- Fix to be able to accept an incoming call with microphone muted
- Telemetry improvements

## 1.13.1-beta.1 (2023-05-01)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.13.1-beta.1

Bug fixes:

- Accept incoming call  as muted: participant should join as muted when participant accepts the call with mute option. Example- _incomingCall.accept({audioOptions: { muted: true}})_.

## 1.13.0-beta.4 (2023-04-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.13.0-beta.4

Features:

- Teams captions - Added Teams captions feature that allows ACS users to enable closed captions in Teams meeting and allows Microsoft 365 users on ACS SDK to use closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call and caption language for themselves (requires Teams Premium).
- End of call survey - Added end of call survey feature to provide a way to understand how your end users perceive the overall quality and reliability. The rating data is available in Log Analytics workspace.
- Lobby - Enabled lobby operation APIs that allows ACS and Teams users to admit and reject users from Teams meeting lobby
- Proxy and custom TURN - Added the ability to provide a network configuration to the CallClient, while initializing the SDK.
    * You can optionally provide a network configuration to the SDK for:
        * Proxy - Provide the details of a proxy server to route all our network requests through it. Note: this will only affect our HTTP/HTTPS requests and web socket connections; and not media traffic in calls.
        * Custom TURN - Provide the details of your TURN servers to route all media traffic through them instead of our default ACS service TURN servers.
- Raise hand - Added Raise Hand feature that allow to publish and remove RaiseHand states on ACS and Teams meetings.
- Spotlight - Added Spotlight feature that allows participants to be able to publish and remove spotlight states in ACS and Teams meetings.
- iOS Chrome - Added ACS Web Calling SDK support for Chrome on iOS

Bug fixes:

- Telemetry improvements
- Fixed endpoint mute state when joining the call with microphone muted


## 1.12.1 (2023-04-13)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.12.1

Bug fixes:

- Fixed endpoint mute state when joining the call with microphone muted



## 1.12.0-beta.2 (2023-03-20)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.12.0-beta.2

Features:

- Optimal Video Count Feature: Provides the capability to obtain the optimal number of incoming video streams that an application can display to the end-user. This number is variable and the developer could subscribe to the changes of this value
- Web push notifications. To learn more, follow our quickstart: https://github.com/Azure-Samples/communication-services-javascript-quickstarts/tree/main/calling-web-push-notifications

Bug fixes:

- Stability and telemetry improvements
- Fixed memory leak that would surface when in call or meeting with other participants, memory would increase constantly for the duration of the call, with a rate of ~100MB per hour with all modalities active worst case scenario


## 1.11.1  (2023-03-20)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.11.1

Bug fixes:

- Stability and telemetry improvements
- Fixed memory leak that would surface when in call or meeting with other participants, memory would increase constantly for the duration of the call, with a rate of ~100MB per hour with all modalities active worst case scenario.


## 1.11.0-beta.1 (2023-02-15)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.11.0-beta.1

Features:

- Capability Model - A new feature API that determines what the current participant can do in a meeting setup or in a call setup
- Video Constraints - Added video constraints support on Desktop browsers and iOS Safari. We can specify an optional video max send resolution in the call options, it will limit the video resolution sent from the sender.

Bug fixes:

- Telemetry improvements


## 1.10.1 (2023-02-15)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.10.1

Bug fixes:

- Resolved call state and send code/subcode when enterprise voice is disabled during PSTN calls
- Telemetry improvements and bug fixes
- Custom Teams endpoint code/subcode failure support for enterprise voice


## 1.10.1-beta.1 (2023-02-06)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.10.1-beta.1

Bug fixes:

- Raw Audio fixes: Fixed issues starting audio when a MediaStream was provided as the parameter for a LocalAudioStream constructor
- Resolved call state and send code/subcode when enterprise voice is disabled during PSTN calls

Changes:

- Raw Video updates - added the ability to apply raw media stream effects on top of local video custom streams


## 1.10.0-beta.1 (2023-01-25)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.10.0-beta.1

Features:

- Video effects - added a ability to apply effects on top of local video, these include a "background blur" and "background replacement"
- Early media support - added proper handling of Eearly Media in PSTN scenarios
- iOS Web view support - starting from this version we're adding support (preview) of WKWebView iOS WebView

Bug fixes:

- Telemetry improvements and bug fixes
- Custom Teams endpoint code/subcode failure support for enterprise voice

Changes:

- Raw audio updates - aligning RAW Audio and RAW Video APIs, RAW Audio operates now using MediaStream instead of MediaStreamTrack

## 1.9.1 (2022-12-12)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.9.1

Features

- EUDB compliance for Teams Identities 

Bug fixes:

- Fixes for internal instrumentation.

Changes:

- Internal instrumentation changes


## 1.9.1-beta.1 (2022-11-10)
Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.9.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.9.1-beta.1)

Features

- Volume indicator API for local and remote audio streams
The Volume Feature provides capability to get volume of local and remote audio streams, which can be used to build volume indicator. The Volume Level is a number ranging from 0 to 100 It's sampled every 200ms to get near real-time value of the level on the corresponding audio stream.

- Video media access API
Video media access enables application developers to access the incoming call video stream and send custom outgoing video stream during the call.
Incoming video stream, can be accessed right on the call object.
Outgoing video stream, application can create custom mediaStream and set it as outgoing source stream when in a call.

- The Pre-Call diagnostic API
The Pre-Call API enables developers to programmatically validate a client’s readiness to join an Azure Communication Services Call. The Pre-Call APIs can be accessed through the Calling SDK. They provide multiple diagnostics including device, connection, and call quality. 

- Additional environment support with Firefox and Edge
We now support Edge browser on Mac platform(GA) as well as Firefox on desktop (in public preview)

- Detection of multiple tabs with the SDK loaded
Handling multiple calls on multiple tabs of a browser can cause undefined behavior due to resource allocation for microphone and camera on the device, and the isCallClientActiveInAnotherTab API can be used to detect when an application with the ACS SDK is loaded in multiple tabs

- Simulcast. A technique by which an endpoint encodes the same video feed using different qualities, sends these video feeds of multiple qualities to a selective forwarding unit – SFU, that decides which of the receivers gets which quality. The lack of simulcast support leads to a degraded video conferencing experience, due to the video receiver with poor network conditions joining the conference instantly impacting the quality of video received from the sender without simulcast support for all other participants, as video sender will optimize its video feed against the lowest common denominator. Using simulcast, the impact of lowest common denominator will be minimized, as video sender will produce specialized low fidelity video encoding for a subset of receivers running on poor networks (or otherwise constrained). 

Changes:

- Support sending video and screen share simultaneously on desktop
- Internal instrumentation changes
- EUDB compliance - starting from this version, all data is processed and stored according to new EU regulations - details https://blogs.microsoft.com/eupolicy/2021/05/06/eu-data-boundary


Migration guide to check for browser support:

- Old code
```javascript
const callClient = new CallClient(options);
const environmentInfo = await callClient.getEnvironmentInfo();
```

- New code
```javascript
const callClient = new CallClient(options);
const environmentInfo = await callClient.feature(Features.DebugInfo).getEnvironmentInfo();
```

## 1.8.1-beta.1 (2022-10-03)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.8.1-beta.1

Bug fixes:

- Fixes for missing MediaStats `summaryReported` event when receiving screen sharing stream

## 1.8.0-beta.1 (2022-09-21)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.8.0-beta.1

Features

- New MediaStatsCallFeature now reports media stream statistics for each stream type and direction.
- Users cannot call themselves.

Bug fixes:

- Fix for mid call device source switch.

Changes:

- Internal instrumentation changes

## 1.7.2-beta.1 (2022-08-26)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.7.2-beta.1

Bugfixes

- Includes fixes for StartCall, and emergency call.

## 1.7.1-beta.1 (2022-08-19)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.7.1-beta.1

Features

- **NEW** - Azure Communication Services introduces the concept of a `room` for developers who are building structured conversations such as virtual appointments or virtual events. Learn more about rooms [here](https://docs.microsoft.com/azure/communication-services/concepts/rooms/room-concept). Get started using rooms by following the [quick start guides](https://docs.microsoft.com/azure/communication-services/quickstarts/rooms/get-started-rooms).

	Join a room
	```js
	const context = { roomId: '<ROOMID>' }
	const call = callAgent.join(context);
	```
	Subscribe to changes for your role in the call
	```js
	const callRoleChangedHandler = () => {
		console.log(call.role);
	};

	call.on('roleChanged', callRoleChangedHandler);
	```
	Subscribe to role changes for remote participants
	```js
	const subscribeToRemoteParticipant = (remoteParticipant) => {
		remoteParticipant.on('roleChanged', () => {
		    console.log(remoteParticipant.role);
		});
	}
	```

Bugfixes

- Includes fixes for logging, telemetry,  Teams interop calling, E911 enhancements, and other minor improvements. 

## 1.6.3 (2022-08-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.6.3

Bugfixes

- Fixes for internal instrumentation

## 1.6.3-beta.1 (2022-08-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.6.3-beta.1

Bugfixes

- Fixes for internal instrumentation

## 1.6.2 (2022-08-12)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.6.2

Bugfixes

- Fixes for jitter calculation.
- Fixes for browser semver version comparison when determining supported environments.

Other changes

- Instrumentation of feature usage.
- Internal instrumentation changes.
- Telemetry additions and improvements.

## 1.6.2-beta.2 (2022-08-12)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.6.2-beta.2

Changes

- Internal instrumentation changes

## 1.7.0-beta.1 (2022-08-01)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.7.0-beta.1

Features

- **NEW** - ACS Calling Web SDK is now supporting **Teams identities** calling via `teamsCallAgent`
	Introducing `teamsCallAgent`
	```js
	const userToken = '<USER_TOKEN>';
	callClient = new CallClient();
	const tokenCredential = new AzureCommunicationTokenCredential(userToken);
	const teamsCallAgent = await callClient.createTeamsCallAgent(tokenCredential);
	```
	
	1:1 VoIP call
	```js
	const userCallee = { microsoftTeamsUserId: '<MICROSOFT_TEAMS_USER_ID>' };
	const oneToOneCall = teamsCallAgent.startCall(userCallee);
	```
	
	1:1 PSTN call
	```js
	const phoneCallee = { phoneNumber: '<PHONE_NUMBER_E164_FORMAT>' }
	const oneToOneCall = teamsCallAgent.startCall(phoneCallee );
	```
	Teams incoming call
	```js
	const teamsCall = await teamsIncomingCall.accept();
	```
	
	1:n call
	```js
	const userCallee = { microsoftTeamsUserId: '<MICROSOFT_TEAMS_USER_ID>' }
	const phoneCallee = { phoneNumber: '<PHONE_NUMBER_E164_FORMAT>'};
	const groupCall = teamsCallAgent.startCall([userCallee, phoneCallee], { threadId: '<THREAD_ID>' });
	```
	
	Escalation
	```js
	const teamsUser = { microsoftTeamsUserId: '<MICROSOFT_TEAMS_USER_ID>' };
	// add a participant to teamsCall
	const remoteParticipant = teamsCall.addParticipant(teamsUser , { threadId: '<THREAD_ID>' });
	// remove a participant from teamsCall
	await teamsCall.removeParticipant(teamsUser);
	```
	
	Features
	> All current features are also supported for Teams identities
	```js
	const transfer = teamsCall.feature(SDK.Features.Transfer).transfer({ targetParticipant: IDENTIFIER });
	```
	
	For more usage information, please visit [Teams Identities API usage](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/cte-calling-sdk/manage-calls)

## 1.6.1-beta.1 (2022-07-13)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.6.1-beta.1

Bugfixes

- Fixes for jitter calculation.
- Fixes for browser semver version comparison when determining supported environments.

Other changes

- Instrumentation of feature usage 
- Telemetry additions and improvements



## v1.6.0-beta.1 (2022-07-5)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.6.0-beta.1

Features

- Audio media access enables application developers to access the incoming call audio stream and send custom outgoing audio stream during the call. 
	* Incoming audio stream, can be accessed right on the call object.

		```js
		call.remoteAudioStreams;
		```
	* Outgoing audio stream, application can create custom [mediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) and set it as outgoing source stream when in a call.

		```js
		const createAudioTrackToSend = () => {
			...
		};

		const localAudioStream = new LocalAudioStream(createAudioTrackToSend());
		call.startAudio(localAudioStream);
		```
	
- Mute incoming audio feature will help to mute / unmute the incoming audio. So that, the speaker will not playback the incoming call audio directly. With raw media access and mute incoming audio features developers can add custom filter and play filtered audio in client side. 
	* `Call.isIncomingAudioMuted` property will be `true` when the incoming audio is muted otherwise `false`.
         	
		```js
		 if (Call.isIncomingAudioMuted) {
		    // Incoming audio is muted. Participant will NOT listen the call audio. Time to play filtered audio!
		 } else {
		    // Incoming audio is unmuted. Participant will be able to listen the call audio.
		 }
	 	```
	* Property change event `isIncomingAudioMutedChanged` will raise when `Call.isIncomingAudioMuted` value updated.
	 	```js
		 // isIncomingAudioMutedChangedHandler is the listener to handle PropertyChangedEvent 
		 Call.on('isIncomingAudioMutedChanged', isIncomingAudioMutedChangedHandler);
	 	```
   	* `Call.muteIncomingAudio()` and `Call.unmuteIncomingAudio()` API will mute / unmute incoming audio respectly.
         
		 ```js
		 // To mute incoming audio
		 Call.muteIncomingAudio();
		 // To unmute incoming audio
		 Call.unmuteIncomingAudio();
		 ```

Other Changes

- Telemetry additions and improvements.

## v1.5.4 (2022-06-03)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.5.4
### Azure Communication Services for Government

Azure Communication Services (ACS) in [Azure Government](https://azure.microsoft.com/en-us/global-infrastructure/government/) provides compliance with US government requirements for cloud services. In addition to enjoying the features and capabilities of Messaging, Voice and Video calling, developers benefit from the following features that are unique to Azure Government:
- Your personal data is logically segregated from customer content in the commercial Azure cloud.
- Your resource’s customer content is stored within the United States.
- Access to your organization's customer content is restricted to screened Microsoft personnel. 
- Complies with certifications and accreditations that are required for US Public Sector customers, specifically those offered to Office 365 Government - GCC High offering.

You can find more information about the Office 365 Government – GCC High offering for US Government customers at [Office 365 Government plans](https://products.office.com/government/compare-office-365-government-plans), including [eligibility requirements]().

Features
- iOS and Android, when there is an active Azure Communication Services call and there is an interruption*, audio and video shall auto recover on most of the cases. On some edge cases, to unmute, an api to 'unmute' must be called by the application (can be as a result of user action) to recover the outgoing audio.

Bugfixes
-  Fixes on call recovery after an interruption* on iOS 15.4+.
    * Incoming video streams won't stop rendering.
    * One to one calls won't go to remote hold state.
-  CreateView on remote video stream will fail with correct error code if application tries to have more than the supported number of active remote video streams renderered at the same time.
- Fixed a bug that caused localVideoStream to be removed when the call goes on hold.
- Telemetry additions and improvements.
\* Interruption could be anything that takes over physical devices like microphone and camera. Examples are enabling Siri, playing YouTube videos, accepting PSTN calls.

## v1.5.4-beta.1 (2022-5-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.5.4-beta.1
Features
- Remote stream - introduced 'IsReceiving' property, which reflects if the remote stream is being received. For example: 
    * When the remote mobile participant is sending video and put the browser application in the background, OS will stop sending video stream data until the application is brought back to the foreground. Same behavior when mobile device locks/unlocks.
    * When the remote participant is sending video and have bad network connectivity, video is cutting off / lagging.
    * Application can subscribe to updates via 'isReceivingChanged' event, render a spinner over the video while the IsReceiving is false and remove the spinner while the isReceiving is true.
    * Documentation: [IsReceiving property docs](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/manage-video?pivots=platform-web#remote-video-stream-properties) and [Remote Video rendering docs](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/manage-video?pivots=platform-web#render-remote-participant-video-streams)
- Debug-Information feature, enables application to gather debuging information needed when a problem does reproduce. Those information will have the call and participant identifiers and the latest log lines.
```js
const debugInfo = callClient.feature(SDK.Features.DebugInfo).dumpDebugInfo();
```
- Get-Environment-Info exposed on the callClient provides environment details and enables the application running on an environment to know if it is supported by the Azure Communication Services or not. A supported environment is a combination of an operating system, a browser, and the minimum version required for that browser.
```js
const environmentInfo = await callClient.getEnvironmentInfo();
environmentInfo.isSupportedBrowser // browser is supported.
```
- iOS and Android, when there is an active Azure Communication Services call and there is an interruption*, audio and video shall auto recover on most of the cases. On some edge cases, to unmute, an api to 'unmute' must be called by the application (can be as a result of user action) to recover the outgoing audio.

Bugfixes
-  Fixes on call recovery after an interruption* on iOS 15.4+.
    * Incoming video streams won't stop rendering.
    * One to one calls won't go to remote hold state.
-  CreateView on remote video stream will fail with correct error code if application tries to have more than the supported number of active remote video streams renderered at the same time.
- Fixed a bug that caused localVideoStream to be removed when the call goes on hold.
- Telemetry additions and improvements.
\* Interruption could be anything that takes over physical devices like microphone and camera. Examples are enabling Siri, playing YouTube videos, accepting PSTN calls.


## v1.4.3-beta.1 (2022-2-18)
## v1.4.4 (2022-3-9)

Available in NPM

Beta: https://www.npmjs.com/package/@azure/communication-calling/v/1.4.3-beta.1
<br />
Stable: https://www.npmjs.com/package/@azure/communication-calling/v/1.4.4

Bugfixes
- Fixed a race condition that in specific cases(<0.5%) causes a failure to join to a meeting or group call.
- Fixed a race condition that in specific cases would return zero devices on enumeration if that happens right after 'askDevicePermission' api call.

# v1.4.2-beta.1 (2022-2-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.4.2-beta.1

Bugfixes
- Fixed issue which caused an invisible video tag to be added to the DOM on browsers other than Safari 15.1 on iOS - it was originally introduced as a workaround for iOS 15.1 regression (which we addressed with our 1.3.2). On Safari versions < 14 it could cause a call drop when joining to a group call, due to usage of browser APIs that are not supported by old Safari versions.
- Fixed call drop on Safari versions 14/15 which occurred sometimes (<5%) due to race condition inside the library when user rejoined multiple times.
- Workaround for an [issue](https://docs.microsoft.com/en-us/azure/communication-services/concepts/known-issues#some-android-devices-failing-to-join-calls-and-meetings) with starting/joining/accepting calls or meetings on Samsung A devices - calls would not connect on these devices.
- Fixed wrong device permission state on Safari browsers, when application asks for permissions (deviceManager.askDevicePermission) for the second time with opposite permission for audio/video - wrong result was reported back despite user having granted originally permission -

```js
adpResult1 = deviceManager.askDevicePermission({audio:true, video:false});
// 1st call returns Promise<{audio:true,video:false}>
adpResult2 = deviceManager.askDevicePermission({audio:false, video:true});
// 2nd call returned wrongly Promise<{audio:false,video:true}>

// expected is Promise<{audio:true,video:true}> which is now fixed in 1.4.2-beta.1
```

# v1.4.1-beta.1 (2022-2-1)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.4.1-beta.1

Features

1. Remote stream - introduced 'streamSize' property, which reflects what is the received resolution of a give stream, application can subscribe to updates via 'sizeChanged' event.

Other Changes

1. On mobile platforms, will take into account 'devicePixelRatio' to control resolution of the video stream that is requested from the sender, this will improve video stream resolution for all participants in a calls where at least one of the participants is on mobile platform.
2. Audio volume improvements on iOS 15.3+. Related WebKit [bug](https://bugs.webkit.org/show_bug.cgi?id=230902).
3. Improvements on askDevicePermission API to increase reliability across browsers.
	
	* Ability to split permission request to two for audio/video independently of the browser.
	* Better error handling if one request fail to still trigger the other one.
	* Accurate permissions state after the api call independently of previous calls and states.
	* Detailed permissions break down when a failure happens.

5. Improvements on call recovery after an interruption (Siri, PSTN call etc.) on iOS 15.2+.

	* Incoming video streams won't stop rendering.
	* One to one calls won't go to remote hold state.
	* Recovery on unmute will just unmute the audio stream instead of re-creating it.

5. Improvements on camera recovery when device is taken from another process.
6. Other bug fixes and improvements.
7. Documentation updates.

## v1.3.2-beta.1 (2021-12-9)
## v1.3.2 (2021-12-9)

Available in NPM

Beta: https://www.npmjs.com/package/@azure/communication-calling/v/1.3.2-beta.1
<br />
Stable: https://www.npmjs.com/package/@azure/communication-calling/v/1.3.2

Features

1. Public preview of Microsoft Teams identities in Calling SDK. [Documentation](https://docs.microsoft.com/en-us/azure/communication-services/concepts/interop/teams-user-calling).

2. General availability of Microsoft Teams meeting join. [Documentation](https://docs.microsoft.com/en-us/azure/communication-services/concepts/join-teams-meeting).

3. General availability of User-facing diagnostics. [Documentation](https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/user-facing-diagnostics).

4. General availability of Dominant speaker feature. [Documentation](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/dominant-speaker).

5. General availability of Client options diagnostic information. [Documentation](https://docs.microsoft.com/en-us/javascript/api/azure-communication-services/@azure/communication-calling/diagnosticoptions?view=azure-communication-services-js).

6. General availability of Calling SDK Emergency calling.

Bugfixes

1. Fixed, Android 12 video artifacts on Chromium browsers. Known regression on Chromium on Android 12 more information [here](https://github.com/Azure/Communication/issues/412)
2. Fixed, iOS 15.1 crashes and wrong orientation when video is on, in calls and Microsoft Teams meetings. Known regression introduced by Apple on iOS 15.1 more information [here](https://github.com/Azure/Communication/issues/413)


Other changes

1. Documentation updates.
2. Internal telemetry updates.
3. Quality and reliability fixes.

Known issues

iOS 15.1 users joining group calls or Microsoft Teams meetings.

* Low volume. Known regression introduced by Apple on iOS 15.1. Related webkit bug [here](https://bugs.webkit.org/show_bug.cgi?id=230902).
* Sometimes when incoming PSTN is received the tab with the call or meeting will hang. Related webkit bugs [here](https://bugs.webkit.org/show_bug.cgi?id=233707) and [here](https://bugs.webkit.org/show_bug.cgi?id=233708#c0).


## v1.3.1-beta.1 (2021-11-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.3.1-beta.1

Features

1. Media statistics.
  	* Application will be able to collect aggregated media statistics on specified intervals.
2. Consultative transfer.
  	* Application will be able to consultative transfer a call with the transferee to a call with the transfer target.
3. Meeting join via meeting identifier.
  	* Application will be able to join Microsoft Teams meetings using a unique meeting identifier. This functionality will extend the existing meeting join options with meeting link and meeting coordinates.
4. Client options diagnostic information.
  	* Application will be able to pass custom 'appName', 'appVersion', and additionally set of 'tags' to the SDK that will be sent with telemetry pipeline.

Other changes

1. Call "apis" got renamed to call "features".
2. Documentation updates.
3. Internal telemetry updates.
4. Bug fixes.

Known issues

iOS 15.1 users joining group calls or Microsoft Teams meetings with video on.

	* Will result into broken orientation on the receiver's end. Mitigation: Switch device orientation to horizontal.
	* Going to background will refresh your call. Mitigation: Stop video before going to background.

**This is a known regression introduced by Apple on iOS 15.1 release. More information can be found [here](https://github.com/Azure/Communication/issues/413) and [here](https://docs.microsoft.com/en-us/azure/communication-services/concepts/known-issues#ios-with-safari-crashes-and-refreshes-the-page-if-a-user-tries-to-send-video-in-a-call).**


## v1.2.3-beta.1 (2021-10-20)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.2.3-beta.1

Bugfixes
1. Fixes on iOS Safari when call gets interrupted from PSTN call, Siri, or a native application taking over the device (Microphone or Camera) access.

    * When user is muted would break audio/video permanently.
    * When user is in lobby would break audio/video permanently.
    * When user received multiple interruptions, would break audio/video permanently.

2. Fixes on other OS platforms that received DeviceCaptureNotFunctioning during a call would break audio/video permanently.
3. Fixes on iOS/Android to stop outgoing video when screen locks or browser moves to the background, instead of sending the last frame. User will have to start video again when back to the application

Other changes

1. Feature “Diagnostics” got renamed to “User Facing Diagnostics” for clarity and better understanding.
2. User facing diagnostics won’t expose mediaType anymore, rather a flattened list of possible options.
3. New User facing diagnostics added and are explained bellow:

    * capturerStartFailed: Triggered when failing to start screen-share or recovery.
    * capturerStoppedUnexpectedly: Triggered when screen-share will stop working unexpectedly or recovery.
    * cameraStoppedUnexpectedly: Triggered when camera will stop working unexpectedly or recovery.
    * networkSendQuality: Triggered when network send quality is bad or recovery.
    
4. Documentation updates.
5. Internal telemetry updates.

## v1.2.2-beta.1 (2021-09-15)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.2.2-beta.1

#### Bugfixes
1. Fixes on iOS Safari when application goes to background during an active call.
    - Affected were all iOS users on Safari.
    - Incoming and outgoing audio will work uninterrupted.
3. Fixes on iOS Safari when call interrupted with another PSTN call.
    - Affected were all iOS users on Safari.
    - Audio and video will reconnect when the PSTN call is declined on hanged up. User will have to "unmute" to reconnect the previous call and "start video" to re-start the video.

#### Other changes
1. Documentation updates
2. Internal telemetry and bug fixes.

## v1.2.1-beta.1 (2021-08-26)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.2.1-beta.1 

#### Bugfixes
1. Fixes for incoming video from certain iOS and Android devices not rendering.
    - Affected devices include Samsung M3, Samsung S21, Oppo A5, A7, R17 Pro, Xiaomi Redmi, iPhone SE, Motorolas, etc, where outgoing video streams from these devices were not being sent out correctly to the remote participants in the call. 
2. Fixes for quick video turn on/off switching.
    - Now when you turn your local video on and off quickly, Call.localVideoStream[0] object is updated (added/removed) correctly and remote participants will see your video correctly based off this state.
3. Fixes for UFDs on iOS Safari, MacOS Safari, and MacOS Chrome.
    - isSpeakingWhileDeviceIsMuted UFD was not working properly on Safari nor MacOS Chrome. GH Issue: https://github.com/Azure/Communication/issues/335
4. Fixed issue where incoming video from Pixel devices, shows distorted.
    - Now if the incoming video is rendered in a small screen such as in a portrait mode mobile browser, then the incoming video will not show distorted. But if the incoming video is rendered on a big screen like desktop where the video renderer can be big, then video artifacts may still show.
5. Fixes for camera and microphone names not showing correctly after permissions are granted on Android.
    - GH Issue: https://github.com/Azure/Communication/issues/46
6. Fixes for calling sdk not refreshing the token correctly.
7. Fixes issue where incoming video from Pixel devices, shows distorted. Now if the incoming video is rendered in a small screen such as in a portrait mode mobile browser, then the incoming video will not show distorted. But if the incoming video is rendered on a big screen like desktop where the video renderer can be big, then video artifacts may still show.

#### Other changes
1. Documentation updates
2. Internal telemetry and bug fixes.


## v1.2.0-beta.1 (2021-06-24)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.2.0-beta.1

### New features

1. Call diagnostics feature will allow the developers to diagnose an active call. It is an extended feature of the core `Call` API. ACS Calling Web SDK will raise appropriate Media and Network call diagnostic depending on the active call and device status. For example- `speakingWhileMicrophoneIsMuted` call diagnostic will be raised when user speaks, and the microphone is muted. Developer can show the notification message to alert the end user when this call diagnostic raised.
2. ACS Web Calling SDK extended the `file` protocol support for local developement. Remote access still supports `https` protocol only. ( https://github.com/Azure/Communication/issues/297 )

#### Bugfixes
1. Build failure when using @azure/communication-calling in Vite/Vue app (https://github.com/Azure/azure-sdk-for-js/issues/15479)


## v1.1.0 (2021-06-17)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.1.0

### New features
**Support for WebRTC Unified Plan SDP format.**

Azure Communication Services Calling JavaScript SDK for browsers relies on WebRTC APIs that are being deprecated, specifically the Plan B Session Description Protocol (SDP) API. Google, Microsoft, Apple, and other browser vendors will be removing this functionality starting in August 2021.

**To avoid compatibility risk and potential impact to end-users, we recommend developers leveraging browser calling to upgrade to the latest version of the Azure Communication Services Calling JavaScript SDK as soon as possible. Download the latest Calling JavaScript SDK at NPM or using the commands below.**

Any version higher than - v1.1.0 for stable and v1.1.0-beta.2 for beta releases - supports new WebRTC standards and will be compatible throughout the Plan B deprecation. 
Prior versions of Azure Communication Services Calling JavaScript SDK will continue to be supported by the service; however they will be marked deprecated in NPM and other repositories given the limited browser compatibility of those libraires going forward.  


## v1.1.0-beta.2 (2021-06-10)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.1.0-beta.2

### New features
**Support for WebRTC Unified Plan SDP format.**

Azure Communication Services Calling JavaScript SDK for browsers relies on WebRTC APIs that are being deprecated, specifically the Plan B Session Description Protocol (SDP) API. Google, Microsoft, Apple, and other browser vendors will be removing this functionality starting in August 2021.

**To avoid compatibility risk and potential impact to end-users, we recommend developers leveraging browser calling to upgrade to the latest version of the Azure Communication Services Calling JavaScript SDK as soon as possible. Download the latest Calling JavaScript SDK at NPM or using the commands below.**

Any version higher than - v1.1.0-beta.2 - supports new WebRTC standards and will be compatible throughout the Plan B deprecation. 
Prior versions of Azure Communication Services Calling JavaScript SDK will continue to be supported by the service; however they will be marked deprecated in NPM and other repositories given the limited browser compatibility of those libraires going forward.  



## v1.1.0-beta.1 (2021-05-25)
Available in NPM - https://www.npmjs.com/package/@azure/communication-calling/v/1.1.0-beta.1

### New features
1. Dominant speakers for a call is an extended feature of the core `Call` API and allows you obtain a list of the active speakers in the call.

   This is a ranked list, where the first element in the list represents the last active speaker on the call and so on.
   In order to obtain the dominant speakers in a call, you first need to obtain the call dominant speakers feature API object:
   ```js
   const callDominantSpeakersApi = call.api(Features.CallDominantSpeakers);
   ```
   
   Then, obtain the list of the dominant speakers by calling `dominantSpeakers`. This has a type of `DominantSpeakersInfo`, which has the following members:
     - `speakersList` contains the list of the ranked dominant speakers in the call. These are represented by their participant id.
     - `timestamp` is the latest update time for the dominant speakers in the call.


         ```js
          let dominantSpeakers: DominantSpeakersInfo = callDominantSpeakersApi.dominantSpeakers;
          ```
   Also, you can subscribe to the `dominantSpeakersChanged` event to know when the dominant speakers list has changed
   ```js
   const dominantSpeakersChangedHandler = () => {
      // Get the most up to date list of dominant speakers
      let dominantSpeakers = callDominantSpeakersApi.dominantSpeakers;
   };
   callDominantSpeakersApi.api(SDK.Features.CallDominantSpeakers).on('dominantSpeakersChanged', dominantSpeakersChangedHandler);
   ```
### Breaking API Changes
1. Call.CallInfo.getConversationUrl() renamed with Call.CallInfo.getServerCallId() - returns server call id

#### Bugfixes
1. Prevent creating multiple Call Agents with same ACS user Id
2. Fixed VideoStreamRenderer disposal logic
3. SelectedSpeaker retuns correct value immediately after selectSpeaker is called and resolved
4. Latest media quality improvements
5. VideoRenderer.createView will reject with code 408/Timeout if video wasn't rendered before timeout

## v1.0.1-beta.2 (2021-04-15)

Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.0.1-beta.2](https://www.npmjs.com/package/@azure/communication-calling/v/1.0.1-beta.2)

### Other changes
1. New interface `CallInfo` is added to `Call` and `IncomingCall`:

    ```js
        export interface CallInfo {
            getConversationUrl(): Promise<string>; // needed for ACS Server calling API
            readonly groupId: string | undefined; // used in join group scenario
        }
    ```

### Bug fixes
1. Fixed Participant's Call End Reason Doesn't Match Call's Call End Reason

## v1.0.1-beta.1 (2021-03-30)

This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.1-beta.1

Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.0.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.0.1-beta.1)

**Beta release**
 
Please note about the [feature set](https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/calling-sdk-features) and [known issues](https://docs.microsoft.com/en-us/azure/communication-services/concepts/known-issues)

Moving forward, we will be having two versions of the SDKs:

* v x.x.x-Beta.x - the SDK versions provide access to new functionality, which is not at the General Availability milestone. E.g., **Teams Interoperability is supported in the Beta versions.**
* v x.x.x - the version of the SDK that at General Availability. Azure Communication Services provide full SLA for these SDKs


### Bugfixes
1. Fixed [Web 1.0.0-beta.10 - remoteParticipantsUpdated event is not triggered when Teams user is leaving a meeting](https://github.com/Azure/Communication/issues/238)

## v1.0.0 (2021-04-04)

- Our first GA SDK was released, v1.0.0
- APIs for preview features, such as Teams Interop, are only available in the new libraries marked with the *-beta* suffix. This week we released 1.0.1-beta.1.
- Both of these are available through [NPM](https://www.npmjs.com/package/@azure/communication-calling)

## v1.0.0-beta.10 (2021-03-24)

## Breaking API Changes
1. v1.0.0-beta.10 takes dependency on @azure/communication-common@1.0.0-beta.6 and @azure/logger@^1.0.2
2. `CallingApplicationIdentifier` and `CallingApplicationKind`were removed starting from @azure/communication-common@1.0.0-beta.6
Applications that were relying on them can still leverage generic `UnknownIdentifier` and `UnknownIdentifierKind`

    2.1 Call `addParticipant` method doesn't accept `CallingApplicationIdentifier` anymore

    2.2 Call `removeParticipant` method doesn't accept `CallingApplicationIdentifier` anymore

    2.3 CallAgent `startCall`  method doesn't accept `CallingApplicationIdentifier` anymore

    2.4 `CallerInfo` doesn't expose `CallingApplicationIdentifier` anymore as one of the `identifier` types, it will use `UnknownIdentifier` as a fallback

    2.5 `RemoteParticipant` `identifier` property doesn't expose `CallingApplicationIdentifier` anymore, it will use `UnknownIdentifier` as a fallback

3. `isMicrophoneMuted` changed to `isMuted`, if `isMuted` is set to `true` it indicates that local user is muted because of
* application called `mute()` method on the Call object and it resolved
* in Teams interop scenarios - Teams user muted ACS user
* in Teams interop scenarios - Teams user triggered 'mute all' feature for all participants in the meeting

    3.1 `isMutedChanged` event was introduced on the `Call` object

4. `VideoDeviceInfo` - `cameraFacing` property was removed

5. `Renderer` class was renamed to `VideoStreamRenderer`
6. `RendererOptions` type used in `createView` method on `Renderer` is now called `CreateViewOptions`
7. `createView` now returns `VideoStreamRendererView` type instead of `RendererView`



## Other changes

### Logger
CallClient doesn't accept `AzureLogger` instance in options, instead application can control logs by importing `setLogLevel` function and 
calling it with appropriate log level
**Example**
```js
import { setLogLevel } from '@azure/logger';

// configure log level
setLogLevel('verbose');

const callClient = new CallClient();
```

[More about @azure/logger](https://www.npmjs.com/package/@azure/logger)

### Errors
Whenever ACS Calling library throws an error, it will contain improved error message, with additional details.

## IncomingCall
`IncomingCall` changes
* added `callEndReason` property of a `CallEndReason` type that indicates why call ended* 

## Prevent race conditions when rendering stream
To prevent race condition where `VideoStreamRendererView` is used to render a `RemoveVideoStream` that becomes unavailable ( `isAvailable` changes to `false` )
`VideoStreamRendererView` will be automatically disposed
* when stream `isAvailable` changes to `false` while `createView()` promise is still pending, `createView()` promise will be rejected

## v1.0.0-beta.8 and v1.0.0-beta.9 (2021-03-08)

## Bug fixes
### v1.0.0-beta.8
Media quality improvements - more stabile and uniform quality in all scenarios

### v1.0.0-beta.9
Fixed issue for Safari - DeviceManager.askDevicePermission - when called with both audio:true, video: true, after stream is already acquired for a given device, was loosing track of acquired stream. Since 1.0.0-beta.9, ACS Calling SDK will split these calls into 2 prompts on Safari.

## Breaking API Changes
1. CallState - removed 'Incoming' state, this state is now invalid since 1.0.0-beta.4 introduced IncomingCall


## New features

## Support for multiple CallClient instances
CallClient can now be instantiated multiple times
* each instance can then be used to create new CallAgent instance using `async createCallAgent` API
* you can create only one CallAgent instance from each CallClient instance
* each CallAgent instance must be initialized for a different user, by implementing and passing user specific `CommunicationTokenCredential`

**Example**
```js
const callClientUser1 = new CallClient();
const callAgentUser1 = await callClientUser1.createCallAgent(communicationTokenCredentialForUser1, {displayName: 'User1'});
const callClientUser2 = new CallClient();
const callAgentUser2 = await callClientUser2.createCallAgent(communicationTokenCredentialForUser2, {displayName: 'User2'});
```

## Access DeviceManager without creating CallAgent instance
CallClient API to get DeviceManager instance - `async getDeviceManager()` can now be called prior to initialization of CallAgent instance

**Example**
```js
const callClient = new CallClient();
const deviceManager = await callClient.getDeviceManager();
await deviceManager.getCamears();
```
This allows developers to implement UX where user can manage devices or create preview of local camera before user context is known.

## Call transcription 

Call transcription is an extended feature of the core `Call` API. 
In the Teams interop scenarios, when a Teams user starts 'Transcription' on a Teams side,
your application must notify the user that call is being actively transcribed due to privacy reasons.

You first need to obtain the transcription feature API object

**Example**
```js
const callTranscriptionFeature = call.api(Features.Transcription);
```

Then, you can check if the audio in the call is being transcribed, inspect the `isTranscriptionActive` property of `callTranscriptionFeature`, it returns `Boolean`

**Example**
```js
const isTranscriptionActive = callTranscriptionFeature.isTranscriptionActive;
```

You can also subscribe to transcription state changes

**Example**
```js
const isTranscriptionActiveChangedHandler = () => {
  console.log(callTranscriptionFeature.isTranscriptionActive);
};
callTranscriptionFeature.on('isTranscriptionActiveChanged', isTranscriptionActiveChangedHandler);
```

To unsubscribe your event handler call

**Example**
```js
callTranscriptionFeature.off('isTranscriptionActiveChanged', isTranscriptionActiveChangedHandler);
```

## v1.0.0-beta.7 (2021-03-01)
## ACS Calling Web (JavaScript) SDK v1.0.0-beta.7 was deprecated due to critical bug that could affect main scenarios.

## v1.0.0-beta.6 (2021-02-18)

## Breaking API Changes
1. CallerInfo interface changes:
    1. identity property has been replaced by `identifier`
    2. optional `displayName` property which is useful for incoming call scenario
2. DeviceAccess interface changes:
    1. `audio` property is not optional anymore, it will be always returned
    2. `video` property is not optional anymore, it will be always returned
3. New interface `PermissionConstraints`
    ```js
        export interface PermissionConstraints {
            audio: boolean;
            video: boolean;
        }
    ```
4. DeviceManager interface changes:
    1. askDevicePermission method uses the new `PermissionConstraints` interface:  
       askDevicePermission(audio: boolean, video: boolean) -> askDevicePermission(permissionConstraints: PermissionConstraints)
5. RendererView interface changes:
    1. mirrored property has been replaced by `isMirrored`
6. RendererOptions interface changes:
    1. mirrored property has been replaced by `isMirrored`
7. IncomingCall interface changes:
    1. new readonly property `callerInfo` of type CallerInfo has been added

## v1.0.0-beta.5 (2021-02-17)

## Bug fixes
1. Fixed https://github.com/Azure/Communication/issues/46
    - Device names do not appear on Android Chrome after calling DeviceManager.AskDevicePermission(), then enumerating the Microphone List
2. Fixed https://github.com/Azure/Communication/issues/47
    - After permissions are granted by the user (call deviceManager.askDevicePermission), the desktop version of Chrome fires the audioDevicesUpdated and videoDevicesUpdated events. These events are not called when accessed from Mobile Chrome
3. Fixed https://github.com/Azure/Communication/issues/144
    - For Android Chrome: The getSpeakerList return empty list. But getMicrophoneList and getCameraList return correct devices 
4. Fixed https://github.com/Azure/Communication/issues/174
    - Occur unhandled runtime error for below conditions:
        1. Could not find Callee
        2. Callee rejected an incoming call

## Breaking API Changes
1. Call interface changes:
    1. Call.unhold() has been changed to call.resume()
    2. 'callStateChanged' event is renamed to 'stateChanged'
    3. 'callIdChanged' event is renamed to 'idChanged'
2. CallAgent.call() has been changed to CallAgent.startCall()
3. CallState.Hold has been removed and splitted in 2 new states:
    1. 'LocalHold' - indicates that call is put on hold by local participant
    2. 'RemoteHold' - indicates that call is put on hold by remote participant
4. DeviceManager interface changes:
    1. getCameraList() has been changed to getCameras() which is now **async**
    2. getMicrophoneList() has been changed to getMicrophones() which is now **async**
    3. getSpeakerList() has been changed to getSpeakers() which is now **async**
    4. setMicrophone() has been changed to selectMicrophone() which is now **async**
    5. setSpeaker() has been changed to selectSpeaker() which is now **async**
    6. getMicrophone() has been changed to readonly **property** selectedMicrophone
    7. getSpeaker() has been changed to readonly **property** selectedSpeaker
    8. 'permissionStateChanged' event has been removed
    9. New event 'selectedMicrophoneChanged' which will be raised when selectedMicrophone is changed
    10. New event 'selectedSpeakerChanged' which will be raised when selectedSpeaker is changed
    11. New property 'isSpeakerSelectionAvailable' which indicates whether the host device supports speaker enumeration and selection
5. HangupCallOptions has been renamed to HangUpOptions
6. PermissionState and PermissionType both types are removed
7. RemoteParticipant interface changes:
    1. 'participantStateChanged' event is renamed to 'stateChanged'
8. RemoteParticipantState now includes 'Ringing' state
9. RemoteVideoStream interface changes:
    1. 'availabilityChanged' event is renamed to 'isAvailableChanged'
10. Transfer interface changes:
    1. 'transferStateChanged' event is renamed to 'stateChanged'
11. LocalVideoStream interface chnages:
    1. getMediaStreamType() has been changed to **getter method** mediaStreamType()
    2. getSource() has been changed to **getter method** source()
12. RemoteVideoStream interface changes:
    1. type property is renamed to mediaStreamType

## Other changes
1. Call.remoteParticipants type change: RemoteParticipant[] -> ReadonlyArray<RemoteParticipant>
2. Call.localVideoStreams type change: LocalVideoStream[] -> ReadonlyArray<LocalVideoStream>
3. CallAgent.calls type change:  Call[] -> ReadonlyArray<Call>
4. RemoteParticipant.videoStreams type change:  RemoteVideoStream[] -> ReadonlyArray<RemoteVideoStream>


## v1.0.0-beta.4 (2021-02-03)

## Bug fixes
1. Fix CallEndReason.subCode lower case 'c' typo 
2. Fix CallAgent.join() api accepting undefined CallContext. Api must now take a GroupLocator or MeetingLocator 

## Breaking API Changes
1. New flow for properties/collection subscriptions.
Application has to inspect current values and subscribe to update events for future values
```js
    // Subscribe to participants currently in a Call
    call.remoteParticipants.forEach(p => {
        subscribeToRemoteParticipant(p);
    })

    call.on('remoteParticipantsUpdated', e => {
        // Subscribe to new participants in the call
        e.added.forEach( p=> {
            subscribeToRemoteParticipant(p)
        })
        e.removed.forEach( p => {
            unsubscribeToRemoteParticipant(p)
        })
    });

    function subscribeToParticipant(p) {
        // Subscribe to participant's current video/screensharing streams
        p.videoStreams.forEach(v => { handleRemoteStream(v) });
        // Subscribe to particiapnt's new video/screensharing streams
        p.on('videoStreamsUpdated', e => {
            e.added.forEach(v => { handleRemoteStream(v) })
        })
    }
}
```
2. Changed Call.callerIdentity variable to Call.callerInfo which is now of type CallerInfo
```js
export declare interface CallerInfo {
    /**
    * Identity of the caller
    */
    identity: CommunicationUserIdentifier | PhoneNumberIdentifier | CallingApplicationIdentifier | MicrosoftTeamsUserIdentifier | UnknownIdentifier | undefined;
}
```

4. Changed Call.isIncoming: boolean to Call.direction: CallDirection
```js
    export declare type CallDirection = 'Incoming' | 'Outgoing';
```

3. Type name changes from @azure/communication-common version beta4
```js
    CommunicationUserCredential -> CommunicationTokenCredential
    CommunicationUser -> CommunicationUserIdentifier
    PhoneNumber -> PhoneNumberIdentifier
    CallingApplication -> CallingApplicationIdentifier
```
Note: @azure/communication-calling beta4 depends on @azure/communication-common beta4

## New features

## Call recording management

Call recording is an extended feature of the core `Call` API. You first need to obtain the recording feature API object:

```js
const callRecordingApi = call.api(Features.Recording);
```

Then, to can check if the call is being recorded, inspect the `isRecordingActive` property of `callRecordingApi`, it returns `Boolean`.

```js
const isResordingActive = callRecordingApi.isRecordingActive;
```

You can also subscribe to recording changes:

```js
const isRecordingActiveChangedHandler = () => {
  console.log(callRecordingApi.isRecordingActive);
};

callRecordingApi.on('isRecordingActiveChanged', isRecordingActiveChangedHandler);
```

## Call Transfer management

Call transfer is an extended feature of the core `Call` API. You first need to obtain the transfer feature API object:

```js
const callTransferApi = call.api(Features.Transfer);
```

Call transfer involves three parties *transferor*, *transferee*, and *transfer target*. Transfer flow is working as following:

1. There is already a connected call between *transferor* and *transferee*
2. *transferor* decide to transfer the call (*transferee* -> *transfer target*)
3. *transferor* should put the call on hold first before invoking `transfer` API
4. *transferor* calls `transfer` API
5. *transferee* decide to whether `accept` or `reject` the transfer request to *transfer target* via `transferRequested` event.
6. *transfer target* will receive an incoming call only if *transferee* did `accept` the transfer request

### Transfer terminology

- Transferor - The one who initiates the transfer request
- Transferee - The one who is being transferred by the transferor to the transfer target
- Transfer target - The one who is the target that is being transferred to

To transfer current call, you can use `transfer` synchronous API. `transfer` takes optional `TransferCallOptions` which allows you to set `disableForwardingAndUnanswered` flag:

- `disableForwardingAndUnanswered` = false - if *transfer target* doesn't answer the transfer call, then it will follow the *transfer target* forwarding and unanswered settings
- `disableForwardingAndUnanswered` = true - if *transfer target* doesn't answer the transfer call, then the transfer attempt will end

```js
// transfer target can be ACS user
const id = { communicationUserId: <ACS_USER_ID> };
```

```js
// call transfer API
const transfer = callTransferApi.transfer({targetParticipant: id});
```

Transfer allows you to subscribe to `transferStateChanged` and `transferRequested` events. `transferRequsted` event comes from `call` instance, `transferStateChanged` event and transfer `state` and `error` comes from `transfer` instance

```js
// transfer state
const transferState = transfer.state; // None | Transferring | Transferred | Failed

// to check the transfer failure reason
const transferError = transfer.error; // transfer error code that describes the failure if transfer request failed
```

Transferee can accept or reject the transfer request initiated by transferor in `transferRequested` event via `accept()` or `reject()` in `transferRequestedEventArgs`. You can access `targetParticipant` information, `accept`, `reject` methods in `transferRequestedEventArgs`.

```js
// Transferee to accept the transfer request
callTransferApi.on('transferRequested', args => {
  args.accept();
});

// Transferee to reject the transfer request
callTransferApi.on('transferRequested', args => {
  args.reject();
});
```


## New 'incomingCall' event for CallAgent
The `CallAgent` instance emits an `incomingCall` event when the logged in identity is receiving an incoming call. To listen to this event subscibe in the following way

```js
const incomingCallHander = async (args: { incomingCall: IncomingCall }) => {
	//accept the call
	var call = await incomingCall.accept();

	//reject the call
	incomingCall.reject();
};
callAgentInstance.on('incomingCall', incomingCallHander);
```
The `incomingCall` event will provide with an instance of `IncomingCall` on which you can accept or reject a call. Please note that Call interface no longer has accept() nor reject() method. These two methods are now part of the IncomingCall interface.
```js
export declare interface IncomingCall {
    readonly id: string;
    accept(options?: AcceptCallOptions): Promise<Call>;
    reject(): Promise<void>;
    on(event: 'callEnded', listener: CallEndedEvent): void;
    off(event: 'callEnded', listener: CallEndedEvent): void;
}
```

## New 'callEnded' event for Call obj
```js
    call.on('callEnded', args => {
        console.log(args.callEndReason);
    });
```

## Other changes
1. New package structure:
    * /dist
        * sdk.bundle.js
    * /dist-esm
        * sdk.bundle.js
    * /types
        * communication-calling.d.ts
    * EULA.txt
    * Notices.txt
    * package.json (Updated)
    * README.md (Updated)
2. Added new package dependencies:
    * @azure/logger version 1.0.0
    * @azure/communication-common version beta4 (calling beta4 depends on common beta4)

## v1.0.0-beta.3 (2020-12-16)

## Bug fixes
1. Safari/iOS 14+ - fixed an issue with video being stopped if user starts or joins a call with enabled video preview.
2. Call.unhold() API can now be called right after Call.hold() API without having to wait for Call.hold() API to resolve.
3. Fixes to allow consumption of library with as a ES5 bundle ( enables support for EmberJs framework )

## Breaking API changes
Display name of an ACS user is now passed in CallClient.createCallAgent() API as an optional argument and it is immutable.
`callAgent.updateDisplayName` API is deprecated.
### New interface
```ts
export class CallClient {
  // ...
  public async createCallAgent(tokenCredential: CommunicationUserCredential, options?: CallAgentOptions): Promise<CallAgent>
}

export interface CallAgentOptions {
    /**
     * Specify the display name of the local participant for all new calls.
     */
    displayName?: string;
}
```
### Usage example
```ts
    const tokenCredential = new AzureCommunicationUserCredential("<USER ACCESS TOKEN>");
    callAgent = await callClient.createCallAgent(tokenCredential, {displayName: 'optional ACS user name'});
```
Changed join group call API to now take a GroupLocator:

### New interface
```ts
export class CallAgent {
  // ...
  join(groupLocator: GroupLocator, options?: JoinCallOptions): Call;
}
/**
 * Locator used for joining a group call.
 * @public
 */
export interface GroupCallLocator {
    groupId: string;
}
```
### Usage example
```ts
    const groupLocator = { groupId: '<GROUP_ID>'};
    callAgent.join(groupLocaltor, {});
```
Changed join Teams meeting api to now take a MeetingLocaltor:
### New interface
```ts
/**
 * @beta
 * Locator used for joining a meeting with meeting link.
 */
export interface TeamsMeetingLinkLocator {
    meetingLink: string;
}

/**
 * @beta
 * Locator used for joining a meeting with meeting coordinates.
 */
export interface TeamsMeetingCoordinatesLocator {
    threadId: string;
    organizerId: string;
    tenantId: string;
    messageId: string;
}

/**
 * @beta
 * Type of Meeting locator.
 */
export type MeetingLocator = TeamsMeetingLinkLocator | TeamsMeetingCoordinatesLocator;

export class CallAgent {
  // ...
  /**
     * @beta
     * Join a meeting.
     * @param meetingLocator - Meeting information.
     * @param options - Call start options.
     * @returns The Call object associated with the call.
     */
    join(meetingLocator: MeetingLocator, options?: JoinCallOptions): Call;
}
```

### Usage example

```ts
  const teamsMeetingLinkLocator = { meetingLink: '<TEAMS_MEETING_URL>'};
  callAgent.join(teamsMeetingLinkLocator, {});
```
## Other changes
1.  Teams/ACS meeting interop - ACS Calling SDK will not expose any Teams bots ( e.g. Recording ) through 'remoteParticipants' collection.
    Application can inspect & subscribe to isRecordingActive property to discover if current call is recorded
2.  Call.startVideo(localVideoStream: LocalVideoStream) API must now take a LocalVideoStream object as an argument
3.  LocalVideoStream constructor must now take VideoDeviceInfo as an argument


## v1.0.0-beta.2 (2020-11-10)

## Bug fixes
* Call.callEndReason is undefined when Call terminates issue was fixed and now will be populated with a code and sub-code which determine the reason why the call terminated.
* Call terminates when there is only 1 participant left in the call ([GitHub Issue 68](https://github.com/Azure/Communication/issues/68)) was fixed and now call will stay connected if there is only 1 participant left in the call.


## New features

* New APIs to join Teams meetings by using meeting link or meeting coordinates:
<br/>`CallAgent.join(context: MeetingLinkContext, options?: JoinCallOptions): Call;`
<br/>`CallAgent.join(context: MeetingCoordinatesContext, options?: JoinCallOptions): Call;`

## v1.0.0-beta.1 (2020-09-22)

This is the initial release of Azure Communication Services for public preview for JavaScript (Web) SDK. The following features are not available yet:

1. Acquiring phone numbers
2. Using phone numbers to send and receive SMS messages
3. Using the Calling SDK to drive voice calls with the traditional phone network (PSTN)

### Features available
*   Place and receive 1-1 audio/video call
*   Place and receive 1-N (group) audio/video call
*   Join 1-N (group) audio/video call
*   Escalate a 1-1 call to a group call - by adding voip participant
*   Allow to join call with microphone mute
*   Allow to set camera device before call and to switch camera device during call
*   Allow to enable/disable camera in-call and while call is ringing/incoming
*   DeviceManager support to list audio and video devices
*   DeviceManager support to set audio devices
*   Remote video and screen-sharing rendering
*   Screensharing support
*   Local camera device preview rendering
*   Mid-call operations (mute/unmute)
*   Mid-call operations (Turn Video on/Turn Video off)
*   Mid-call operations (Add\Remove Participant)
*   Call and RemoteParticipant states
*   Property changed and collection updated events
*   Place a call to PSTN participant
*   Test your mic, speaker, and camera via audio testing service (available by calling 8:echo123) 
*   Hold/unhold

### Onboarding
Please refer to the [Microsoft docs](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-web) of how to bootstrap a Calling sample application on web.

### Limitations
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates
* On web mobile and web desktop at any given time client multiple receive video streams might result in a greater number of video freezes and/or quality fluctuations. We are working on improving the experience. We recommend limiting number of incoming streams to one if you experience such issues
* The PSTN and VOIP access token scopes are currently not enforced. All-access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 
