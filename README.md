
![image](https://github.com/user-attachments/assets/84ab8a47-c0ee-4b95-a967-86393625961d)
# Azure Communication Services
[Azure Communication Services](https://docs.microsoft.com/azure/communication-services/overview) are cloud-based services with REST APIs and client library SDKs to help you integrate communication into your applications. You can add communication features to your applications without being an expert in communication technologies such as media encoding and real-time networking. 

## Start building now 🔨
- [SDKs 🧰](#sdks) : Links to client libraries
- [Samples ✨](https://github.com/Azure/Communication/blob/master/Sample-index.md): Basic and advanced examples demonstrating common communication use cases.
- [Documentation 📖](https://docs.microsoft.com/azure/communication-services/overview): Explore the platform documentation on _learn.microsoft.com_.

This repo is not open to contributions, though many of the linked SDKs are open-source and allow contributions.

## Stay up to date 📣
- [Feature roadmap 📆](#feature-roadmap) :  Product roadmap and current public preview features.
- [Release Notes 📫](https://github.com/Azure/Communication/tree/pereiralex-repo-content-devX-refresh/releasenotes) : Collated release notes for the service and SDKs

## Have ideas or feedback? ❤️
- [Submit feedback or feature requests](https://feedback.azure.com/d365community/forum/81ff6d2b-0c25-ec11-b6e6-000d3a4f0858) to our board on Azure Feedback.
- [Q&A](https://docs.microsoft.com/answers/topics/azure-communication-services.html)
- [Create an Azure Support request](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request)

## SDKs
Azure Communication Services is conceptually organized into 12 areas. Most areas have fully open-sourced SDKs programmed against published REST APIs that you can use directly over the Internet. Development of Web Calling and Chat client applications can be accelerated by [Azure Communication Services UI libraries](https://azure.github.io/communication-ui-library). The UI library provides production-ready UI components that you can drop into your applications.

Communication Services APIs are documented alongside other Azure REST APIs in [learn.microsoft.com](https://learn.microsoft.com/rest/api/communication/). This documentation will tell you how to structure your HTTP messages and offers guidance for using Postman. REST interface documentation is also offered in Swagger format on [GitHub](https://github.com/Azure/azure-rest-api-specs).

| Assembly               | Capabilities                                                    |
|------------------------|-----------------------------------------------------------------|
| Azure Resource Manager | Provision and manage Communication Services resources           |
| Calling                | Voice, video, screen-sharing, and other real-time communication |
| Call Automation        | Make and manage calls, play audio, and configure recording      |
| Chat                   | Add real-time text based chat to your applications              |
| Common                 | Provides base types for other SDKs                              |
| Email                  | Facilitates high volume transactional, and enable Application-to-Person (A2P) use cases               |
| Identity               | Manage users, access tokens                                     |
| Job Router             | Create and manage jobs, queues and workers                      |
| Phone numbers          | Acquire and manage phone numbers                                |
| Rooms                  | Control who can join a call, when they meet and how they collaborate |
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
| Calling| [npm](https://www.npmjs.com/package/@azure/communication-calling) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Calling.WindowsClient) | -| - | [GitHub](https://github.com/Azure/Communication/releases) | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling/)| -|
|Call Automation||[nuget](https://www.nuget.org/packages/Azure.Communication.CallingServer/)||[Maven](https://search.maven.org/artifact/com.azure/azure-communication-callingserver)
|Email | [npm](https://www.npmjs.com/package/@azure/communication-email) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Email) | - | - | - | - | - |
| Job Router | [npm](https://www.npmjs.com/package/@azure-rest/communication-job-router) | [NuGet](https://www.nuget.org/packages/Azure.Communication.JobRouter) | [PyPi](https://pypi.org/project/azure-communication-jobrouter/) | [Maven](https://search.maven.org/search?q=a:azure-communication-jobrouter) | - | - | - |
| Rooms | [npm](https://www.npmjs.com/package/@azure/communication-rooms/v/1.0.0-beta.1) | [NuGet](https://www.nuget.org/packages/Azure.Communication.Rooms/1.0.0-beta.1) | [PyPi](https://pypi.org/project/azure-communication-rooms/) | [Maven](https://repo1.maven.org/maven2/com/azure/azure-communication-rooms/1.0.0-beta.2/) | [GitHub](https://github.com/Azure/Communication/releases/tag/v2.3.0-beta.1) | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling/2.4.0-beta.1/aar) | - |
|Network Traversal| [npm](https://www.npmjs.com/package/@azure/communication-network-traversal)|[nuget](https://www.nuget.org/packages/Azure.Communication.NetworkTraversal/) |  [PyPi](https://pypi.org/project/azure-communication-networktraversal/)| [Maven](https://search.maven.org/search?q=a:azure-communication-networktraversal) | - | - |
| UI Library| [npm](https://www.npmjs.com/package/@azure/communication-react) | - | - | - | [GitHub](https://github.com/Azure/communication-ui-library-ios) | [GitHub](https://github.com/Azure/communication-ui-library-android) | [GitHub](https://github.com/Azure/communication-ui-library), [Storybook](https://azure.github.io/communication-ui-library/?path=/story/overview--page) |
| Reference Documentation | [docs](https://azure.github.io/azure-sdk-for-js/communication.html) | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)| -| [docs](http://azure.github.io/azure-sdk-for-java/communication.html) | [docs](/objectivec/communication-services/calling/)| [docs](/java/api/com.azure.android.communication.calling)| -|

## Release Notes

Release notes are available directly in the publishing location (e.g. nuget) for SDKs.

| **Area**| **JavaScript** | **.NET** | **Python**  | **Java SE** | **iOS** | **Android**| **Other** |
|--|--|---|---|---|-|--|-|
| Azure Resource Manager | | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.ResourceManager.Communication/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-mgmt-communication/CHANGELOG.md)]| |||  |
| Common  | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-common/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Common/CHANGELOG.md)] | | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-common/CHANGELOG.md)]|[[link](https://github.com/Azure/azure-sdk-for-ios/blob/master/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-android/tree/master/sdk/communication/azure-communication-common)]|  |
| Identity| [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-identity/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-net/tree/master/sdk/communication/Azure.Communication.Identity)]| [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-identity/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-identity/CHANGELOG.md)] |||  |
| Phone Numbers| [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-phone-numbers/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.PhoneNumbers/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-phonenumbers/CHANGELOG.md)] | |||  |
| Chat | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-chat/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Chat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)]  |[[link](https://github.com/Azure/azure-sdk-for-ios/blob/main/sdk/communication/AzureCommunicationChat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-android/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)] |  |
| SMS  | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-sms/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Sms/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-sms/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-sms/CHANGELOG.md)]|||  |
| Calling | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-javascript-calling-library-release-notes.md)] | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-windowsclient-sdk-release-notes.md)]| | | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-ios-sdk-release-notes.md)] | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-android-sdk-release-notes.md)] | |
| Job Router | [[link]](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-job-router-rest/CHANGELOG.md) | [[link]](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.JobRouter/CHANGELOG.md) | [[link]](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/communication/azure-communication-jobrouter/CHANGELOG.md) | [[link]](https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/communication/azure-communication-jobrouter/CHANGELOG.md) | | | |
| Rooms | [[link]](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-rooms/CHANGELOG.md) | [[link]](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.Rooms/CHANGELOG.md) | [[link]](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/communication/azure-communication-rooms/CHANGELOG.md) | [[link]](https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/communication/azure-communication-rooms/CHANGELOG.md) | | | |
| TURN (Network Traversal) | [[link](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-network-traversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.NetworkTraversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/communication/azure-communication-networktraversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/communication/azure-communication-networktraversal/CHANGELOG.md)]  | | |
|UI Library|--|---|---|---|[[link](https://github.com/Azure/communication-ui-library-ios/blob/main/CHANGELOG.md)] | [[link](https://github.com/Azure/communication-ui-library-android/blob/main/CHANGELOG.md)]|-|
| Email | [[link](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-email/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.Email/CHANGELOG.md)]| | |||  |

## Feature Roadmap

[Our roadmap](roadmap.md) communicates features currently in development (private preview) and on-going priorities for extending the scope of Azure Communication Services. It will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here are not exhaustive or guaranteed. We welcome your feedback on the roadmap.

Major updates to Azure Communication Services and other Azure services are available at [https://azure.microsoft.com/updates/](https://azure.microsoft.com/updates/). <!--A project view of the roadmap is [also available here](https://github.com/Azure/Communication/projects/1).--> 



