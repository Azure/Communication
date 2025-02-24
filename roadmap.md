# Roadmap and current public preview features

This feature list is a peek into our quarterly roadmap. <!--, and clones [our GitHub project](https://github.com/Azure/Communication/projects/1) --> 

It identifies some of the significant features we are currently working on and plan to release this quarter. <!--a rough timeframe for when you can expect to see them.--> It is not comprehensive but is intended to provide some visibility into key investments.

These features are the current plans for the stated quarter at this time and are subject to change. The **Area** column reflects the area of the product the feature aligns with most, and **Release**  indicates if the feature will be in public preview or generally available, and **Status** indicates where we are in the development cycle. <!-- Links are provided to Azure DevOps (ADO) tracking that is used internally by Microsoft.-->

## CY2025 Q2

April 2025 - June 2025
| Area   | Release        | Status      | Feature                     | Description                                                                                       |
|--------|----------------|-------------|-----------------------------|--------------------------------------------------------------------------------------------------|
| Calling | Public Preview | In Progress | Bot Media SDK for AI Voice  | Enhance real-time AI voice interactions with advanced audio and data channels, with future support for video and screensharing. |
| Calling | GA             | In Progress | 1080p Send Support          | Send video at 1080p quality for better presentations.                                                |
| Calling | GA             | In Progress | Headset Voice Isolation     | Reduce background noise for clearer audio with headset-optimized isolation.                          |
| Calling | GA             | In Progress | Remote User Facing Diagnostics | Provide diagnostics to enhance call experience.                                                      |
| Chat    | Public Preview | Planned     | Message Streaming           | The response back from a LLM is streamed word-by-word                                                |
| Rooms   | Public Preview | In progress | Collaborator Role           | Introduce a new role called Collaborator.

## CY2025 Q1

January 2025 - March 2025
| Area              | Release        | Status      | Feature                          | Description                                                                                        |
|-------------------|----------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------|
| Calling           | Public Preview | Launched    | Real Time Text (RTT)             | Transmit text in near real-time during calls for individuals with speech difficulties.             |
| Calling           | GA             | In Progress | Soft Mute PSTN Participant       | Mute remote PSTN participants' phones via APIs with a local notification.                          |
| Calling           | GA             | In Progress | Pin 2 720P Video Support         | Spotlight up to 2 incoming video streams at higher resolution.                                     |
| Email             | Public Preview | Planned     | SMTP Custom Username             | Allow shortened usernames for ACS connections, including email-ids                                 |
| Phone Numbers     | GA             | Launched    | Number Lookup API                | Validate and retrieve detailed phone number information to optimize messaging and reduce fraud     |
| Resource Provider | GA             | In progress | Japan East Region                | Add Japan East deployment to ensure 2 available regions in Southeast Asia.                         |
| Teams interop     | GA             | Launched    | Teams Recording Consent          | Provide consent for recording and transcription in Teams meetings                                  |
| Teams interop     | GA             | Launched    | Together Mode                    | Show together mode during Teams meetings                                                           |
| Teams interop     | GA             | Launched    | Control Audio/Video              | Enable or disable audio and video of attendees in Teams meetings and group calls                   |
| Teams interop     | GA             | Launched    | Native SDKs for Teams Call Queue | Place calls to Teams call queues and auto attendants using Native client SDKs                      |
| Teams Interop     | Public Preview | Launched    | Shared Line Appearance           | Allow delegates to handle calls on behalf of a user in Teams.                                      |

## CY2024 Q4
September - December 2024

| Area                | Release Type    | Status       | Feature                          | Description                                                                 |
|---------------------|-----------------|--------------|----------------------------------|-----------------------------------------------------------------------------|
| Call Automation     | GA              | Launched     | Call Automation Events           | Support additional events for better programmability in Call Automation.    |
| Call Automation     | GA              | Launched     | Rooms Call Programmability       | Enable server programmability for Rooms calls in real time.                 |
| Call Automation     | GA              | Launched     | VoIP to PSTN Transfer            | Provide mechanism for call transfer from VoIP to PSTN.                      |
| Call Automation     | GA              | In Progress  | High Availability Disaster Recovery (HADR) for Call Automation         | Support High Availability Disaster Recovery (HADR) for regional failover in Call Automation AI Actions. |
| Call Automation     | Public Preview  | Launched     | Bidirectional Audio Streaming    | Enables real-time, two-way audio communication for seamless user interactions. |
| Call Automation     | GA              | Launched     | UI Library Closed Captions       | Integrate closed captions for ACS and Teams interop calls to enhance accessibility. |
| Call Automation     | GA              | Launched     | UI Library Customization         | Customize interface colors, titles, and button layouts to match brand and workflows. |
| Calling             | GA              | Launched     | Calling & Chat SDK in Android    | Enable integration of Chat and Calling SDKs within the same Android project. |
| Calling             | GA              | Launched     | Improvements in Azure Monitor Log Latency | Reduce latency for Calling logs in Azure Monitor. |
| Calling             | Public Preview  | In Progress  | Call Recording Enhancements      | Ensure recordings are free of any potential clippings.                      |
| Calling             | GA              | Launched     | Call Recording Service Enhancements to BYOS | Enable users to store call recordings in their own storage solutions.       |
| Calling             | GA              | In Progress  | Improved Availability            | Enhance availability and concurrency for enterprise-grade workloads.        |
| Calling             | GA              | In Progress  | SIP-UUI Context Data             | Pass SIP-UUI custom context data when transferring calls.                   |
| Calling             | Public Preview  | In Progress  | XL Participant Roster            | Graph Calling SDK supports XL participant roster notification for ISVs.     |
| Email               | Public Preview  | Launched     | Custom Message-Id                | Support for customer-provided Message-Id in email headers.                  |
| Email               | Public Preview  | Launched     | Inline Image Attachments         | Support for sending emails with inline image attachments.                   |
| Email               | Public Preview  | Launched     | Multiple Email Domains           | Support for multiple email domains per Azure Communication Services resource.                        |
| Rooms               | GA              | Launched     | Call Caption GA                  | General Availability of Call Caption for all call participants and roles.   |
| Rooms               | Public Preview  | Launched     | Transcriptions in Rooms Calls    | Public Preview of transcriptions in Rooms calls.                            |
| Rooms               | GA              | Launched     | Remote Mute for VoIP             | General Availability of remote mute for VoIP participants.                  |
| SMS                 | Public Preview  | Launched     | SMS 10 Digit Long Code           | Add support for SMS 10 Digit Long Code.                                     |
| SMS                 | Public Preview  | Launched     | SMS Opt-out management API       | The Opt-Out API lets developers manage SMS opt-out preferences programmatically. |
| Teams Interoperability| GA            | In Progress  | User Naming                      | Correct naming of Azure Communication Services user in Teams using DisplayName. |
| Teams Interoperability| GA            | In Progress  | PPT Live                         | Enable PPT Live on iOS, Windows, and Android.                               |
| Teams Interoperability| GA            | Launched     | Teams Call Queues                | iOS and Android Calling SDKs can call Teams call queues and auto-attendants. |
| Virtual Appointments| GA              | In Progress  | 4x4 Grid Views                   | Web Calling (Desktop) supports 4x4 grid views.                              |
| Virtual Appointments| Public Preview  | In Progress  | Background Blur on Chrome        | Web Calling supports background blur & replacement on Android Chrome.       |
| Virtual Appointments| GA              | In Progress  | DeepVQE Noise Suppression        | Web Calling (desktop) supports DeepVQE noise suppression.                   |
| Virtual Appointments| GA              | Launched     | iOS PiP                          | Add Picture-in-Picture (PiP) support on iOS.                                |
| Virtual Appointments| GA              | Launched     | Recording Consent                | Web UI SDK components for requesting user consent of recording & transcription. |
| Virtual Appointments| GA              | Launched     | Teams Breakout Rooms             | Use Breakout Rooms in Teams Meetings.                                       |
| Virtual Appointments| Public Preview  | Launched     | Together Mode Interop            | Use Together Mode in Teams Meetings.                                        |
| Virtual Appointments| Public Preview  | In Progress  | User-Facing Diagnostics          | Native Calling SDK supports server-side user-facing diagnostics (UFD).      |
| Virtual Appointments| GA | Launched | List Townhall APIs | Retrieve a list of townhalls for the tenant and organizers/co-organizers. |








