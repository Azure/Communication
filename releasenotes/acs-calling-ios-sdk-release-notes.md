# ACS Calling iOS (Swift) SDK release notes

## [v1.0.0-beta.5](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.5)
This release notes for November 18, 2020 will only contain changes for ACS Calling iOS SDK. 

### New Features
- Cocoapods is available for ACS
- Added Cocoapods specs for AzureCore, AzureCommunication, AzureCommunicationChat and AzureCommunicationCalling SDK's

### Breaking Changes
- Swift applications will not see `ACS` prefix for classes and enums. For e.g. `ACSCallAgent` is now `CallAgent` when Azure Communication Calling SDK is imported in a Swift application.
- Parameter labels are mandatory for all API calls from Swift Applications.
- Except the first argument all other arguments in delegates will need parameter labels in Swift Applications.
- Exception is thrown if an application tries to render video/camera twice.


### Bug Fixes
Among of the problem that we fixed:
- Deadlock when deleting `ACSCallAgent` object
- Call.hangup() method will return only after all necessary events are delivered to the app  ([GitHub Issue 85](https://github.com/Azure/Communication/issues/85))
- Call.hangup() now terminates call if the call is in Connecting or Ringing state ([GitHub Issue 96](https://github.com/Azure/Communication/issues/96))
- Calling SDK was raising RemoteVideoStream removed event when app stopped rendering it. SDK now raises a follow-up RemoteVideoStream added event once the stream is ready to be rendered again. ([GitHub Issue 95](https://github.com/Azure/Communication/issues/95))


## [v1.0.0-beta.4](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.4)
This release notes for October 06, 2020 will only contain changes for ACS Calling iOS SDK.

* **[Fix]** IsMutedUpdated\IsSpeakingUpdated events are now available
* **[Fix]** Fix bug where group call cannot be started in mute state
* **[Fix]** Removed dependency on quicklookthumbnailing and iosurface frameworks
* **[Fix]** Fix bug where getCallerIdentity method on CallAgent did not return caller's identifier

## v1.0.0-beta.1

## Release Notes for September 22, 2020 iOS Calling SDK
This is the initial release of Azure Communication Services for public preview. The following features are not available yet:

1. Acquiring phone numbers
2. Using phone numbers to send and receive SMS messages
3. Using the Calling SDK to drive voice calls with the traditional phone network (PSTN)

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
<br/>**BuildAzurePackages.sh script works only with Xcode 11.5 and above**
<br/>Please refer to the [Microsoft docs](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios) of how to bootstrap a Calling sample application on iOS.

### Limitations
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates
* The PSTN and VOIP access token scopes are currently not enforced. All-access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice. 
