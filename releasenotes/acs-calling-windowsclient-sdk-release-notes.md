# ACS Calling SDK release notes

Package location: [NuGet](https://www.nuget.org/packages/Azure.Communication.Calling.WindowsClient/)

## 1.11.1
### Bug Fixes:
  - Bug fix for PSTN mute/unmute

## 1.11.0
### New Features:
- [Real time text](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/voice-video-calling/get-started-with-real-time-text?pivots=programming-language-csharp)
- New getServerCallId() API for call recording

## v1.9.0 (2024-09-24)

### New Features:
  - Mute other participants

## v1.8.0 (2024-08-08)

### New Features:
  - Added support for `Call Survey`.
  - Added `OutgoingVideoConstraints` feature.
  - Added support for `CommunicationCaptions`.

## v1.7.0 (2024-06-05)

### New Features:
  - Added CapabilitiesCallFeature for Rooms/Teams Meeting.
  - Added TeamsMeetingIdLocator for joining Teams.

## v1.6.1 (2024-05-28)

### Bug Fixes:
  - Performance improvements.

## v1.6.0 (2024-04-10)

### New Features:
- Support Custom Teams Endpoints (CTE).

## v1.5.0 (2024-03-17)

### New Features:
- Support Proxy feature to allow users specify and use their own http proxy and media relays.
- Support Data Channel (lossy) to allow users send data to other participants in the call.
- Media Statistics for audio, video and data channel.
- Support customization for TTL persion for device token associated with push notification.
- Enable replacement for background effect.

## v1.4.0 (2024-01-12)

### New Features:
- Add Audio Filter into AudioOptions to allow configuring of settings for echo cancellation, automatic gain control, and noise suppression
- Add Teams Meeting Lobby support

### Bug Fixes
- Device Manager crash fix (random:RaiseCamerasUpdatedEvent)

## v1.3.0 (2023-11-07)

### New Features:
- Spotlight Call Feature for Teams Meetings.
- CallDebugDetails Support retrival of debug details from CallAgent.

## v1.2.0 (2023-08-11)

### New Features:
- Add Captions call feature that allows ACS users to enable Teams closed captions in Teams meeting and allows Microsoft 365 users on ACS SDK to use closed captions in one to one and group calls. Users will also have the ability to update spoken language for the call and caption language for themselves (requires Teams Premium).
- Add Log File Access feature that allows users to access the log file generated by the SDK.

## v1.0.0 (2023-05-26)

### New Features:
- Place and receive 1-1 audio/video call
- Place and receive 1-N (group) audio/video call
- Place PSTN audio/video call
- Join (1-N) group audio/video call
- Join (1-N) Teams audio/video call
- Preview local video camera
- Share local video camera stream
- Render video from participants
- List audio/video devices
- Mid-call operations (Mute/Unmute, Background blur)
- Mid-call operations (Turn Video on/Turn Video off)
- Mid-call operations (Switch between Video devices)
- Mid-call operations (Add/Remove participant to/from the ongoing audio/video call)
- Dominant Speaker Feature: Dominant speakers is an extended feature that allows you to obtain a list of the active speakers in the call. The dominant speakers list can change dynamically according to the activity of the participants on the call
