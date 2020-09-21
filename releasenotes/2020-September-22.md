# Release Notes for September 22, 2020

## Android SDK

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
<br/>Please refer to the [Microsoft docs](https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/voice-video-calling/getting-started-with-calling) of how to bootstrap a Calling sample application on android.

### Limitations
* While ability of making PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/telephony-sms/get-phone-number?branch=pr-en-us-104477) for availability updates
* On mobile and desktop at any given time client multiple receive video streams might result in greater number of video freezes and/or quality fluctuations. We are working on improving the experience. We recommend to limit number of incoming streams to one if you experience such issues
* The PSTN and VOIP access token scopes are currently not enforced. All access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 
*  We don't support x86 simulators, arm7 support is coming soon

## iOS SDK

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
<br/>Please refer to the [Microsoft docs](https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/voice-video-calling/getting-started-with-calling) of how to bootstrap a Calling sample application on iOS.

### Limitations
* While ability of making PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/telephony-sms/get-phone-number?branch=pr-en-us-104477) for availability updates
* On mobile and desktop at any given time client multiple receive video streams might result in greater number of video freezes and/or quality fluctuations. We are working on improving the experience. We recommend to limit number of incoming streams to one if you experience such issues
* The PSTN and VOIP access token scopes are currently not enforced. All access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 

## JS (Web) SDK

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
Please refer to the [Microsoft docs](https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/voice-video-calling/getting-started-with-calling) of how to bootstrap a Calling sample application on web.

### Limitations
* While ability of making PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://review.docs.microsoft.com/en-us/azure/project-spool/quickstarts/telephony-sms/get-phone-number?branch=pr-en-us-104477) for availability updates
* On mobile and desktop at any given time client multiple receive video streams might result in greater number of video freezes and/or quality fluctuations. We are working on improving the experience. We recommend to limit number of incoming streams to one if you experience such issues
* The PSTN and VOIP access token scopes are currently not enforced. All access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 

