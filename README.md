# Azure Communication Services (ACS)

[Azure Communication Services](https://docs.microsoft.com/azure/communication-services/overview) are cloud-based services with REST APIs and client library SDKs to help you integrate communication into your applications. You can add communication features to your applications without being an expert in communication technologies such as media encoding and real-time networking. 

## What can you find here?

- *SDKs* - Links to client libraries
- *Release Notes* - [Collated release notes](https://github.com/Azure/Communication/tree/master/releasenotes) for the service and SDKs
- [*Roadmap*](https://github.com/Azure/Communication/projects/1) - Priorities for current and future service development
- [*Awesome List*](https://github.com/Azure/Communication/blob/master/Awesome.md) - External GitHub projects interesting to Azure Communication Services developers

This repo is not open to contributions, though many of the linked SDKs are open-source and allow contributions. Documentation and other resources for developers are indexed below.

| Topic            | Channel                             |
|------------------|------------------------------|
|Concepts & Quickstarts | [Docs](https://docs.microsoft.com/azure/communication-services/overview) 
|Samples | [Azure Sample Index](https://docs.microsoft.com/en-us/samples/browse/?expanded=azure&products=azure-communication-services) or [GitHub](https://github.com/orgs/Azure-Samples/repositories?language=&q=communication&sort=&type=) 
| Feature Requests | [Ideas](https://feedback.azure.com/d365community/forum/81ff6d2b-0c25-ec11-b6e6-000d3a4f0858)                     |
| Questions & Bugs | [Q&A](https://docs.microsoft.com/answers/topics/azure-communication-services.html) or [Azure Support](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) |

## ❤️ Feedback

We appreciate your feedback and energy helping us improve our services. [If you've tried the service, please give us feedback through this survey](https://microsoft.qualtrics.com/jfe/form/SV_8JvVZVwalMj3xpY). 

If you'd like to submit feature requests please submit them to our [board on Azure Feedback](https://feedback.azure.com/d365community/forum/81ff6d2b-0c25-ec11-b6e6-000d3a4f0858).

## SDKs

Azure Communication Services is conceptually organized into nine areas. Most areas have fully open-sourced SDKs programmed against published REST APIs that you can use directly over the Internet. Development of Web Calling and Chat client applications can be accelerated by [Azure Communication Services UI libraries](https://azure.github.io/communication-ui-library). The UI library provides production-ready UI components that you can drop into your applications.

Communication Services APIs are documented alongside other Azure REST APIs in [docs.microsoft.com](https://docs.microsoft.com/rest/api/communication/). This documentation will tell you how to structure your HTTP messages and offers guidance for using Postman. REST interface documentation is also offered in Swagger format on [GitHub](https://github.com/Azure/azure-rest-api-specs).

| Assembly               | Capabilities                                                    |
|------------------------|-----------------------------------------------------------------|
| Azure Resource Manager | Provision and manage Communication Services resources           |
| Calling                | Voice, video, screen-sharing, and other real-time communication |
| Calling Server         | Make and manage calls, play audio, and configure recording      |
| Chat                   | Add real-time text based chat to your applications              |
| Common                 | Provides base types for other SDKs                              |
| Email                  | Facilitates high volume transactional, and enable Application-to-Person (A2P) use cases               |
| Identity               | Manage users, access tokens                                     |
| Phone numbers          | Acquire and manage phone numbers                                |
| SMS                    | Send and receive SMS messages                                   |
| Network Traversal      | Access TURN servers for low-level data transport                |
| UI Library             | Production-ready UI components for chat and calling apps        |

### Languages and publishing locations

Publishing locations for individual SDK packages are detailed below.

| Area | JavaScript | .NET | Python | Java SE | iOS | Android | Other|
| -------------- | ---------- | ---- | ------ | ---- | -------------- | -------------- | ------------------------------ |
| Azure Resource Manager | [npm](https://www.npmjs.com/package/@azure/arm-communication) | [NuGet](https://www.nuget.org/packages/Azure.ResourceManager.Communication) | [PyPi](https://pypi.org/project/azure-mgmt-communication/) | [Maven](https://search.maven.org/search?q=azure-resourcemanager-communication)  | - | - | [Go via GitHub](https://github.com/Azure/azure-sdk-for-go/releases/tag/v52.5.0) |
| Common | [npm](https://www.npmjs.com/package/@azure/communication-common) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Common/)| N/A| [Maven](https://search.maven.org/search?q=a:azure-communication-common) | [GitHub](https://github.com/Azure/azure-sdk-for-ios/releases)| [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-common) | -|
| Identity | [npm](https://www.npmjs.com/package/@azure/communication-identity) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Identity)| [PyPi](https://pypi.org/project/azure-communication-identity/)| [Maven](https://search.maven.org/search?q=a:azure-communication-identity) | -| -| -|
| Phone Numbers | [npm](https://www.npmjs.com/package/@azure/communication-phone-numbers) | [NuGet](https://www.nuget.org/packages/Azure.Communication.PhoneNumbers)| [PyPi](https://pypi.org/project/azure-communication-phonenumbers/)| [Maven](https://search.maven.org/search?q=a:azure-communication-phonenumbers) | -| -| -|
| Chat | [npm](https://www.npmjs.com/package/@azure/communication-chat)| [NuGet](https://www.nuget.org/packages/Azure.Communication.Chat) | [PyPi](https://pypi.org/project/azure-communication-chat/) | [Maven](https://search.maven.org/search?q=a:azure-communication-chat) | [GitHub](https://github.com/Azure/azure-sdk-for-ios/releases)| [Maven](https://search.maven.org/search?q=a:azure-communication-chat) | -|
| SMS| [npm](https://www.npmjs.com/package/@azure/communication-sms) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Sms)| [PyPi](https://pypi.org/project/azure-communication-sms/) | [Maven](https://search.maven.org/artifact/com.azure/azure-communication-sms) | -| -| -|
| Calling| [npm](https://www.npmjs.com/package/@azure/communication-calling) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Calling) | -| - | [GitHub](https://github.com/Azure/Communication/releases) | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling/)| -|
|Call Automation||[nuget](https://www.nuget.org/packages/Azure.Communication.CallingServer/)||[Maven](https://search.maven.org/artifact/com.azure/azure-communication-callingserver)
|Email | [npm](https://www.npmjs.com/package/@azure/communication-email) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Email) | - | - | - | - | - |
|Network Traversal| [npm](https://www.npmjs.com/package/@azure/communication-network-traversal)|[nuget](https://www.nuget.org/packages/Azure.Communication.NetworkTraversal/) |  [PyPi](https://pypi.org/project/azure-communication-networktraversal/)| [Maven](https://search.maven.org/search?q=a:azure-communication-networktraversal) | - | - | 
| UI Library| [npm](https://www.npmjs.com/package/@azure/communication-react) | - | - | - | [GitHub](https://github.com/Azure/communication-ui-library-ios) | [GitHub](https://github.com/Azure/communication-ui-library-android) | [GitHub](https://github.com/Azure/communication-ui-library), [Storybook](https://azure.github.io/communication-ui-library/?path=/story/overview--page) |
| Reference Documentation | [docs](https://azure.github.io/azure-sdk-for-js/communication.html) | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)| -| [docs](http://azure.github.io/azure-sdk-for-java/communication.html) | [docs](/objectivec/communication-services/calling/)| [docs](/java/api/com.azure.android.communication.calling)| -|

## Release Notes

Release notes are available directly in the publishing location (e.g. nuget) for SDKs. However every two weeks we aggregate release notes including services changes (e.g. new Azure Portal pages) in [this repo](https://github.com/Azure/Communication/tree/master/releasenotes/release_note_summary.md).

- [06/28/2022 - 07/11/2022](releasenotes/2022-07-11.md) -  **The Calling team** releases a ***new JS beta package*** with audio media access to enable developers to access the incoming call audio stream and send custom outgoing audio stream during the call. **Phone numbers team** release a ***new JS beta package*** with cshnges on the API objects.
- [06/14/2022 - 06/27/2022](releasenotes/2022-06-27.md) - **ACS Mobile UI Library GA** Azure Communication Services proudly announce the General Availability of the Mobile UI Library for iOS & Android. The UI Library introduces the calling composite, that can be used to build visual communication experiences out of the box. The composite is a turn-key experience for common communication scenarios that have been built using base components as building blocks and packaged to be easily integrated into native mobile applications.
- [05/31/2022 - 06/13/2022](releasenotes/2022-06-13.md) - **The Calling team** releases a ***new Android Beta version*** using Raw media access. Also, ***JS, Android & iOS GA version***, now supports **Azure Communication Services for Government** and a hold feature when the user is on an ACS call, and there is an interruption, audio and video shall auto recover on most of the cases. In some edge cases, to unmute, an API to 'unmute' must be called by the application (can be as a result of user action) to recover the outgoing audio. **The UI Library** releases a final release candidate version of the ***Mobile libraries for iOS and Android***, with the Call On Hold feature that allows the users to put the current ACS call and answer incoming calls and tablet & iPad layouts.
- [05/17/2022 - 05/31/2022](releasenotes/2022-05-31.md) - **Email** releases a public beta version of ***.NET*** & ***JS*** libraries, *Email* APIs to enable Application-to-Person (A2P) communication. To learn more please read [Email overview](https://docs.microsoft.com/azure/communication-services/concepts/email/email-overview). **UI Library** releases a new public beta version of the mobile libraries ***iOS*** & ***Android***, introducing the calling composite renaming package and extra functionalities.
- [05/03/2022 - 05/16/2022](releasenotes/2022-05-16.md) - **Calling** releases a new ***Android Beta version***, adding ***Push Notifications support*** for stopping an incoming call because it was answered by another device, or canceled by the caller, etc. **Chat** releases an ***iOS stable version***, adding two new events `realTimeNotificationConnected` and `realTimeNotificationDisconnected` which allow the developer to know when the connection to the real time notification server is active.

In many cases we maintain a perpetual changelog at a library level which is linked below.

| **Area**| **JavaScript** | **.NET** | **Python**  | **Java SE** | **iOS** | **Android**| **Other** |
|--|--|---|---|---|-|--|-|
| Azure Resource Manager | | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.ResourceManager.Communication/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-mgmt-communication/CHANGELOG.md)]| |||  |
| Common  | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-common/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Common/CHANGELOG.md)] | | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-common/CHANGELOG.md)]|[[link](https://github.com/Azure/azure-sdk-for-ios/blob/master/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-android/tree/master/sdk/communication/azure-communication-common)]|  |
| Identity| [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-identity/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-net/tree/master/sdk/communication/Azure.Communication.Identity)]| [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-identity/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-identity/CHANGELOG.md)] |||  |
| Phone Numbers| [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-phone-numbers/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.PhoneNumbers/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-phonenumbers/CHANGELOG.md)] | |||  |
| Chat | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-chat/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Chat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)]  |[[link](https://github.com/Azure/azure-sdk-for-ios/blob/main/sdk/communication/AzureCommunicationChat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-android/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)] |  |
| SMS  | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-sms/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Sms/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-sms/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-sms/CHANGELOG.md)]|||  |
| Calling | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-javascript-calling-library-release-notes.md)] | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-windows-sdk-release-notes.md)]| | | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-ios-sdk-release-notes.md)] | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-android-sdk-release-notes.md)] | |
| TURN (Network Traversal) | [[link](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-network-traversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.NetworkTraversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/communication/azure-communication-networktraversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/communication/azure-communication-networktraversal/CHANGELOG.md)]  | | |
|UI Library|--|---|---|---|[[link](https://github.com/Azure/communication-ui-library-ios/blob/main/CHANGELOG.md)] | [[link](https://github.com/Azure/communication-ui-library-android/blob/main/CHANGELOG.md)]|-|
| Email | [[link](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-email/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.Email/CHANGELOG.md)]| | |||  |



## Feature Roadmap

[Our roadmap](roadmap.md) communicates features currently in development (private preview) and on-going priorities for extending the scope of Azure Communication Services. It will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here are not exhaustive or guaranteed. We welcome your feedback on the roadmap.

Major updates to Azure Communication Services and other Azure services are available at [https://azure.microsoft.com/updates/](https://azure.microsoft.com/updates/). <!--A project view of the roadmap is [also available here](https://github.com/Azure/Communication/projects/1).--> 



