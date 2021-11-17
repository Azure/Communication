# Azure Communication Services (ACS)
[Azure Communication Services](https://docs.microsoft.com/azure/communication-services/overview) are cloud-based services with REST APIs and client library SDKs to help you integrate communication into your applications. You can add communication features to your applications without being an expert in communication technologies such as media encoding and real-time networking. 

**Find here:**
- *SDKs* - Links to client libraries
- *Release Notes* - [Collated release notes](https://github.com/Azure/Communication/tree/master/releasenotes) for the service and SDKs
- *Roadmap* - Priorities for current and future service development

This repo is not open to contributions, though many of the linked SDKs are open-source and allow contributions.

**Conceptual Documentation, Quickstarts, Samples, and Help**

Conceptual docs and quickstarts are at [docs.microsoft.com](https://docs.microsoft.com/azure/communication-services/overview). Samples are listed on a [dedicated samples page](https://docs.microsoft.com/azure/communication-services/samples/overview). To ask questions or get help, [please check out these resources](https://docs.microsoft.com/azure/communication-services/support).

## SDKs
Azure Communication Services capabilities are conceptually organized into eight areas. Most areas have fully open-sourced SDKs programmed against published REST APIs that you can use directly over the Internet. Development of Web-based Calling and Chat applications can be accelerated by [Azure Communication Services UI libraries](https://azure.github.io/communication-ui-library). The UI library provides production-ready UI components that you can drop into your applications.

Communication Services APIs are documented alongside other Azure REST APIs in [docs.microsoft.com](https://docs.microsoft.com/rest/api/communication/). This documentation will tell you how to structure your HTTP messages and offers guidance for using Postman. REST interface documentation is also offered in Swagger format on [GitHub](https://github.com/Azure/azure-rest-api-specs).

| Assembly               | Capabilities                                                    |
|------------------------|-----------------------------------------------------------------|
| Azure Resource Manager | Provision and manage Communication Services resources           |
| Common                 | Provides base types for other SDKs                              |
| Identity               | Manage users, access tokens                                     |
| Phone numbers          | Acquire and manage phone numbers                                |
| SMS                    | Send and receive SMS messages                                   |
| Chat                   | Add real-time text based chat to your applications              |
| Calling                | Voice, video, screen-sharing, and other real-time communication |
| Calling Server         | Make and manage calls, play audio, and configure recording      |
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
|Network Traversal| [npm](https://www.npmjs.com/package/@azure/communication-network-traversal)|[nuget](https://www.nuget.org/packages/Azure.Communication.NetworkTraversal/) |  [PyPi](https://pypi.org/project/azure-communication-networktraversal/)| [Maven](https://search.maven.org/search?q=a:azure-communication-networktraversal) | - | - | 
| UI Library| [npm](https://www.npmjs.com/package/@azure/communication-react) | - | - | - | - | - | [GitHub](https://github.com/Azure/communication-ui-library), [Storybook](https://azure.github.io/communication-ui-library/?path=/story/overview--page) |
| Reference Documentation | [docs](https://azure.github.io/azure-sdk-for-js/communication.html) | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)| -| [docs](http://azure.github.io/azure-sdk-for-java/communication.html) | [docs](/objectivec/communication-services/calling/)| [docs](/java/api/com.azure.android.communication.calling)| -|



## Release Notes 
Release notes are available directly in the publishing location (e.g. nuget) for SDKs. However every two weeks we aggregate release notes including services changes (e.g. new Azure Portal pages) in [this repo](https://github.com/Azure/Communication/tree/master/releasenotes).
  - [3/22/2021 - 4/4/2021](/releasenotes/2021-March-30.md) -  General availability of the service. Most SDKs have updated 1.0.0 versions with breaking changes.
 - [4/4/2021 - 4/18/2021](/releasenotes/2021-April-18.md) - Calling iOS and Android SDKs updated with bug fixes and a small number of breaking changes. Calling JavaScript updated with bug fixes. Chat Python SDK GA version released.
 - [4/18/2021 - 5/2/2021](/releasenotes/2021-May-2.md) - Calling iOS and Android SDKs are generally available and stable. Phone Numbers is also generally availability with stable SDKs for .NET, JS, Java, and Python.
 - [5/2/2021 - 5/16/2021](/releasenotes/2021-May-16.md) - Initial release of **Azure Communication Services Windows Calling SDK** in public preview (v1.0.0-beta.1). Chat (.NET) and SMS (Java) version 1.0.1 has been published with minor bug fixes. 
 - [5/16/2021 - 5/31/2021](/releasenotes/2021-May-30.md) - Calling JS & Windows SDK libraries updated with minor bug fixes and Common Library Java package small fixes.
 - [6/1/2021 - 6/14/2021](/releasenotes/2021-June-14.md) - Calling Android & iOS libraries updated with version V1.1.0 beta-1 version with CallKit support (iOS) and minor bug fixes.
 - [6/15/2021 - 6/28/2021](/releasenotes/2021-June-28.md) - Azure Portal supports the ability to move resources to different subscriptions and resource groups. Updated Android Chat & Common libraries, and Calling JS library.
 - [6/28/2021 - 7/12/2021](/releasenotes/2021-July-12.md) - Calling Android v1.1.0 SDK release with the ability to dispose of `CallAgent` and `CallAgent` optimizing the memory.
 - [7/12/2021 - 7/26/2021](/releasenotes/2021-July-26.md) - The Chat SDK for iOS is now Generally Available. Recording and Transcription features were added to allow call recording and transcription. Azure Portal adds UI updates into the Direct Routing (preview) blade and configuration, also incorporate the ability to quickly create identities and tokens to use in samples and troubleshooting scenarios.
 - [7/27/2021 - 8/9/2021](/releasenotes/2021-08-09.md) - The Chat SDK release improvements into the Android, Java, JS & Python packages. Azure Portal UI enhancements into the Direct Routing blade. Calling Android SDK optimize memory consumption.
 - [8/10/2021 - 8/23/2021](/releasenotes/2021-08-23.md) - The JS Calling SDK releases improvements. TURN releases beta version for Python and Java libraries. Azure Portal incorporates enhancements over Direct Routing blade and minor UI changes.
 - [8/24/2021 - 9/6/2021](/releasenotes/2021-09-06.md) - The JS Calling SDK releases beta package with several improvements. TURN releases the first beta version package for Java.
 - [9/7/2021 - 9/20/2021](/releasenotes/2021-09-20.md) - You can purchase now phone numbers in **Puerto Rico** using the Azure Portal. Android Calling library fix minor issues and JS Calling add small fixes on Safari browser.
 - [9/21/2021 - 10/4/2021](/releasenotes/2021-10-04.md) - **Java** packages update dependencies `azure-communication-common` to 1.0.4 and `azure-core` to 1.20.0. *Network Traversal* release new version packages. Great news  to keep you updated: *Azure Advisor* will alert you when there is a new version of the chat SDK available.
- [10/5/2021 - 10/18/2021](/releasenotes/2021-10-18.md) - Calling Server release beta packages for .NET & Java languages, adding mixed audio-only MP3/WAV output format for Call Recording!. Also, Azure Communication Services now supports **Azure Advisor** alerting customers when there is a new SDK available!!.
- [10/19/2021 - 11/1/2021](/releasenotes/2021-11-1.md) -  .NET, Java & JS added support to build custom Teams endpoint using M365 Teams identities!.
- [11/2/2021 - 11/15/2021](/releasenotes/2021-11-15.md) - **Short codes** release the initial version of the Python SDK. Chat (Java) and Identity (Python) releases minor fixes.

In many cases we maintain a perpetual changelog at a library level which is linked below.

| **Area**| **JavaScript** | **.NET** | **Python**  | **Java SE** | **iOS** | **Android**| **Other** |
|--|--|---|---|---|-|--|-|
| Azure Resource Manager | | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.ResourceManager.Communication/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-mgmt-communication/CHANGELOG.md)]| |||  |
| Common  | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-common/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Common/CHANGELOG.md)] | | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-common/CHANGELOG.md)]|[[link](https://github.com/Azure/azure-sdk-for-ios/blob/master/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-android/tree/master/sdk/communication/azure-communication-common)]|  |
| Identity| [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-identity/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-net/tree/master/sdk/communication/Azure.Communication.Identity)]| [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-identity/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-identity/CHANGELOG.md)] |||  |
| Phone Numbers| [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-phone-numbers/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.PhoneNumbers/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-phonenumbers/CHANGELOG.md)] | |||  |
| Chat | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-chat/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Chat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)]  |[[link](https://github.com/Azure/azure-sdk-for-ios/blob/master/CHANGELOG.md)]| [[link](https://github.com/Azure/azure-sdk-for-android/blob/master/sdk/communication/azure-communication-chat/CHANGELOG.md)] |  |
| SMS  | [[link](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/communication/communication-sms/CHANGELOG.md)]  | [[link](https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/communication/Azure.Communication.Sms/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-python/blob/master/sdk/communication/azure-communication-sms/CHANGELOG.md)] | [[link](https://github.com/Azure/azure-sdk-for-java/blob/master/sdk/communication/azure-communication-sms/CHANGELOG.md)]|||  |
| Calling | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-javascript-calling-library-release-notes.md)] | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-windows-sdk-release-notes.md)]| | | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-ios-sdk-release-notes.md)] | [[link](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-android-sdk-release-notes.md)] | |
| TURN (Network Traversal) | [[link](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-network-traversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/communication/Azure.Communication.NetworkTraversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/communication/azure-communication-networktraversal/CHANGELOG.md)] |[[link](https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/communication/azure-communication-networktraversal/CHANGELOG.md)]  | | |

## Feature Roadmap
[Our roadmap](roadmap.md) communicates features currently in development (private preview) and on-going priorities for extending the scope of Azure Communication Services. It will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here are not exhaustive or guaranteed. We welcome your feedback on the roadmap.

A project view of the roadmap is [also available here](https://github.com/Azure/Communication/projects/1). Major updates to Azure Communication Services and other Azure services are available at [https://azure.microsoft.com/updates/](https://azure.microsoft.com/updates/).

## ❤️ Feedback
We appreciate your feedback and energy helping us improve our services. [If you've tried the service, please give us feedback through this survey](https://microsoft.qualtrics.com/jfe/form/SV_4HMWolQyyLyeX77). 

If you'd like to submit feature requests please submit them to our [board on Azure UserVoice](https://feedback.azure.com/forums/934536-azure-communication-services).
