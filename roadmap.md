# Roadmap and current public preview features

This feature list is a peek into our quarterly roadmap. <!--, and clones [our GitHub project](https://github.com/Azure/Communication/projects/1) --> 

It identifies some of the significant features we are currently working on and plan to release this quarter. <!--a rough timeframe for when you can expect to see them.--> It is not comprehensive but is intended to provide some visibility into key investments.

These features are the current plans for the stated quarter at this time and are subject to change. The **Area** column reflects the area of the product the feature aligns with most, and **Release**  indicates if the feature will be in public preview or generally available, and **Status** indicates where we are in the development cycle. <!-- Links are provided to Azure DevOps (ADO) tracking that is used internally by Microsoft.-->


## CY2024 Q4
September - December 2024

| Area                | Release Type    | Status       | Feature                          | Description                                                                 |
|---------------------|-----------------|--------------|----------------------------------|-----------------------------------------------------------------------------|
| Call Automation     | GA              | Launched     | Call Automation Events           | Support additional events for better programmability in Call Automation.    |
| Call Automation     | GA              | Launched     | Rooms Call Programmability       | Enable server programmability for Rooms calls in real time.                 |
| Call Automation     | GA              | Launched     | VoIP to PSTN Transfer            | Provide mechanism for call transfer from VoIP to PSTN.                      |
| Call Automation     | GA              | In Progress  | HADR for Call Automation         | Support HADR (High Availability Disaster Recovery) for regional failover in Call Automation AI Actions. |
| Call Automation     | Public Preview  | Launched     | Bidirectional Audio Streaming    | Enables real-time, two-way audio communication for seamless user interactions. |
| Calling             | Public Preview  | In Progress  | Call Recording Enhancements      | Ensure recordings are free of any potential clippings.                      |
| Calling             | GA              | In Progress  | Call Recording Service Enhancements to BYOS | Enable users to store call recordings in their own storage solutions.       |
| Calling             | GA              | In Progress  | Improved Availability            | Enhance availability and concurrency for enterprise-grade workloads.        |
| Calling             | Public Preview  | In Progress  | XL Participant Roster            | Graph Calling SDK supports XL participant roster notification for ISVs.     |
| Email               | Public Preview  | Launched     | Inline Image Attachments         | Support for sending emails with inline image attachments.                   |
| Email               | Public Preview  | Launched     | Multiple Email Domains           | Support for multiple email domains per ACS resource.                        |
| Email               | Public Preview  | Launched     | Custom Message-Id                | Support for customer-provided Message-Id in email headers.                  |
| Rooms               | GA              | Launched     | Call Caption GA                  | General Availability of Call Caption for all call participants and roles.   |
| Rooms               | Public Preview  | Launched     | Transcriptions in Rooms Calls    | Public Preview of transcriptions in Rooms calls.                            |
| Rooms               | GA              | Launched     | Remote Mute for VoIP             | General Availability of remote mute for VoIP participants.                  |
| SMS                 | Public Preview  | In Progress  | SMS 10 Digit Long Code           | Add support for SMS 10 Digit Long Code.                                     |
| Virtual Appointments| GA              | In Progress  | DeepVQE Noise Suppression        | Web Calling (desktop) supports DeepVQE noise suppression.                   |
| Virtual Appointments| Public Preview  | In Progress  | Background Blur on Chrome        | Web Calling supports background blur & replacement on Android Chrome.       |
| Virtual Appointments| GA              | In Progress  | 4x4 Grid Views                   | Web Calling (Desktop) supports 4x4 grid views.                              |


## CY2024 Q2
April - June 2024
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Chat | Public Preview | Launched | Data retention for chat threads | Add a retention policy on a chat thread between 30 and 90 days |
| Calling | Public Preview | Launched | Noise Suppression | Add the ability to remove background noise from your Web calls |
| Calling | GA | Launched | WebUI supports short meeting URL | Use shortened meeting URLs to join meetings |
| Calling | GA | In Progress | WebUI supports short bundled external JavaScript | Officially be able to support a build that customers can use with a <script> tag |
| Calling | GA | Launched | Web UI Client-side Click to Call | Refined components in client side Click to call developer experience |
| Calling | GA | In Progress | Web UI In call notifications | This feature provides a better way to manage and render multiple notifications |
| Calling | GA | Planned | Web UI Soft mute | Enables for users to soft mute other users while in a call. |
| Calling | GA | Planned | Web UI Breakout Rooms | Enables Azure Communicatin Services side users to use breakout rooms while in Teams Interop based calls. |
| Calling | GA | Planned | Web UI Conference Coordinates | Enables conference coordinates to be surfaced (to join meetings) for Azure Communication Services users. |
| Calling | GA | Planned | Web UI Inbound Calling | Enables developers to listen for incoming calls |
| Calling | GA | Launched | Call Diagnostics | Enables developers to quickly understand and diagnose end user facing calling issues. |
| Calling | GA | Launched | Call Diagnostics with Microsoft Copilot | Developers can use Microsoft Copilot from within Call Diagnostics to understand end user issues and resolve quickly |


## CY2024 Q1
January - March 2024
| Area    | Release        | Status  |  Feature |Description                                                |
| ------- | -------------- | ------| ----|------------------------------------------------------|
| Teams Interoperability | GA | Launched | Calling Team queue/ auto attendant | Supports Teams click to call and contact center |
| Chat | GA | Launched | Access Token - Chat | Additional token scopes for secure conversations with permissions to prevent thread deletion and additional users from joining the conversation. |
| Chat | Public Preview | Launched | Data Retention | Data retention on chat threads to enable developers to set a 90 day retention period on chat threads. |
| Rooms | Public Preview | Launched | PSTN Dial Out from Rooms | Feature will allow users to dial out to a PSTN number from a Rooms call, if the capability is enabled for the Room through configuration. |
| Rooms | Public Preview | Launched | Soft mute Calling and Rooms SDK | Soft mute capability allows a user with Presenter or Organizer to mute any other user in the call. Muted user can unmute themselves if needed. |
| Calling | GA | Launched | Access Tokens - Calling | Additional token scopes for secure conversations with permissions to prevent thread deletion and additional users from joining the conversation. |
| Calling | GA | Planned | Video Constraints | Send video constraints using native SDK |
| Calling | GA | Planned | Call Info | ACS WebJS API that returns the current state of a call |
| Email | GA |Launched | Email SMTP | SMTP Support for email communication |
| Advanced Messaging | GA | Launched | WhatsApp | Ability for companies to communicate with end users via WhatsApp |
| Virtual Appointments | GA | Planned | Phone Conf Dial-In | Users can learn conference dial-in details for Microsft Teams meetings. |
| Virtual Appointments | GA | Planned | Local Recording Notification | Notify Microsoft Teams meeting participants, when someone starts local recording. |
| Virtual Appointments | GA | Launched | Image Download | Download images psoted in Microsoft Teams meetings. |
| Virtual Appointments | GA | Planned | File Download | Download files posted in Microsoft Teams meetings. |
| Virtual Appointments | GA | Planned | Spotlight | Spotlight users in Microsoft Teams meetings via UI Library |





