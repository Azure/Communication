# Release Notes for February 19, 2021

This release contains following changes for ACS Calling Android (Java) SDK.

## Version 1.0.0-beta.8

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
