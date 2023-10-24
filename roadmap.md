# Roadmap and current public preview features

This feature list is a peek into our quarterly roadmap. <!--, and clones [our GitHub project](https://github.com/Azure/Communication/projects/1) --> 

It identifies some of the significant features we are currently working on and plan to release this quarter. <!--a rough timeframe for when you can expect to see them.--> It is not comprehensive but is intended to provide some visibility into key investments.

These features are the current plans for the stated quarter at this time and are subject to change. The **Area** column reflects the area of the product the feature aligns with most, and **Release**  indicates if the feature will be in public preview or generally available, and **Status** indicates where we are in the development cycle. <!-- Links are provided to Azure DevOps (ADO) tracking that is used internally by Microsoft.-->

### CY2023 Q4
October - December 2023
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Advanced Messaging | Public Preview | Launched | WhatsApp | Adding WhatsApp as a channel to send/receive text messages |
| Email | Public Preview | In Progress | SMTP Support | Send an email using SMTP endpoint |
| Chat | GA | Planned | Chat Channel for Bot Framework | Adding Azure bot to Azure Communication Services Chat Channel |
| Number Management | Public Preview | Planned | Chery Picker API | Customers can pick multiple numbers at once from online portal and SDK |
| Call Automation | GA | Planned | Advanced Actions with Azure AI Speech | Enhancing the current Call Automation play and recognize actions to support Text-to-Speech and Speech-to-Text as well as support for custom voices and custom speech models. |
| Call Automation | GA | Planned | Custom Context Support | Developers can now share custom info with agents and bots when routing calls to them; also enables support for SIP UUI and custom headers for scenarios where the call is being routed between Azure Communication Services and SIP networks using Direct Routing.  |
| Call Automation | GA | Planned | Group Transfer | In addition to supporting blind transfers in 1:1 call, developers will now be able to transfer a user from a group call to another endpoint. |
| Call Automation | GA | Planned | Cancel Add Participant | Have the flexibility to cancel previously initiated Add Participant requests if the call invite hasn't been accepted by the target user. |
| Call Automation | GA | Planned | Override Callback URI | Support for overriding the original callback URI so developers can configure to receive events for a particular action to a different endpoint.  |
| Call Automation | GA | Planned | Send DTMF | Support for sending DTMF tones from a Call Automation app to 3rd Party applications/IVRs. |
| Call Automation | GA | Planned | Continuous DTMF | Call Automation will support developers using continuous DTMF subscription to receive DTMF inputs throughout the call. |
| Calling | Public Preview | Planned | Remote UFD | Calling to support the ability to see remote User Facing Diagnositcs (UFD). |
| Calling | Public Preview | GA | Supporting on WebJ 1080P receive | WebJS calling SDK to support the ability to receive 1 1080P incoming video stream. |








### CY2023 Q3
July - September 2023
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Job Router | Public Preview | Launched | Job Router | SDKs and APIs to create, classify, queue and distribute Jobs (interactions) to the best suitable worker |
| SMS   | GA | Launched | Geo Expansion  | 1-way SMS using Alphanumeric Sender ID in Germany, Netherlands, United Kingdom, Australia, France, Switzerland, Sweden, Italy, Spain, Denmark, Ireland, Portugal, Poland, Austria, Lithuania, Latvia, Estonia, Norway, Finland, Slovakia, Slovenia, Czech Republic |
| Calling | Public Preview | Launched | Trial Phone Numbers | Users can get a phone number to make and receive PSTN calls, free of charge, for 30 days |
| Calling | Public Preview | In Progress | Call Recording | APIs to record Call Automation and Calling client SDK Teams interoperability (dial out) scenarios |
| Calling | Public Preview | Launched | Number Lookup | An API that allows developers to retrieve number details including number type and carrier details. |
| Calling | Public Preview | Launched | Geo Expansion | Direct Offers for Australia and Japan (Geo and TF numbers) |
| Calling | Public Preview | Launched | Geo Expansion | Direct Offers for 21 countries (Inbound TF only) |
| Calling | GA | In Progress | Geo Expansion | Direct Offers in FR, ES, CH, BE, LU, AT, PT, SK, NO, NL, DE, DK |
| Calling | Public Preview | In Progress | Cross Country Offers | Making all available offers possible to purchase from US, JP, UK, CA, DE, IT, NL, AU, FR, ES billing locations |
| Calling | GA | In Progress | Direct Routing | Improve SBC failover switching by using OPTIONS|
| Calling | GA | In Progress | Direct Routing | Try Telephony. Azure Portal allows testing of outbound and inbound telephony capabilities |
| Calling | GA | Launched | Raised hand | APIs that allow developers to empower users to raise and lower hands |
| Calling | GA | Launched | Spotlight | APIs that allow developers to control and subscribe to Spotlight participants in Microsoft Teams meetings.
| Calling | GA | In Progress | Lobby Management | APIs that allow organizers, co-organizers, and presenters to manage participants in a call lobby
| Calling | Public Preview| In Progress | Ad hoc calling in Teams Interoperability | Developers can use the calling SDKs to call federated Microsoft 365 users |
| Calling | GA | Planned | Phone conference dial in | Microsoft Teams meeting supporting conferencing can provide phone number and conference ID to join call via a phone call |
| Calling | GA | Planned | Recording notification | Recording feature supports local recording triggered by Microsoft 365 users in Teams clients. |
| Calling | GA | Launched | Capability APIs in Microsoft Teams meeting | Capability APIs that show only buttons that the user can select during a Teams meeting. |
| Calling | Public Preview | In Progress | Call Automation/Media AI | Enable AI capabilities with Text-to-Speech and Speech-to-Text using Azure Cognitive Services |
| Calling | Public Preview | Launched | DTMF Enhancements | Developers can Send DTMF tones to external participants or  choose to continuously receive DTMF tones from call participants. |
| Calling | GA | Launched | Closed Captions | Closed captions capabilities for participants during Teams interoperability scenarios on web and native platforms. |


