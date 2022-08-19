# Roadmap and current public preview features

This feature list is a peek into our roadmap. <!--, and clones [our GitHub project](https://github.com/Azure/Communication/projects/1) --> 

It identifies some of the significant features we are currently working on and plan to release this quarter. <!--a rough timeframe for when you can expect to see them.--> It is not comprehensive but is intended to provide some visibility into key investments.

These features are the current plans for the stated quarter at this time and are subject to change. The **Area** column reflects the area of the product the feature aligns with most, and **Release**  indicates if the feature will be in public preview or generally available, and **Status** indicates where we are in the development cycle. <!-- Links are provided to Azure DevOps (ADO) tracking that is used internally by Microsoft.-->

### Q3 CY2022
July - September 2022
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Calling | Public Preview | Planned | Background blur | Enablement of background blur for Web SDK|
| Calling    | GA | Planned | Firefox browser support  | JavaScript Calling SDKs will support Firefox browsers on Android, macOS, Windows and Ubuntu/Linux. This will include all features and functionalities provided by the JavaScript ACS Calling SDK. |
| Calling | Public Preview | Planned | 3x3 (9) incoming videos | Support rendering up to 9 video simultaneously on ACS Calling (Web) SDK|
| Calling | Public Preview | Planned | Introducing video calling constraints | Developers can set audio and video constraints captured from a local device to better manage overall call quality. |
| Calling | Public Preview | Planned | HD (1080p) Support for JS SDK | Video calling constraints feature: Resolution
| Calling | Public Preview | Planned | Simulcast for Web WebRTC | Using Simulcast, participants clients can send multiple stream versions (different resolutions) of the same video stream. ACS infrastructure can decide which stream to send to which participant, depending on the network conditions.|
| Calling | Public Preview | Planned | API: microphone/ speaker volume indicator  | API that exposes microphone/speaker volume indicator before and during call.
| Calling | Public Preview | Planned | Pre-Call Diagnostic APIs | API to check pre-call diagnostics including connection types, devices, and more.
| Calling | Public Preview | In Progress | Publish screen sharing + one video local streams simultaneously  | Ability for users to publish both screen sharing and a local video stream simultaneously using the ACS JS web calling SDK.
| PSTN | Public Preview | In Progress | Connect incoming PSTN call to ACS users | Enable developers to connect the incoming PSTN call from the ACS Phone numbers or Direct Routing to ACS SDKs.
| PSTN | Public Preview | In Progress | PSTN/SMS cross-country offers  | US and PR customers will be able to purchase UK and CA phone numbers; IT customers will be able to purchase US, PR, CA, and UK phone lines.
