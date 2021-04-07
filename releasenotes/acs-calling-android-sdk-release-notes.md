# ACS Calling Android (Java) SDK release notes

## v1.0.0-beta.9
This release notes for March 16, 2021 contains following changes for ACS Calling Android (Java) SDK.

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

## v1.0.0-beta.8

This release notes for February 19, 2021 contains following changes for ACS Calling Android (Java) SDK.

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

Belos is a usage example:


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

## v1.0.0-beta.7

This release notes for February 1, 2021 contains following changes for ACS Calling Android (Java) SDK.

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

## v1.0.0-beta.5
This release notes for December 17, 2020 contains following changes for ACS Android(Java) SDK.

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

## v1.0.0-beta.3
This release notes for November 18, 2020  contains following changes for ACS Android(Java) SDK.

### Bug Fixes
* **[Fix]** Call.hangup() method will return only after all necessary events are delivered to the app
* **[Fix]** Call.hangup() now terminates call if the call is in Connecting or Ringing state
* **[Fix]** Calling SDK was raising RemoteVideoStream removed event when app stopped rendering it. SDK now raises a follow-up RemoteVideoStream added event once the stream is ready to be rendered again.

## v1.0.0-beta.2
This release notes for October 06, 2020 contains following changes for ACS Android(Java) SDK version 1.0.0-beta.2.

## Bug fixes

* **[Fix]** Fix handing of invalid Push Notification tokens
* **[Fix]** IsMutedUpdated\IsSpeakingUpdated events are now available
* **[Fix]** Fix bug where getCallerIdentity method on CallAgent did not return caller's identifier

## v1.0.0-beta.1
## Release Notes for September 22, 2020 Android Calling SDK

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
