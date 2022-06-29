# ACS Calling Windows SDK - Release history 

## v1.0.0-beta.32 (2022-04-16)
* Add ability to join Teams User 
* Various bug fixes

## v1.0.0-beta.31 (2022-03-01)
*	URI for remote video streams is now retrieved by Start() instead of CreateBindingAsync()
*	Removes ReleaseBinding method for RemoteVideoStream (still have to call Stop())
*	URI for local video streams is now retrieved by MediaUriAsync() instead of CreateBindingAsync()
* Dominant Speaker Feature
* Recording and Transcription Features 
* Various bug fixes

## v1.0.0-beta.28 (2021-05-26)
[NuGet Gallery | Azure.Communication.Calling 1.0.0-beta.28](https://www.nuget.org/packages/Azure.Communication.Calling). 

Resolves HangUp bug.



## v1.0.0-beta.1 (2021-05-12)

This is the initial release of Azure Communication Services Windows Calling SDK is for public preview.


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
The SDK is released for the following silicon architectures: x86_64, x86 and arm64-v8a.
### Limitations
* Outgoing screen sharing is not supported
* While the ability to make PSTN calls is available in the SDK, you need a PSTN number in ACS to make the call. Follow this [document](https://docs.microsoft.com/azure/communication-services/quickstarts/telephony-sms/get-phone-number) for availability updates

