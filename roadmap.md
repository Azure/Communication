# Roadmap and current public preview features

This feature list is a peek into our quarterly roadmap. <!--, and clones [our GitHub project](https://github.com/Azure/Communication/projects/1) --> 

It identifies some of the significant features we are currently working on and plan to release this quarter. <!--a rough timeframe for when you can expect to see them.--> It is not comprehensive but is intended to provide some visibility into key investments.

These features are the current plans for the stated quarter at this time and are subject to change. The **Area** column reflects the area of the product the feature aligns with most, and **Release**  indicates if the feature will be in public preview or generally available, and **Status** indicates where we are in the development cycle. <!-- Links are provided to Azure DevOps (ADO) tracking that is used internally by Microsoft.-->

## CY2024 Q1
January - March 2024
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Teams Interoperability | GA | Planned | Calling Team queue/ auto attendant | Supports Teams click to call and contact center |
| Chat | GA | Launched | Access Token - Chat | Additional token scopes for secure conversations with permissions to prevent thread deletion and additional users from joining the conversation. |
| Chat | Public Preview | Planned | Data Retention | Data retention on chat threads to enable developers to set a 90 day retention period on chat threads. |
| Rooms | Public Preview | Launched | PSTN Dial Out from Rooms | Feature will allow users to dial out to a PSTN number from a Rooms call, if the capability is enabled for the Room through configuration. |
| Rooms | Public Preview | Launched | Soft mute Calling and Rooms SDK | Soft mute capability allows a user with Presenter or Organizer to mute any other user in the call. Muted user can unmute themselves if needed. |
| Calling | GA | Launched | Access Tokens - Calling | Additional token scopes for secure conversations with permissions to prevent thread deletion and additional users from joining the conversation. |
| Calling | GA | Planned | Video Constraints | Send video constraints using native SDK |
| Calling | GA | Planned | Call Info | ACS WebJS API that returns the current state of a call |
| Email | GA | Planned | Email SMTP | SMTP Support for email communication |
| Advanced Messaging | GA | Planned | WhatsApp | Ability for companies to communicate with end users via WhatsApp |
| Virtual Appointments | GA | Planned | Phone Conf Dial-In | Users can learn conference dial-in details for Microsft Teams meetings. |
| Virtual Appointments | GA | Planned | Local Recording Notification | Notify Microsoft Teams meeting participants, when someone starts local recording. |
| Virtual Appointments | GA | Planned | Image Download | Download images psoted in MIcrosoft Teams meetings. |
| Virtual Appointments | GA | Planned | File Download | Download files posted in Microsoft Teams meetings. |
| Virtual Appointments | GA | Planned | Spotlight | Spotlight users in Microsoft Teams meetings via UI Library |



### CY2023 Q4
October - December 2023
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Advanced Messaging | Public Preview | Launched | WhatsApp | Adding WhatsApp as a channel to send/receive text messages |
| Email | Public Preview | Launched | SMTP Support | Send an email using SMTP endpoint |
| Chat | GA | Launched | Chat Channel for Bot Framework | Adding Azure bot to Azure Communication Services Chat Channel |
| Number Management | Public Preview | Planned | Chery Picker API | Customers can pick multiple numbers at once from online portal and SDK |
| Call Automation | GA | Launched | Advanced Actions with Azure AI Speech | Enhancing the current Call Automation play and recognize actions to support Text-to-Speech and Speech-to-Text as well as support for custom voices and custom speech models. |
| Call Automation | GA | Launched | Custom Context Support | Developers can now share custom info with agents and bots when routing calls to them; also enables support for SIP UUI and custom headers for scenarios where the call is being routed between Azure Communication Services and SIP networks using Direct Routing.  |
| Call Automation | GA | In Progress | Group Transfer | In addition to supporting blind transfers in 1:1 call, developers will now be able to transfer a user from a group call to another endpoint. |
| Call Automation | GA | In Progress | Cancel Add Participant | Have the flexibility to cancel previously initiated Add Participant requests if the call invite hasn't been accepted by the target user. |
| Call Automation | GA | In Progress | Override Callback URI | Support for overriding the original callback URI so developers can configure to receive events for a particular action to a different endpoint.  |
| Call Automation | GA | Launched | Send DTMF | Support for sending DTMF tones from a Call Automation app to 3rd Party applications/IVRs. |
| Call Automation | GA | Launched | Continuous DTMF | Call Automation will support developers using continuous DTMF subscription to receive DTMF inputs throughout the call. |
| Calling | Public Preview | Planned | Remote UFD | Calling to support the ability to see remote User Facing Diagnositcs (UFD). |
| Calling | Public Preview | Planned | Supporting on WebJ 1080P receive | WebJS calling SDK to support the ability to receive 1 1080P incoming video stream. |
| Job Router | GA | Launched | Job Router | SDKs and APIs to create, classify, enqueue and distribute Jobs (interactions) to the most suitable worker. |



