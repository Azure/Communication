This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.0-beta.5
# Bug fixes
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

# Breaking API Changes
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
