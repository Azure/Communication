# ACS Calling Android (Java) SDK - Release History

Package location: [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling)

Please note, packages version 2.2.2 and older has been deprecated and will no longer be maintained. We encourage you to upgrade to the latest version to continue receiving updates.

## 2.14.1-beta.1
### Bug Fixes:
  - Support 16 KB page sizes

## 2.13.1
### Bug Fixes:
  - Bug fix for PSTN mute/unmute

## 2.13.0
### New Features:
- [Real time text](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-with-real-time-text?pivots=programming-language-java)
- New getServerCallId() API for call recording

## 2.11.0 (2024-09-24)

### New Features:
  - Added support for `Soft mute`.
  - Added a new Maven dependency called `trouter-client-android`. This dependency enhances the SDK's capabilities by providing efficient asynchronous delivery of messages from cloud services to client applications.
  - This new version will also work seamlessly with the ACS Chat SDK in the same application, providing a unified and efficient solution for both messaging and chat functionalities..

## 2.10.0 (2024-08-02)

### New Features:
  - Added support for `Call Survey`.
  - Added `OutgoingVideoConstraints` feature.
  - Added support for `CommunicationCaptions`.

## 2.10.0-beta.1 (2024-06-27)

### New Features:
  - Added `CallSurvey`.
  - Added `RemoteUserDiagnostics`.

## 2.9.0 (2024-06-05)

### New Features:
  - Added `CapabilitiesCallFeature` for Rooms/Teams Meeting.
  - Telecom Manager integration.
  - Added `TeamsMeetingIdLocator` for joining Teams.

## 2.8.1 (2024-05-28)

### Bug Fixes:
  - Performance improvements.
    
## 2.9.0-beta.2 (2024-05-23)

### New Features:
  - Added `CapabilitiesCallFeature` for Rooms/Teams Meeting.
  - Various updates for `MediaStatistics`.
  - Various updates for `PrecallDiagnostics`.
  - Added `TeamsMeetingIdLocator` for joining Teams.

## 2.9.0-beta.1 (2024-04-12)

### New Features:
  - Telecom Manager integration.

### Bug Fixes:
  - Fix for video effects issue [1492](https://github.com/Azure/azure-sdk-for-android/issues/1492).

## 2.8.0 (2024-04-10)

### New Features:
  - Support Custom Teams Endpoints (CTE).

## 2.8.0-beta.1 (2024-04-05)

### Bug Fixes:
  - Maintenance release.

## 2.7.0 (2024-03-21)

### New Features:
  - Support for Media Statistics feature.
  - Support for Data Channel feature.
  - Support for Background Replacement Effect.
  - Support for CallNetworkOptions that allows setting up proxy address.
  - Support for setting custom Time To Live for push notifications.

## 2.6.0 (2024-02-02)

### New Features:
  - Support Proxy feature to allow users specify and use their own http proxy and media relays.
  - Spotlight Call Feature for Teams Meetings.
  - Add Audio Filter into AudioOptions to allow configuring of settings for echo cancellation, automatic gain control, and noise suppression
  - Add Teams Meeting Lobby support.
  - Add `setCommunicationAudioModeEnabled` method in  `OutgoingAudioOptions` to enable MODE_IN_COMMUNICATION for the call https://developer.android.com/reference/android/media/AudioManager#MODE_IN_COMMUNICATION

## 2.6.0-beta.7 (2024-01-24)

### Bug Fixes:
  - Maintenance release.

## 2.6.0-beta.6 (2023-12-21)

### Bug Fixes:
  - Maintenance release.

## 2.6.0-beta.5 (2023-12-08)

### Bug Fixes:
  - Maintenance release.

## 2.6.0-beta.4 (2023-11-08)

### Bug Fixes:
  - Maintenance release.

## 2.6.0-beta.3 (2023-09-27)

### Bug Fixes:
  - Maintenance release.

## 2.6.0-beta.2 (2023-08-18)

### Bug Fixes:
  - Maintenance release.

## 2.5.0 (2023-08-11)

### New Features:
  - New Teams captions feature that allows ACS users to enable closed captions in Teams meeting and allows Microsoft 365 users on ACS SDK to use closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call and caption language for themselves (requires Teams Premium).
  - Added support for user facing diagnostics feature.

## 2.6.0-beta.1 (2023-07-19)

### Bug Fixes:
  - Maintenance release.

## 2.4.0 (2023-07-13)

### New Features:
  - Added support for Raise Hand feature on ACS and Teams meetings.
  - Added support for joining a Teams's room.

## 2.3.0 (2023-05-26)

### New Features:
  - Introduced IncomingAudioOptions and OutgoingAudioOptions and deprecated AudioOptions.
  - Introduced muteOutgoingAudio and unmuteOutgoingAudio and deprecated mute/unmute.
  - Introduced muteIncomingAudio and unmuteIncomingAudio.
  - Deprecated isMuted.
  - Added ActiveIncomingAudioStream and ActiveOutgoingAudioStream.
  - StopAudio API now takes AudioStream as argument instead of MediaStreamDirection.
  - Add isOutgoingAudioMuted, isIncomingAudioMuted properties.
  - Add Raw Audio Feature.
  - Add Raw Video Feature.
  - Dominant Speaker Feature: Dominant speakers is an extended feature that allows you to obtain a list of the active speakers in the call. The dominant speakers list can change dynamically according to the activity of the participants on the call.
  - Adds Video Effects Feature for LocalVideoStream.
  - Adds Background Blur Video Effect for Local Video Streams to use with `VideoEffectsLocalVideoStreamFeature`.

### Bug Fixes:
  - Maintenance release.

## 2.5.1-beta.6 (2023-05-26)

### Bug Fixes:
  - Maintenance release.

## 2.5.1-beta.5 (2023-04-12)

### Bug Fixes:
  - Maintenance release.

## 2.5.1-beta.4 (2023-03-30)

### New Features:
  - Introduced IncomingAudioOptions and OutgoingAudioOptions and deprecated AudioOptions.
  - Introduced muteOutgoingAudio and unmuteOutgoingAudio and deprecated mute/unmute.
  - Introduced muteIncomingAudio and unmuteIncomingAudio.
  - Deprecated isMuted.
  - Added ActiveIncomingAudioStream and ActiveOutgoingAudioStream.
  - StopAudio API now takes AudioStream as argument instead of MediaStreamDirection.
  - Add isOutgoingAudioMuted, isIncomingAudioMuted properties.
  - Add Raise Hand feature that allow to publish and remove RaiseHand states on ACS and Teams meetings.
  - Add Teams captions feature that allows ACS users to enable closed captions in Teams meeting and allows Microsoft 365 users on ACS SDK to use closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call and caption language for themselves (requires Teams Premium).
  - Add Raw Audio Feature.
  - Adds Video Effects Feature for LocalVideoStream.
  - Adds Background Blur Video Effect for Local Video Streams to use with `VideoEffectsLocalVideoStreamFeature`.
  - Adds User Facing Diagnostics as part of Call Features.

### Bug Fixes:
  - Fixes call `unmute` operation taking too long to complete.

### Breking Changes:
  - Dominant Speakers changed the method name `getTimestamp()` to `getLastUpdatedAt()`.

## 2.5.1-beta.3 (2023-01-12)

### Bug Fixes:
  - Fixes issue where one cannot unmute speaker when a call is started with the microphone muted.

## v2.2.2 (2022-12-26)
### New Features:
  - EUDB compliance - starting from this version, all data is processed and stored according to new EU regulations - details https://blogs.microsoft.com/eupolicy/2021/05/06/eu-data-boundary

## 2.5.1-beta.2 (2022-12-26)

### New Features:
  - EUDB compliance - starting from this version, all data is processed and stored according to new EU regulations - details https://blogs.microsoft.com/eupolicy/2021/05/06/eu-data-boundary

### Bug Fixes:
  - Fix for start called with audio muted not working.

## v2.5.1-beta.1 (2022-11-21)

### Bug fixes
- Local camera preview orientation fix.

## v2.5.0-beta.1 (2022-11-02)

### New Features
 - Added support for audio start/stop.
 - Added new API for `muteSpeaker` and property `isSpeakerMuted`.
 - Add support for `RecordingsUpdated` event which will be triggered when a recording is started or stopped, `Recordings` property to list all current recordings and `RecordingState` indicates the state of a recording. 

## v2.2.0 (2022-11-01)

### Bug fixes

- Bugfix on Remote Video Start on Android API 21-25
- Fix calling `call.hangup()` with `HangUpOptions` for everybody.
- Fix bug that allowed create several CallAgents for same identity

## v2.4.0-beta.1 (2022-09-28)

### New Features
- Azure Communication Services introduces the concept of a `room` for developers who are building structured conversations such as virtual appointments or virtual events. Learn more about rooms [here](https://learn.microsoft.com/azure/communication-services/concepts/rooms/room-concept). Get started using rooms by following the [quick start guides](https://learn.microsoft.com/azure/communication-services/quickstarts/rooms/get-started-rooms).

	Join a room
	```java
	val roomCallLocator = RoomCallLocator(roomId)
    call = callAgent.join(applicationContext, roomCallLocator, joinCallOptions)
	```
	Subscribe to changes for your role in the call
	```java
	private void isCallRoleChanged(PropertyChangedEvent propertyChangedEvent) {
        // handle self-role change
    }
    
    call.addOnRoleChangedListener(isCallRoleChanged);
	```
	Subscribe to role changes for remote participants
	```java
	private void isRoleChanged(PropertyChangedEvent propertyChangedEvent) {
        // handle remote participant role change
    }
    
    remoteParticipant.addOnRoleChangedListener(isRoleChanged);
	```
### Bug fixes
- Bugfix on Remote Video Start on Android API 21-25.
- Fix calling `call.hangup()` with `HangUpOptions` for everybody.
- Fix bug that allowed create several CallAgents for same identity.

## v2.2.0 (2022-06-09)

### New Features
- ⁠Client options diagnostic information.
	- Application will be able to pass custom 'appName', 'appVersion', and additionally set of 'tags' to the SDK that will be sent with telemetry pipeline.

### Bug fixes
- Fixed crash when a invalid token is provided

## v2.3.0-beta.1 (2022-06-07)
### New Features:
- Revamp of Raw Media Functionality using Streams concept.
- New ScreenSharing functionality via a new type of Raw Video Stream

### Bug Fixes
- Fixed crash when a invalid token is provided

### Breaking API changes
- Some concepts of the Raw Media APIs have changed. `OutboundVirtualVideoDevice` class was removed and related interactions. This version uses the `Stream` concept, which can be passed on `StartCallOptions` when starting a call, instead of having a Virtual Device available in the `DeviceManager`. The existing functionality of `OutboundVirtualVideoDevice` can be kept by creating a `VirtualRawOutgoingVideoStream` using `RawOutgoingVideoStreamOptions` (which is analogous to the existing `OutboundVirtualVideoDeviceOptions`);
- Other classes related to Raw Video Functionality were renamed:
  - `MediaFrameSender` to `VideoFrameSender`
  - `SoftwareBasedVideoFrame` to `SoftwareBasedVideoFrameSender`
  - `HardwareBasedVideoFrame` to `HardwareBasedVideoFrameSender`

## v2.1.0 (2022-06-01)
## New Features:
- Voice and video calling support in Azure government.
- Push Notifications support for stopping an incoming call because it was answered in another device, or caller cancelled, etc.

### Bug Fixes
- Local video stream keeps streaming when calling `call.stopVideo(stream)` before CONNECTED state [GH#395](https://github.com/Azure/Communication/issues/395).
- `Call.isMuted()` always returns false in `call.addOnIsMutedChangedListener()` when muted remotely by host [GH#995](https://github.com/Azure/azure-sdk-for-android/issues/995).
- Fixes crash when a CallAgentOptions was created before the CallClient object [GH#984](https://github.com/Azure/azure-sdk-for-android/issues/984).
- Fixes crash while dealing with ByteBuffers using Raw Media Access APIs.
- Event `addOnIdChangedListener` from Call is triggered correctly when Call Id changes.
- When token refresher from `CommunicationTokenRefreshOptions` returns an invalid token, `callClient.createCallAgent` throws an exception.

## v2.2.0-beta.1 (2022-05-19)
## New Features:
- Push Notifications support for stopping an incoming call because it was answered by another device, or cancelled by the caller, etc.

### Bug Fixes
- Event `addOnIdChangedListener` from `Call` is now triggered correctly when call `Id` changes.
- When token refresher from `CommunicationTokenRefreshOptions` returns an invalid token, `callClient.createCallAgent` now throws an exception.

## v2.1.0-beta.1 (2022-03-04)
## New Features:
- Dominant Speaker Feature: Dominant speakers is an extended feature that allows you to obtain a list of the active speakers in the call. The dominant speakers list can change dynamically according to the activity of the participants on the call.

### Bug Fixes
- Local video stream keeps streaming when calling `call.stopVideo(stream)` before CONNECTED state [GH#395](https://github.com/Azure/Communication/issues/395).
- `Call.isMuted()` always returns false in `call.addOnIsMutedChangedListener()` when muted remotely by host [GH#995](https://github.com/Azure/azure-sdk-for-android/issues/995).
- Fixing crash when a `CallAgentOptions` was created before the `CallClient` object [GH#984](https://github.com/Azure/azure-sdk-for-android/issues/984).
- Fixing crash while dealing with ByteBuffers using Raw Media Access APIs

## v2.0.0 (2021-12-13)
### New Features
- Extended features for Call, known as Call Features. Recording and Transcription features added to allow call recording and transcription. More information on [Record Calls](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/record-calls?pivots=platform-android#record-calls) and [Show Transcription state](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/call-transcription?pivots=platform-android).
```java
RecordingFeature callRecordingFeature = call.api(RecordingFeature.class);
boolean isRecordingActive = callRecordingFeature.isRecordingActive();
```
```java
private void handleCallOnIsRecordingChanged(PropertyChangedEvent args) {
	boolean isRecordingActive = callRecordingFeature.isRecordingActive();
}

callRecordingFeature.addOnIsRecordingActiveChangedListener(handleCallOnIsRecordingChanged);
```
```java
TranscriptionFeature callTranscriptionFeature = call.api(TranscriptionFeature.class);
boolean isTranscriptionActive = callTranscriptionFeature.isTranscriptionActive();
```
```java
private void handleCallOnIsTranscriptionChanged(PropertyChangedEvent args) {
	boolean isTranscriptionActive = callTranscriptionFeature.isTranscriptionActive();
}

callTranscriptionFeature.addOnIsTranscriptionActiveChangedListener(handleCallOnIsTranscriptionChanged);
```
- Join Teams calls either using a Teams meeting link or using Teams meeting coordinates.
- Added support for specifying emergency country code when creating `CallAgent` by setting the property `emergencyCountryCode` in `CallAgentOptions`.

### Bug Fixes

- Fixed answering an incoming call that has already been answered or declined on another device by throwing an exception.
- Fix a memory leak when disposing VideoStreamRendererView. [GH#224](https://github.com/Azure/Communication/issues/224).
- Fix for crash when user inputs an invalid teams meeting link. [GH#198](https://github.com/Azure/Communication/issues/198).
- Fix for CallAgent and CallClient dispose methods takes too long to execute. [GH#358](https://github.com/Azure/Communication/issues/358) and [GH#339](https://github.com/Azure/Communication/issues/339)
- Fix recording and transcription call extended features working together. [GH#383](https://github.com/Azure/Communication/issues/383).
- Fix for a crash while adding a participant to an unconnected call. Now it throws an IllegalStateException
- Fix for ANR on hangup(). [GH#390](https://github.com/Azure/Communication/issues/390).
- Fix for crash while calling call.AddParticipant().
- Fix for event OnParticipantsUpdated event not firing in some ocassions during call.AddParticipant().

### Breaking Changes

- The properties `isRecordingActive`, `isTranscriptionActive` and the events `addOnIsRecordingActiveChangedListener`, `addOnIsTranscriptionActiveChangedListener` are removed from the Call class. Please use the call extended features. More information on [Record Calls](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/record-calls?pivots=platform-android#record-calls) and [Show Transcription state](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/call-transcription?pivots=platform-android).

## v2.0.0-beta.1 (2021-12-06)
## New Features:
- The properties `isRecordingActive`, `isTranscriptionActive` and the events `addOnIsRecordingActiveChangedListener`, `addOnIsTranscriptionActiveChangedListener` are removed from the Call class. Please use the call extended features. More information on [Record Calls](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/record-calls?pivots=platform-android#record-calls) and [Show Transcription state](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/call-transcription?pivots=platform-android).
- Added support for specifying emergency country code when creating `CallAgent` by setting the property `emergencyCountryCode` in `CallAgentOptions`.

## v1.3.0-beta.1 (2021-11-15)
## New Features:
1. The call extended features now are accessed but the `feature()` method call instead of the `api()` like previous versions. Also, you can leverage the class `com.azure.android.communication.calling.Features` to obtain the list of available features like `Features.RECORDING` and `Features.TRANSCRIPTION`. Classes `RecordingFeature` and `TranscriptionFeature` have been renamed to `RecordingCallFeature` and `TranscriptionCallFeature`. More information on [Record Calls](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/record-calls?pivots=platform-android#record-calls) and [Show Transcription state](https://docs.microsoft.com/en-us/azure/communication-services/how-tos/calling-sdk/call-transcription?pivots=platform-android).
2. Raw Media Access for Android applications.

## Bug fixes
- Fix a memory leak when disposing VideoStreamRendererView. [GH#224](https://github.com/Azure/Communication/issues/224).
- Fix for crash when user inputs an invalid teams meeting link. [GH#198](https://github.com/Azure/Communication/issues/198).
- Fix for CallAgent and CallClient dispose methods takes too long to execute. [GH#358](https://github.com/Azure/Communication/issues/358) and [GH#339](https://github.com/Azure/Communication/issues/339)
- Fix recording and transcription call extended features working together. [GH#383](https://github.com/Azure/Communication/issues/383).
- Fix for a crash while adding a participant to an unconnected call. Now it throws an IllegalStateException
- Fix for ANR on hangup(). [GH#390](https://github.com/Azure/Communication/issues/390).
- Fix for crash while calling call.AddParticipant().
- Fix for event OnParticipantsUpdated event not firing in some ocassions during call.AddParticipant().


## v1.2.1-beta.1 (2021-09-14)

## Bug fixes
- Fixed answering an incoming call that has already been answered or declined on another device by throwing an exception.

## v1.2.0 (2021-08-11)
## New Features:
1. The properties `isRecordingActive`, `isTranscriptionActive` and the events `addOnIsRecordingActiveChangedListener`, `addOnIsTranscriptionActiveChangedListener` from the Call class are marked as **DEPRECATED** and will be removed from future releases.

## Bug fixes
- Joining a Teams call with an empty AudioOptions produces a crash. i.e using setAudioOptions(new AudioOptions()); in JoinCallOptions GH#340.
- Fix for hangUp() while joining a Teams call and waiting in the lobby GH#333.
- Fix for receiving push notifications on multiple devices.
- Fixed `java.lang.StackOverflowError` crash on [GH#346](https://github.com/Azure/Communication/issues/346).
- Improved memory footprint.

## v1.2.0-beta.2 (2021-08-03)

## Bug fixes
- Fixed `java.lang.StackOverflowError` crash on [GH#346](https://github.com/Azure/Communication/issues/346).
- Fixed issue related to Call State being `NONE` instead of `DICONNECTED` when rejected from Teams meeting. [GH#318](https://github.com/Azure/Communication/issues/318)
- Improved memory footprint.

## V1.2.0-beta.1 (2021-07-20)

## New Features:

1. Extended features for Call, known as Call Features. Recording and Transcription features added to allow call recording and transcription. Refer to [Quickstart - Use the Azure Communication Services Calling SDK - An Azure Communication Services quickstart | Microsoft Docs](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/calling-client-samples?pivots=platform-android) in the Record calls and Call transcription sections.
```java
RecordingFeature callRecordingFeature = call.api(RecordingFeature.class);
boolean isRecordingActive = callRecordingFeature.isRecordingActive();
```
```java
private void handleCallOnIsRecordingChanged(PropertyChangedEvent args) {
	boolean isRecordingActive = callRecordingFeature.isRecordingActive();
}

callRecordingFeature.addOnIsRecordingActiveChangedListener(handleCallOnIsRecordingChanged);
```
```java
TranscriptionFeature callTranscriptionFeature = call.api(TranscriptionFeature.class);
boolean isTranscriptionActive = callTranscriptionFeature.isTranscriptionActive();
```
```java
private void handleCallOnIsTranscriptionChanged(PropertyChangedEvent args) {
	boolean isTranscriptionActive = callTranscriptionFeature.isTranscriptionActive();
}

callTranscriptionFeature.addOnIsTranscriptionActiveChangedListener(handleCallOnIsTranscriptionChanged);
```
2. The properties `isRecordingActive`, `isTranscriptionActive` and the events `addOnIsRecordingActiveChangedListener`, `addOnIsTranscriptionActiveChangedListener` from the Call class are marked as **DEPRECATED** and will be removed from future releases.

## Bug Fixes:

- Silence suppression for Group Calls and Teams meeting interop scenarios is enabled.
- LocalVideoStream.switchSource(VideoDeviceInfo) will throw a `CallingCommunicationException` with `CallingCommunicationErrors.LOCAL_VIDEO_STREAM_SWITCH_SOURCE_FAILURE` error code.
- Memory leak Renderer View for LocalVideoStream [GH#224](https://github.com/Azure/Communication/issues/224).
- Joining a Teams call with an empty AudioOptions produces a crash. i.e using `setAudioOptions(new AudioOptions());` in `JoinCallOptions` [GH#340](https://github.com/Azure/Communication/issues/340).
- Fix for hangUp() while joining a Teams call and waiting in the lobby [GH#333](https://github.com/Azure/Communication/issues/333).
- Fix for receiving push notifications on multiple devices.

## v1.1.0 (2021-06-29)

## New Features:
1. Ability to dispose of CallAgent and CallAgent using the new `dispose()` method to reduce the memory footprint of the app
Example:
```java
CallClient cc = new CallClient();
DeviceManager dm = cc.getDeviceManager(Context).get();
CallAgent ca = cc.createCallAgent(Context, CommunicationTokenCredential, CallAgentOptions).get();
// Start/Join/Accept calls

// Dispose of the CallAgent and CallClient
ca.dispose();
cc.dispose();
```

## Bug fixes
- Silence suppression for Group Calls and Teams meeting interop scenarios is enabled.
- LocalVideoStream.switchSource(VideoDeviceInfo) will throw a `CallingCommunicationException` with `CallingCommunicationErrors.LOCAL_VIDEO_STREAM_SWITCH_SOURCE_FAILURE` error code.
- Attempt to create multiple CallAgent using the same identity will throw a `CallingCommunicationException` with `CallingCommunicationErrors.NO_MULTIPLE_CONNECTIONS_WITH_SAME_IDENTITY` error code.
- Turning the local video off/on quickly shows a blank local video [GH#225](https://github.com/Azure/Communication/issues/225).
- Memory leak Renderer View for LocalVideoStream [GH#224](https://github.com/Azure/Communication/issues/224).
- Support for API level 30 (Android 11.0).

## v1.1.0-beta.1 (2021-06-03)

## New Features:
1. Ability to dispose of CallAgent and CallAgent using the new `dispose()` method to reduce the memory footprint of the app
Example:
```java
CallClient cc = new CallClient();
DeviceManager dm = cc.getDeviceManager(Context).get();
CallAgent ca = cc.createCallAgent(Context, CommunicationTokenCredential, CallAgentOptions).get();
// Start/Join/Accept calls

// Dispose of the CallAgent and CallClient
ca.dispose();
cc.dispose();
```

2. `CallInfo` class has a new method called `getServerCallId()` to retrieve the immutable Id of a call that can be used for call recording
Example:
```java
String serverCallId = call.getInfo().getServerCallId();
call.addOnIsRecordingActiveChangedListener(new PropertyChangedListener() {
    public void onPropertyChanged(PropertyChangedEvent args) {
        if (call.isRecordingActive()) {
           // Add logic to update UI with visual cue regarding active recording of the call
        }
    }
});

// Upcoming Recording feature
StartCallRecording(serverCallId);
```

## Bug fixes
- Attempt to create multiple CallAgent using the same identity will throw a `CallingCommunicationException` with `CallingCommunicationErrors.NO_MULTIPLE_CONNECTIONS_WITH_SAME_IDENTITY` error code
- Turning the local video off/on quickly shows a blank local video [GH#225](https://github.com/Azure/Communication/issues/225)
- Support for API level 30 (Android 11.0)

## v1.0.1-beta.1 (2021-04-29)

## New Features:
1. Teams meeting interop features post GA release are included in this release and is currently in `Preview` mode.

## Breaking API changes
1. Teams interop and all other preview APIs are no longer available in the mainstream SDK drop. Please use libraries marked with the -beta suffix for these features.

## v1.0.0 (2021-04-27)

We have releases our first General Availability (GA) SDK, v1.0.0
APIs for preview features, such as Teams Interop, will only be available in the new libraries marked with the -beta suffix.
GA and Preview SDK(s) will both be available through maven central as per usual.

## New Features:
1. Teams meeting interop features have been removed and will NOT be available from the official drop as this capability is currently in `Preview` mode.
2. Gson is a transitive dependency and is not needed to be pulled in separately.
4. VideoStreamRenderer.createView() will use ScalingMode.CROP by default.

## Bug fixes
- Teams interop and all other preview APIs are no longer available in the mainstream SDK drop. Please use libraries marked with the -beta suffix for these features.
- CallEndReason is correctly populated upon Call termination.

## Breaking API changes
1. Teams interop and all other preview APIs are no longer available in the mainstream SDK drop. Please use libraries marked with the -beta suffix for these features.

## v1.0.0-beta.10 (2021-04-12)

## New Features:
1. DeviceManager obtention is decoupled from CallAgent creation allowing one to now do:
```
CallClient cc = new CallClient();
DeviceManager dm = cc.getDeviceManager(Context).get();
CallAgent ca = cc.createCallAgent(Context, CommunicationTokenCredential, CallAgentOptions);
```
2. OnIsMuted event is added to the Call class. Event will be triggered when the call is locally or remotely muted
Below is a usage example:

```java
// Assuming you have a "call" instance 
call.addOnIsMutedChangedListener(new PropertyChangedListener() {
    void onPropertyChanged(PropertyChangedEvent args) {
        Log.i(TAG, "Call ID[" + call.getId() + "] has " + (call.isMuted() ? "" : "NOT ") + "been MUTED");
    }
});
```


## Bug fixes
- SDK Crash when another guest user joins a Teams meeting with Video on. [#218](https://github.com/Azure/Communication/issues/218)
- OnRemoteParticipantsUpdated event updates the participant state to `Idle` when the participant is InLobby· [#221](https://github.com/Azure/Communication/issues/221)
- Speaking Change Listeners were triggered unexpectedly. [#234](https://github.com/Azure/Communication/issues/234)
- The video stream of remote participants from web client is not centred/cropped on Android. [#181](https://github.com/Azure/Communication/issues/181) and [#233](https://github.com/Azure/Communication/issues/233)
- Turning the local video off/on quickly shows a blank local video. [#225](https://github.com/Azure/Communication/issues/225)
- Answering an incoming with Video not rendering for local participant.
- Call.AddParticipant(...) failure with NullPointerException
- Permission checks of SDK APIs have been fixed to respect only required permission

## Breaking API changes
1. Task 2406220: [CommonLayer] Block CallAgent creation with same user
3. Multiple classes properties/methods renamed:
- Call class:
Method `getCallDirection()` was renamed `getDirection()`
Method `isMicrophoneMuted()` was renamed `isMuted()`
Method `startVideo(LocalVideoStream)` now takes an additional context object for permission check and is now `startVideo(Context, LocalVideoStream)`
Method `stopVideo(LocalVideoStream)` now takes an additional context object for permission check and is now `stopVideo(Context, LocalVideoStream)`
Method `mute()` now takes an additional context object for permission check and is now `mute(Context)`
Method `unmute()` now takes an additional context object for permission check and is now `unmute(Context)`

- VideoOptions:
`LocalVideoStream` property is now `LocalVideoStreams` making it an array.
The constructor now takes an array of LocalVideoStream as parameter: `VideoOptions(LocalVideoStream[] localVideoStreams)
Method `getLocalVideoStream()` is now `getLocalVideoStreams()` and returns an array of LocalVideoStream

- RenderingOptions has been renamed CreateViewOptions.

## v1.0.0-beta.9 (2021-03-16)

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

## v1.0.0-beta.8 (2021-02-19)

## Bug fixes
1. Holding strong references on Objects with events (Call, CallAgent, DeviceManager, RemoteParticipant, RemoteVideoStream) not necessary for events to be triggered anymore


## Breaking API changes
1. The package namespace has been changed from `com.azure.communication.calling` to `com.azure.android.communication.calling`.

2. Asynchronous operations are handled using `CompletableFuture` instead of `Future`.
As the ACS Calling SDK targets Android SDK level 21, we leverage the android-retrofuture backport to make CompletableFuture available in the SDK.
Make sure to use the "import java9.util.concurrent.CompletableFuture;" in your app.

3. Multiple classes/enums properties/methods renamed:
- Call class:
Method `getCallId()` on Call is now `getId()`
- RemoteParticipant class:
RemoteParticipant.OnParticipantStateChanged event changed to `RemoteParticipant.OnStateChanged`
- RemoteVideoStream class:
Method `getType()` is now `getMediasStreamType()`
- CallState Enum:
Hold state was splitted into `LocalHold` and `RemoteHold`
- ParticipantState Enum:
OnHold is now `Hold`
New State `Ringing` was added

- DeviceManager class:
Method `GetCameraList()` is not `GetCameras()`
Event `OnVideoDevicesUpdated` is not `OnCamerasUpdated`

Method `GetMicrophoneList()` is not `GetMicrophones()`
Event `OnVideoDevicesUpdated` is not `OnMicrophonesUpdated`

Method `GetSpeakerList()` is not `GetSpeakers()`
Event `OnVideoDevicesUpdated` is not `OnSpeakersUpdated`

4. Boolean getters prefix changed from get[Property] to is[Property]
For instance:
- `RemoteParticipant.getIsMuted()` is not `RemoteParticipant.isMuted()`
- `RemoteParticipant.getIsSpeaking()` is not `RemoteParticipant.isSpeaking()`

5. Incoming Call restructured:
- A new class called `IncomingCall` was introduced to handle an incoming call flow.
Methods `accept()` and `reject()` were moved to IncomingCall to reflect the change.
A new event was added to `CallAgent` and is raised when there is an incoming call.

Below is a usage example:


```java
// Assuming "callAgent" is an instance property obtained by calling the 'createCallAgent' method on CallClient instance 
callAgent.addOnIncomingCallListener(new IncomingCallListener() {
    void onIncomingCall(IncomingCall inboundCall) {
        // Look for incoming call
        incomingCall = inboundCall;

        AcceptCallOptions acceptCallOptions = new AcceptCallOptions();
        VideoDeviceInfo desiredCamera = callClient.getDeviceManager().get().getCameraList().get(0);
        acceptCallOptions.setVideoOptions(new VideoOptions(new LocalVideoStream(desiredCamera, appContext)));
        Call call = incomingCall.accept(context, acceptCallOptions).get();
    }
});
```

## v1.0.0-beta.7 (2021-02-01)
The v1.0.0-beta.7 release is basically the same as v1.0.0-beta.6 with the below fix to Teams meeting join scenario.

## Bug fixes
1. Fix crash with ACS and Teams meeting join scenario.

## v1.0.0-beta.6 (2021-02-01)

## New Features:
1. Teams meetings interop Added.<br />
New types `GroupCallLocator`, `TeamsMeetingCoordinatesLocator`, `TeamsMeetingLinkLocator` introduced to support the interop scenarios.
2. Ability to know whether a Call is currently being recorded<br />
Call.getIsRecordingActive() returns boolean indicates wherther the call is being recorded or not.<br />
Event `OnIsRecordingActiveChanged` is used to indicates when a recording has been started or stopped.

### Usage example with `GroupCallLocator`
```java
    CallAgentOptions callAgentOptions = new CallAgentOptions();
    callAgentOptions.setDisplayName("My Custom Display name");
    CommunicationTokenCredential tokenCredential = new CommunicationTokenCredential("<USER ACCESS TOKEN>");
    CallAgent callAgent = callClient.createCallAgent(tokenCredential, callAgentOptions);

    android.content.context appContext = this.getApplicationContext(); // From within an activity or fragment
    java.util.UUID groupCallId = java.util.UUID.fromString(<GROUP CALL ID>);
    GroupCallLocator groupCallLocaltor = new GroupCallLocator(groupCallId);

    Call call = callClient.join(appContext, groupCallLocaltor, joinCallOptions);
```

### Usage example with `TeamsMeetingLinkLocator`
```java
    CallAgentOptions callAgentOptions = new CallAgentOptions();
    callAgentOptions.setDisplayName("My Custom Display name");
    CommunicationTokenCredential tokenCredential = new CommunicationTokenCredential("<USER ACCESS TOKEN>");
    CallAgent callAgent = callClient.createCallAgent(tokenCredential, callAgentOptions);

    android.content.context appContext = this.getApplicationContext(); // From within an activity or fragment
    string meetingLink = <TEAMS MEETINK LINK>;
    TeamsMeetingLinkLocator teamsMeetingLinkLocator = new TeamsMeetingLinkLocator(meetingLink);

    Call call = callClient.join(appContext, teamsMeetingLinkLocator, joinCallOptions);
```

### Usage example with `TeamsMeetingCoordinatesLocator`
```java
    CallAgentOptions callAgentOptions = new CallAgentOptions();
    callAgentOptions.setDisplayName("My Custom Display name");
    CommunicationTokenCredential tokenCredential = new CommunicationTokenCredential("<USER ACCESS TOKEN>");
    CallAgent callAgent = callClient.createCallAgent(tokenCredential, callAgentOptions);

    android.content.context appContext = this.getApplicationContext(); // From within an activity or fragment
    string threadId = <TEAMS THREAD ID>;
    java.util.UUID organizerId = java.util.UUID.fromString(<TEAMS ORGANIZER ID>);
    java.util.UUID tenantId = java.util.UUID.fromString(<TEAMS TENANT ID>);
    string messageId = <TEAMS MESSAGFE ID>;
    TeamsMeetingCoordinatesLocator teamsMeetingCoordinatesLinkLocator = new TeamsMeetingCoordinatesLocator(meetingLink);

    Call call = callClient.join(appContext, teamsMeetingCoordinatesLinkLocator, joinCallOptions);
```

2. Cleanup logs from console, logs are stored in a the file instead

## Bug fixes
1. Rotating device stops sending frames for LocalVideoStream.
2. LocalVideoStream doesn't start properly if re-used between different calls.
3. Releasing LocalVideoStream occasionally crashing on some devices (Samsung).
4. Allow LocalVideoStream to be reused in multiple calls.
5. Renderer.createView() fails to CreateBinding sometimes.
6. Fix pointer corruption issue happening when we create VideoOptions will null LocalVideoStream
4. Holding strong references on Objects with events (Call, CallAgent, DeviceManager, RemoteParticipant, RemoteVideoStream) not necessary for events to fire anymore


## Breaking API changes
Renamed `CommunicationUserCredential` to `CommunicationTokenCredential`
`RemoteParticipant` identifiers renamed:
- `PhoneNumber` to `PhoneNumberIdentifier`
- `CommunicationUser` to `CommunicationUserIdentifier`
- `CallingApplication` to `CallingApplicationIdentifier`

New `MicrosoftTeamsUserIdentifier` Added to support Teams interop scenarios

`CallAgent.join` API has been changed to support Teams interoperability<br />
`join(android.content.Context context, GroupCallContext groupCallContext, JoinCallOptions joinCallOptions)`<br />
is now:<br />
`join(android.content.Context context, AbstractJoinMeetingLocator meetingLocator, JoinCallOptions joinCallOptions)`<br />

With new types `GroupCallLocator`, `TeamsMeetingCoordinatesLocator`, `TeamsMeetingLinkLocator` being subclasses of `AbstractJoinMeetingLocator` that can be used for the various scenarios.


## v1.0.0-beta.5 (2020-12-17)

## New Features
1. Support for armeabi-v7a and x86 ABI
2. Ability to set Caller display name when initializing the SDK

### Usage example
```java
CommunicationUserCredential communicationUserCredential = new CommunicationUserCredential(<USER ACCESS TOKEN>);
CallClient callClient = new CallClient(); 
CallAgentOptions callAgentOptions = new CallAgentOptions();
callAgentOptions.setDisplayName("Alice display name");
Context appContext = this.getApplicationContext(); // From within an Activity class
CallAgent callAgent = callClient.createCallAgent(appContext, communicationUserCredential, callAgentOptions)
```

## Bug fixes
1. Handle push notification payload on CallAgent throwing an exception

## v1.0.0-beta.4 (2020-11-23)

### Bug Fixes
* **[Fix]** Calling SDK was raising RemoteVideoStream removed event when app stopped rendering it. SDK now raises a follow-up RemoteVideoStream added event once the stream is ready to be rendered again. (#95).

## v1.0.0-beta.3 (2020-11-18)

### Bug Fixes
* **[Fix]** Call.hangup() method will return only after all necessary events are delivered to the app
* **[Fix]** Call.hangup() now terminates call if the call is in Connecting or Ringing state
* **[Fix]** Calling SDK was raising RemoteVideoStream removed event when app stopped rendering it. SDK now raises a follow-up RemoteVideoStream added event once the stream is ready to be rendered again.

## v1.0.0-beta.2 (2020-10-06)

## Bug fixes

* **[Fix]** Fix handing of invalid Push Notification tokens
* **[Fix]** IsMutedUpdated\IsSpeakingUpdated events are now available
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
The SDK is packaged as FAT SDK artifact with ABIs (arm64-v8a, x86_64) supported on the Android platform.
<br/>Please refer to the [Microsoft docs](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/getting-started-with-calling?pivots=platform-android) of how to bootstrap a Calling sample application on android.

### Limitations
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. PSTN functionality is available under private preview; follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates
* The PSTN and VOIP access token scopes are currently not enforced. All-access tokens implicitly authorize users to access VOIP and PSTN calling functionality until further notice.  
*  We don't support x86 simulators, arm7 support is coming soon
