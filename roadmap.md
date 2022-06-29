# Roadmap and current public preview features

This feature list is a peek into our roadmap. <!--, and clones [our GitHub project](https://github.com/Azure/Communication/projects/1) --> 

It identifies some of the significant features we are currently working on and plan to release this quarter. <!--a rough timeframe for when you can expect to see them.--> It is not comprehensive but is intended to provide some visibility into key investments.

These features are the current plans for the stated quarter at this time and are subject to change. The **Area** column reflects the area of the product the feature aligns with most, and **State**  indicates if the feature will be in public preview or generally available. <!-- Links are provided to Azure DevOps (ADO) tracking that is used internally by Microsoft.-->

### Q2 CY2022
April - June 2022
| Area    | State          | Feature |Description                                                |
| ------- | -------------- | ----| ------------------------------------------------------|
| Calling | Public Preview | Geo Expansion | Offering numbers in the following locations: UK, Denmark, Ireland, Italy, <!-- Sweden --> and Canada  |
| Calling | Public Preview | Calling Events | Publish calling event in Azure Event Grid (call started, call ended, participant added, participant removed) | 
| Calling | Public Preview |Native Android screen share| Enable screen sharing on Andriod calling SDK using outgoing video raw media access|
| Calling    | GA |AES 256 encryption  | ACS media traffic between two endpoints participating in ACS audio, video, and application sharing, utilizes SRTP to encrypt the media stream. Cryptographic keys are negotiated between the two endpoints over a signaling protocol which uses TLS 1.2 and AES-256 (in GCM mode) encrypted UDP/TCP channel. |
| Calling | Public Preview |Android dominant speaker| Dominant speakers is an extended feature that allows you to obtain a list of the active speakers in the call. The dominant speakers list can change dynamically according to the activity of the participants on the call.|
| Calling | Public Preview | Calling client native Android SDK v2.1.0-beta | Dominant speakers is an extended feature that allows you to obtain a list of the active speakers in the call. The dominant speakers list can change dynamically according to the activity of the participants on the call. <p></p><p>Bug Fixes:</p> <div> <ul><li>Fixing crash when a CallAgentOptions was created before the CallClient object</li> <li>Fixing crash while dealing with ByteBuffers using Raw Media Access APIs</li>|
| Calling | Public Preview | Windows UWPv1.0.0-beta.31 | <li>URI for remote video streams is now retrieved by Start() instead of CreateBindingAsync()</li> <li>Removes ReleaseBinding method for RemoteVideoStream (still have to call Stop())</li><li>URI for local video streams is now retrieved by MediaUriAsync() instead of CreateBindingAsync()</li> <li>Dominant Speaker Feature: Recording and Transcription Features</li>
|Mobile/UI (iOS/Android) | GA | Custom Model Injection | The UI Library now gives developers the ability to provide a more customized experience. At launch, developers can now inject an optional Local Data Options. This object can contain a bitmap which represents the avatar to render, and a display name they can optionally display instead. This information will only be held locally in the UI library.|
|Mobile/UI (iOS/Android) | GA | Theming | The UI Library now gives developers the ability to provide the capability to customize the main colors for the calling experience. The colors are aligned to the Fluent UI principles. <li> Join Call FluentUI Button - Background - Highlighted - Light Mode - Tint10 </li><li>Join Call FluentUI Button - Background - Highlighted - Dark Mode - Tint20</li><li>	Join Call FluentUI Button - Border - Normal - Light/Dark Mode - Tint10</li><li> Join Call FluentUI Button - Border - Highlighted - Light/Dark Mode - Tint30 </li>
|Mobile/UI (iOS/Android) | GA | Localization | UI Library will provide out of the box support for some languages and capabilities such as RTL. Developers can provide their own localization files to be used for the UI Library.
|Mobile/UI (iOS/Android) | GA | Calling Composite | Calling experience that allows users to start or join a call. Inside the experience users can configure their devices, participate in the call with video, and see other participants, including those ones with video turned on. For Teams Interoperability, lobby functionality is included so users can wait to be admitted.
