# ACS Calling iOS (Objective-C) SDK - Release History

## v1.0.0-beta.12 (2021-4-13)

### New features
- `DeviceManager` instance can be obtained irrespective of `CallAgent` creation.

### Breaking changes
- Added `Nullability` annotations for parameters in delegate methods, properties and return types in init. This removes for e.g. the need for the application to force un-wrap objects created by the SDK where applicable.
- Delegate method signatures renamed to confirm with Swift guidelines. Similar to [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate).
- Block `CallAgent` creation with same user.
- `IsMuted` event is added to the `Call` class. Event will be triggered when the call is locally or remotely muted.
- Multiple classes properties/methods renamed:
   - `Call` class:
       - Property `callDirection` renamed to `direction`.
       - Property `isMicrophoneMuted` renamed to `isMuted`.

    - `VideoOptions` class:
       - `LocalVideoStream` property is now `LocalVideoStreams` making it an array.
       - The constructor for `VideoOptions` now takes an array of `LocalVideoStream` as parameter.

- `RenderingOptions` has been renamed `CreateViewOptions`.

- `startCall` and `join` API's on `CallAgent` are now asynchronous.

- Mandatory to pass completion handler block for all async API's.

### Bug fixes
- SDK Crash when another guest user joins a Teams meeting with Video on. https://github.com/Azure/Communication/issues/218
- `OnRemoteParticipantsUpdated` event updates the participant state to `Idle` when the participant is `InLobby`. https://github.com/Azure/Communication/issues/221
- Speaking Change Listeners were triggered unexpectedly. https://github.com/Azure/Communication/issues/234
- Turning the local video off/on quickly shows a blank local video. https://github.com/Azure/Communication/issues/225
- [iOS] SDK crash if user input an invalid teams meeting link on beta 9.0. https://github.com/Azure/Communication/issues/198
- Issue Implementing Video Calling. https://github.com/Azure/Communication/issues/212
- [iOS] App crash when joining a call with muted and audio permission was not granted. https://github.com/Azure/Communication/issues/90
- Answering an incoming with Video not rendering for local participant.
- SDK crash when another video guest user join the Teams meeting from Web/App. https://github.com/Azure/Communication/issues/216
- Answer an incoming with Video does not show Video streams of remote user.

## v1.0.0-beta.9 (2021-03-10)
**There is no support for FAT frameworks starting from this release. But if you still need it please create an issue for us [here](https://github.com/Azure/Communication/issues).**

### New features
- SDK is now shipped as a XCFramework instead of a FAT framework created using `lipo`.
- Improved caching of objects. 
- Added new call state `Hold` when a remote participant puts the call on hold.

### Breaking changes
- `Renderer` renamed to `VideoStreamRenderer`.
- `AudioDeviceInfo` removed from `DeviceManager`, please use iOS system API's in your application to switch between audio devices.
- `CallAgent` raises a new event `onIncomingCall` when a new incoming call is received. 
- `IncomingCall` raises a new event `onCallEnded` event is raised when the incoming call wasn't answered.
- `Accept` and `Reject` can now be done on `IncomingCall` object and removed from `Call` object.
- For parsing of push notification payload `IncomingCallPushNotification` has been renamed to `PushNotificationInfo`.
- `CallerInfo` class created which provides information about the caller in an incoming call. Can be retrieved from `IncomingCall` and `Call` objects. 

### Bug fixes
- `OnCallsUpdated` event is raised when the call collection on `CallAgent` is updated for outgoing calls.
- `Hold` and `Resume` of an active call is fixed. 

## v1.0.0-beta.8 (2021-02-08)
**Latest XCode 12.3 does not support frameworks where lipo was used to combine simulator and arm builds, we will address this issue in the next release.**

### New features
- Ability to join a Teams meeting.
- New event on `Call` `OnIsRecordingActiveChanged` to indicate when the recording has been started and stopped and new property `IsRecordingActive` to indicate if currently the recording is active or not.

### Onboarding 
- The AzureCommunicationCalling SDK is released for the following platforms: arm64 (device) and x86_64 (simulator).
- **Minimum supported iOS SDK version is 12.0**
- Follow this [quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios) to get started.
- `AzureCommunicationCalling.framework`, `AzureCore.framework` and `AzureCommunication.framework` can be installed by writing a `Podfile` for CocoaPods. More information can be found in [quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios).

### Bug Fixes
- Fix wrong `callId` on the incoming `Call` object https://github.com/Azure/Communication/issues/164
- When placing outgoing call or joining call list on `CallAgent` is updated.
- Throw IllegalArgumentException if null camera is passed to constructor of `LocalVideoStream`.
- Video freezing in landscape mode https://github.com/Azure/Communication/issues/128
- `RendererView` layout is off after a device rotation https://github.com/Azure/Communication/issues/127
-  `RendererView` is blank when not added to the window right away https://github.com/Azure/Communication/issues/132
- `RendererView` Issues when joining a call with a reused `groupId` https://github.com/Azure/Communication/issues/111

## v1.0.0-beta.7 (2020-12-17)

**Latest XCode 12.3 does not support frameworks where lipo was used to combine simulator and arm builds, we will address this issue in the next release.**

### New features
- Ability to set Caller display name when initializing the SDK

### Onboarding 
- The AzureCommunicationCalling SDK is released for the following platforms: arm64 (device) and x86_64 (simulator).
- **Minimum supported iOS SDK version is 12.0**
- Follow this [quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios) to get started.
- `AzureCommunicationCalling.framework`, `AzureCore.framework` and `AzureCommunication.framework` can be installed by writing a `Podfile` for CocoaPods. More information can be found in [quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios).

### Bug Fixes
- `handlePushNotification` does not return false if the same payload has been processed already.
- Improved logging to identify the `hangup` related issues reported in GitHub.
- Remote participant is still available after hangup/disconnect. (https://github.com/Azure/Communication/issues/134)


## v1.0.0-beta.6 (2020-11-23)

### Onboarding 
- The AzureCommunicationCalling SDK is released for the following platforms: arm64 (device) and x86_64 (simulator).
- **Minimum supported iOS SDK version is 12.0**
- Follow this [quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios) to get started.
- `AzureCommunicationCalling.framework`, `AzureCore.framework` and `AzureCommunication.framework` can be installed by writing a `Podfile` for CocoaPods. More information can be found in [quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-ios).

### Breaking Changes
- Swift applications will not see `ACS` prefix for classes and enums. For e.g. `ACSCallAgent` is now `CallAgent` when AzureCommunicationCalling  SDK is imported in a Swift application.
- Parameter labels are mandatory for all API calls from Swift Applications.
- Except the first argument all other arguments in delegates will need parameter labels in Swift Applications.
- Exception is thrown if an application tries to render video/camera twice.

### Bug Fixes
- Crash on calling `Call.hangup()` (https://github.com/Azure/Communication/issues/106).
- Deadlock when deleting `ACSCallAgent` object (https://github.com/Azure/Communication/issues/106).
- `Call.hangup()` method will return only after all necessary events are delivered to the app (https://github.com/Azure/Communication/issues/85).
- `Call.hangup()` now terminates call if the call is in `Connecting` or `Ringing` state (https://github.com/Azure/Communication/issues/96).
- Calling SDK was raising `RemoteVideoStream` removed event when app stopped rendering it. SDK now raises a follow-up `RemoteVideoStream` added event once the stream is ready to be rendered again. (https://github.com/Azure/Communication/issues/95).
- `Info.plist` has version following semantic version schema for `CFBundleVersion` and `CFBundleShortVersionString` entries (https://github.com/Azure/Communication/issues/113).


## v1.0.0-beta.5 (2020-11-18)

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


## v1.0.0-beta.4 (2020-10-06)

* **[Fix]** IsMutedUpdated\IsSpeakingUpdated events are now available
* **[Fix]** Fix bug where group call cannot be started in mute state
* **[Fix]** Removed dependency on quicklookthumbnailing and iosurface frameworks
* **[Fix]** Fix bug where getCallerIdentity method on CallAgent did not return caller's identifier

## v1.0.0-beta.1 (2020-09-22)

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
