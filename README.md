# Azure Communication Services
This repo collates client libraries (SDKs), roadmap information, release notes, and samples for developers using [Azure Communication Services](https://azure.microsoft.com/en-us/services/communication-services/). For quickstarts and other technical documentation please see [docs.microsoft.com](https://docs.microsoft.com/azure/communication-services/overview).

- **SDKs** - Download client libraries
- **Roadmap** - Review priorities for current and future service development
- **Release Notes** - Find [collated release notes](https://github.com/Azure/Communication/tree/master/releasenotes) for the service and SDKs
- **Help** - Ask questions, file issues, or request features

## Feature Roadmap
[Our roadmap](https://github.com/Azure/Communication/projects/1) communicates features currently in development (private preview) and on-going priorities for extending the scope of Azure Communication Services. It will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here are not exhaustive or guaranteed. We welcome your feedback on the roadmap: please feel free to contribute to existing issues or file a new issue.

A flattened view of the roadmap is [also available here](roadmap.md). Major updates to Azure Communication Services and other Azure services are available at [https://azure.microsoft.com/updates/](https://azure.microsoft.com/updates/).

## Create a Special Order for Telephone Numbers

Details on how to order bulk telephone numbers to be posted shortly.

## Latest Release Notes 
- [10/06/2020](./releasenotes/2020-October-06.md). Adds SMS and PSTN functionality. Initial release of iOS and Android Chat SDKs.
- [09/22/2020](./releasenotes/2020-September-22.md). Initial release of Azure Communication Services, includes SDKs for Resource Management (ARM), Calling and Chat.
- [01/26/2021](./releasenotes/2021-January-26.md). Update of Azure Communication Services (Released 1.0.0-beta.4 of JS @azure/communication-common and @azure/communication-administration).
- [02/02/2021](https://azure.github.io/azure-sdk/releases/2021-02/). Azure Communication Administration will be deprecated Identity client is moved to new package Azure Communication Identity. Phone number administration will be moved into a new package Azure Communication Phone Numbers.
  - [.Net Release Notes](https://github.com/Azure/azure-sdk/blob/master/releases/2021-02/dotnet.md#azure-communication-administration-will-be-deprecated) 
  - [Java Release Notes](https://github.com/Azure/azure-sdk/blob/master/releases/2021-02/java.md#azure-communication-administration-will-be-deprecated) 
  - [JS Release Notes](https://github.com/Azure/azure-sdk/blob/master/releases/2021-02/js.md#azure-communication) 
  - [Python Release Notes](https://github.com/Azure/azure-sdk/blob/master/releases/2021-02/python.md#azure-communication-administration-will-be-deprecated) 
  - [Android Release Notes](https://github.com/Azure/azure-sdk/blob/master/releases/2021-02/android.md#azure-communication-services-common) 
  - [iOS Release Notes](https://github.com/Azure/azure-sdk/blob/master/releases/2021-02/ios.md#azure-communication-services-common) 
  
  
## SDKs

Azure Communication Services capabilities are conceptually organized into six areas detailed in [conceptual documentation](https://docs.microsoft.com/en-us/azure/communication-services/concepts/sdk-options). In summary you access the service through:
- **REST-based SDKs:** ARM, Common, Administration, Chat, and SMS, are entirely or partially open-source and published through centralized Azure repos and channels linked below. 
- **REST APIs** are documented in the [Azure REST API repo](https://github.com/Azure/azure-rest-api-specs) and can be used directly over the Internet. 
- **Calling SDKs** linked below and published through a variety of channels.

### Package Links

| Area           | JavaScript | .NET | Python | Java SE | iOS | Android | Other                          |
| -------------- | ---------- | ---- | ------ | ---- | -------------- | -------------- | ------------------------------ |
| Azure Resource Manager | [npm](https://www.npmjs.com/package/@azure/arm-communication)         | [nuget](https://www.nuget.org/packages/Azure.ResourceManager.Communication)    |   [PyPi](https://pypi.org/project/azure-mgmt-communication/)    |  [Maven](https://search.maven.org/search?q=a:azure-mgmt-communication)   | - | - | [Go via GitHub](https://github.com/Azure/azure-sdk-for-go/releases/tag/v46.3.0) |
| Common         | [npm](https://www.npmjs.com/package/@azure/communication-common)         | [nuget](https://www.nuget.org/packages/Azure.Communication.Common/)    | N/A      | [Maven](https://search.maven.org/search?q=a:azure-communication-common)   | [GitHub](https://github.com/Azure/azure-sdk-for-ios/releases/tag/1.0.0-beta.1)            | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-common)             | -                              |
| Administration | [npm](https://www.npmjs.com/package/@azure/communication-administration)         | [nuget](https://www.nuget.org/packages/Azure.Communication.Administration)    | [PyPi](https://pypi.org/project/azure-communication-administration/)      | [Maven](https://search.maven.org/search?q=a:azure-communication-administration)   | -              | -              | -                            |
| Chat           | [npm](https://www.npmjs.com/package/@azure/communication-chat)        | [nuget](https://www.nuget.org/packages/Azure.Communication.Chat)     | [PyPi](https://pypi.org/project/azure-communication-chat/)     | [Maven](https://search.maven.org/search?q=a:azure-communication-chat)   | [GitHub](https://github.com/Azure/azure-sdk-for-ios/releases)  | [Maven](https://search.maven.org/search?q=a:azure-communication-chat)   | -                              |
| SMS            | [npm](https://www.npmjs.com/package/@azure/communication-sms)         | [nuget](https://www.nuget.org/packages/Azure.Communication.Sms)    | [PyPi](https://pypi.org/project/azure-communication-sms/)       | [Maven](https://search.maven.org/artifact/com.azure/azure-communication-sms)   | -              | -              | -                              |
| Calling        | [npm](https://www.npmjs.com/package/@azure/communication-calling)         | -      | -      | -     | [GitHub](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.2)     | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling/)            | -                              |
| Reference Documentation     | [docs](https://azure.github.io/azure-sdk-for-js/communication.html)         | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)      | -      | [docs](http://azure.github.io/azure-sdk-for-java/communication.html)     | (Obj-C) ✔️     | ✔️            | -                              |

## Samples

Several samples are available in this repo.

**Application Samples**
These are designed JavaScript-based web applications implemented using [Microsoft's Fluent design language and components. They function in both mobile and desktop browser settings.

- [Chat Hero Sample](https://github.com/Azure-Samples/communication-services-web-chat-hero) - Web sample demonstrating rich text chat thread for 1:n users
- [Calling Hero Sample](https://github.com/Azure-Samples/communication-services-web-calling-hero) - Web sample Demonstrating voice and video calling for 1:n users
- [Contoso Medical App](https://github.com/Azure-Samples/communication-services-contoso-med-app) - Sample app demonstrating a patient-doctor flow
- [WPF Calling Sample](https://github.com/Azure-Samples/communication-services-web-calling-wpf-sample) - Sample app for Windows demonstrating calling functionality

**Quickstart Samples**
Access code samples for quickstarts found [Azure Docs](https://docs.microsoft.com/en-us/azure/communication-services/) for Azure Communication Services
 
 - [JavaScript](https://github.com/Azure-Samples/communication-services-javascript-quickstarts/)
 - [.Net](https://github.com/Azure-Samples/communication-services-dotnet-quickstarts/)
 - [iOS](https://github.com/Azure-Samples/communication-services-ios-quickstarts/)
 - [Android](https://github.com/Azure-Samples/communication-services-android-quickstarts/)
 - [Python](https://github.com/Azure-Samples/communication-services-python-quickstarts/)
 
 **Tutorials**
 Advanced code samples for Azure Communication Services
 
 - [Web Calling Tutorial](https://github.com/Azure-Samples/communication-services-web-calling-tutorial)

## Help

We encourage developers to submit questions, suggest features, and report problems as issues in this repo. Other forums include:

- [Microsoft Q&A](https://docs.microsoft.com/en-us/answers/index.html)
- [StackOverflow](https://stackoverflow.com/questions/tagged/azure+communication)

Depending on your [Azure subscription support plan](https://azure.microsoft.com/support/plans/) you can access support directly in the [Azure portal](https://azure.microsoft.com/en-us/support/create-ticket/).
