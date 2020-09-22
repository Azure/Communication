# Release Notes for September 22, 2020

## Package Links


| Area           | JavaScript | .NET | Python | Java | Swift or Obj-C | Java (Android) | Other                          |
| -------------- | ---------- | ---- | ------ | ---- | -------------- | -------------- | ------------------------------ |
| Azure Resource Manager | -         | [1.0.0-beta.1](https://www.nuget.org/packages/Azure.ResourceManager.Communication)    |   [PyPi](https://pypi.org/project/azure-mgmt-communication/)    | -    | -              | *Not yet supported*  | [Go v46.3.0](https://github.com/Azure/azure-sdk-for-go/releases/tag/v46.3.0) |
| Common         | [1.0.0-beta.1](https://www.npmjs.com/package/@azure/communication-common)         | [1.0.0-beta.1](https://www.nuget.org/packages/Azure.Communication.Common/)    | N/A      | ✔️   | ✔️            | ✔️             | -                              |
| Administration | [1.0.0-beta.1](https://www.npmjs.com/package/@azure/communication-administration)         | [1.0.0-beta.1](https://www.nuget.org/packages/Azure.Communication.Administration)    | [PyPi](https://pypi.org/project/azure-communication-administration/)      | ✔️   | -              | -              | CLI                            |
| Chat           | [1.0.0-beta.1](https://www.npmjs.com/package/@azure/communication-chat)        | [1.0.0-beta.1](https://www.nuget.org/packages/Azure.Communication.Chat)     | [PyPi](https://pypi.org/project/azure-communication-chat/)     | ✔️   | *Not yet supported*  | *Not yet supported*  | -                              |
| SMS            | [1.0.0-beta.1](https://www.npmjs.com/package/@azure/communication-sms)         | [1.0.0-beta.1](https://www.nuget.org/packages/Azure.Communication.Sms)    | [PyPi](https://pypi.org/project/azure-communication-sms/)       | ✔️   | -              | -              | -                              |
| Calling        | ✔️         | -      | -      | -     | (Obj-C) ✔️     | ✔️            | -                              |
| Reference Documentation     | ✔️         | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)      | -      | -     | (Obj-C) ✔️     | ✔️            | -                              |


## Android Calling SDK

### Features available
* Place and receive 1-1 audio/video call
* Place and receive 1-N (group) audio/video call
* Join (1-N) group audio/video call
* Escalate a 1-1 call to a group call - by adding voip participant
* Dial-out to another voip participant to join an ongoing group audio/video call
* Preview local video camera
* Share local video camera stream
* Render video from participants
* Render screenshare from participants
* List audio/video devices
* Mid-call operations (Mute/Unmute)
* Mid-call operations (Turn Video on/Turn Video off)
* Mid-call operations (Switch between Video devices)
* Mid-call operations (Add/Remove participant to/from the ongoing audio/video call)
* Push notification support for incoming audio/video call
* Place a call to PSTN participant
* Test your mic, speaker, and camera via audio testing service (available by calling 8:echo123) 


### Onboarding
The SDK is packaged as FAT SDK artifact with all ABIs (arm64-v8a, x86_64) supported on the Android platform.
<br/>Please refer to the [Microsoft docs](https://docs.microsoft.com/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling) of how to bootstrap a Calling sample application on android.

### Limitations
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates
* The PSTN and VOIP access token scopes are currently not enforced. All-access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice.  
*  We don't support x86 simulators, arm7 support is coming soon

## iOS Calling SDK

### Features available

* Place and receive 1-1 audio/video call
* Place and receive 1-N (group) audio/video call
* Join (1-N) group audio/video call
* Escalate a 1-1 call to a group call - by adding voip participant
* Dial-out to another voip participant to join an ongoing group audio/video call
* Preview local video camera
* Share local video camera stream
* Render video from participants
* Render screenshare from participants
* List audio/video devices
* Mid-call operations (Mute/Unmute)
* Mid-call operations (Turn Video on/Turn Video off)
* Mid-call operations (Switch between Video devices)
* Mid-call operations (Add/Remove participant to/from the ongoing audio/video call)
* Push notification support for incoming audio/video call
* Place a call to PSTN participant
* Test your mic, speaker, and camera via audio testing service (available by calling 8:echo123) 

### Onboarding
The SDK is released for the following platforms: arm64 and x86_64 (simulator)
<br/>Minimum supported iOS SDK version is 12.0
<br/>Please refer to the [Microsoft docs](https://docs.microsoft.com/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling) of how to bootstrap a Calling sample application on iOS.

### Limitations
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates
* The PSTN and VOIP access token scopes are currently not enforced. All-access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 

## JS (Web) Calling SDK

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
Please refer to the [Microsoft docs](https://docs.microsoft.com/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling) of how to bootstrap a Calling sample application on web.

### Limitations
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates
* On web mobile and web desktop at any given time client multiple receive video streams might result in a greater number of video freezes and/or quality fluctuations. We are working on improving the experience. We recommend limiting number of incoming streams to one if you experience such issues
* The PSTN and VOIP access token scopes are currently not enforced. All-access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 

