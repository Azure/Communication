# Azure Communication Services
This repo provides links, code, client libraries (SDKs), and samples for developers using [Azure Communication Services](https://azure.microsoft.com/en-us/services/communication-services/ ).

- **SDKs** - Download client libraries
- **Release Notes** - Find [collated release notes](https://github.com/Azure/Communication/tree/master/releasenotes) for the service and SDKs
- **Samples** - Download samples
- **Help** - Ask questions, file issues, or request features

For more information about Azure Communication Services APIs and SDKs please see [docs.microsoft.com](https://aka.ms/communication-services-docs).

## Latest Release Notes 
- [09/22/2020 Notes](./releasenotes/2020-September-22.md)

## SDKs

Azure Communication Services capabilities are conceptually organized into six areas. 
- **REST-based SDKs:** ARM, Common, Administration, Chat, and SMS, are entirely or partially open-source and published through centralized Azure repos and channels linked below. 
- **REST APIs** are documented in the [Azure REST API repo](https://github.com/Azure/azure-rest-api-specs).
- **Calling SDKs** are available through this repo. 

### Package Links


| Area           | JavaScript | .NET | Python | Java | Swift or Obj-C | Java (Android) | Other                          |
| -------------- | ---------- | ---- | ------ | ---- | -------------- | -------------- | ------------------------------ |
| Azure Resource Manager | -         | [nuget](https://www.nuget.org/packages/Azure.ResourceManager.Communication)    |   [PyPi](https://pypi.org/project/azure-mgmt-communication/)    |  -  | -              | -  | [Go via GitHub](https://github.com/Azure/azure-sdk-for-go/releases/tag/v46.3.0) |
| Common         | [npm](https://www.npmjs.com/package/@azure/communication-common)         | [nuget](https://www.nuget.org/packages/Azure.Communication.Common/)    | N/A      | [Maven](https://search.maven.org/search?q=a:azure-communication-common)   | [Swift via GitHub](https://github.com/Azure/azure-sdk-for-ios/releases/tag/1.0.0-beta.1)            | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-common)             | -                              |
| Administration | [npm](https://www.npmjs.com/package/@azure/communication-administration)         | [nuget](https://www.nuget.org/packages/Azure.Communication.Administration)    | [PyPi](https://pypi.org/project/azure-communication-administration/)      | [Maven](https://search.maven.org/search?q=a:azure-communication-administration)   | -              | -              | -                            |
| Chat           | [npm](https://www.npmjs.com/package/@azure/communication-chat)        | [nuget](https://www.nuget.org/packages/Azure.Communication.Chat)     | [PyPi](https://pypi.org/project/azure-communication-chat/)     | [Maven](https://search.maven.org/search?q=a:azure-communication-chat)   | -  | -  | -                              |
| SMS            | [npm](https://www.npmjs.com/package/@azure/communication-sms)         | [nuget](https://www.nuget.org/packages/Azure.Communication.Sms)    | [PyPi](https://pypi.org/project/azure-communication-sms/)       | [Maven](https://search.maven.org/artifact/com.azure/azure-communication-sms)   | -              | -              | -                              |
| Calling        | [npm](https://www.npmjs.com/package/@azure/communication-calling)         | -      | -      | -     | [Obj-C via GitHub](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.2)     | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling/)            | -                              |
| Reference Documentation     | [docs](https://azure.github.io/azure-sdk-for-js/communication.html)         | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)      | -      | [docs](http://azure.github.io/azure-sdk-for-java/communication.html)     | (Obj-C) ✔️     | ✔️            | -                              |

## Samples

Several samples are available in this repo.

**Application Samples**
These are JavaScript-based web applications implemented using Microsoft's Fluent design language and components. They function in both mobile and desktop browser settings.

- [Chat Hero Sample](..samples/../samples/Group%20Chat%20Hero%20Sample/Web/Chat) - Demonstrates rich text chat
- [Calling Hero Sample](..samples/../samples/Group%20Calling%20Hero%20Sample/Web/Calling) - Demonstrates voice and video calling

## Help

We encourage developers to submit questions, suggust features, and report problems as issues in this repo. Other forums include:

- [Microsoft Q&A](https://docs.microsoft.com/en-us/answers/index.html)
- [StackOverflow](https://stackoverflow.com/questions/tagged/azure+communication)

Depending on your [Azure subscription support plan](https://azure.microsoft.com/support/plans/) you can access support directly in the [Azure portal](https://azure.microsoft.com/en-us/support/create-ticket/).
