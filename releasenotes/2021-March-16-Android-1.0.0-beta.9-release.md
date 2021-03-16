# Release Notes for March 16, 2021

This release contains following changes for ACS Calling Android (Java) SDK.

## Version 1.0.0-beta.9

## Bug fixes
- `Call.getRemoteParticipants().size() == 0` when call state reaches `CONNECTED` https://github.com/Azure/Communication/issues/217
- `Call.OnIsRecordingActiveChanged` event not triggered in a Teams meeting scenario https://github.com/Azure/Communication/issues/218


## Breaking API changes
1. Properties Setters now return class owner type instead of void allowing for writing fluent API syntax.
Example:
```
    StartCallOptions startCallOptions = new StartCallOptions()
            .setVideoOptions(new VideoOptions(new LocalVideoStream(getCameraToUse(), this.getApplicationContext())))
            .setAudioOptions(new AudioOptions().setMuted(false));
```
2. Enum values are now SNAKE_CASE
- CallState enum value `Connecting` is not `CONNECTING` and `RemoteHold` is now `REMOTE_HOLD`

3. Asynchronous operations that return `CompletableFuture` with raw types have been changed to `CompletableFuture<Void>`

4. Incoming Call and Push Notification flow restructured:
- The new classes `CallerInfo` and `PushNotificationInfo` were introduced to handle an incoming call flow.
- `IncomingCallInformation` and `PushNotificationInformation` have been removed
- `IncomingCall.getCallerInfo()` returns `CallerInfo` which encompass the details about the caller
- `IncomingCall.getCallEndReason()` returns `CallEndReason` which encompass the code/subCode about Call end reason
- `IncomingCall.isVideoEnabled()` returns a boolean to indicate whether the call contains a incoming video stream
- `CallAgent.handlePushNotification(IncomingCallInformation)` has been changed to `CallAgent.handlePushNotification(PushNotificationInfo)`

5. Multiple classes/enums properties/methods renamed/removed:
- Call class:
Method `getIdentifier()` on Call has been removed and a new `getCallerInfo()` method was introduced to fetch details about the Caller
- `CommunicationException` was renamed `CallingCommunicationException`
- `CommunicationErrors` was renamed `CallingCommunicationErrors`
- CallAgent class:
Method `UnRegisterPushNotifications()` was renamed `UnregisterPushNotification()`
- DeviceManager class (All audio related properties/events were removed):
Method `getMicrophones()` and `getSpeakers()` were removed
Method `setMicrophone(AudioDeviceInfo)` and `setSpeaker(AudioDeviceInfo)` were removed
Method `addOnMicrophonesUpdated(AudioDevicesUpdatedListener)` and `addOnSpeakersUpdated(AudioDevicesUpdatedListener)` were removed
Method `removeOnMicrophonesUpdated(AudioDevicesUpdatedListener)` and `removeOnSpeakersUpdated(AudioDevicesUpdatedListener)` were removed
- `Renderer` class was renamed `VideoStreamRenderer`
- `RendererView` class was renamed `VideoStreamRendererView`
- VideoDeviceType Enum:
SurfaceResonstructionAugmented was removed
