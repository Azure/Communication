# Azure Communication Services (ACS)
This repo collates SDKs, roadmap information, release notes, and samples for developers using [Azure Communication Services](https://azure.microsoft.com/en-us/services/communication-services/). This repo is not open to contributions at this time, though many of the linked SDKs are open-source and allow contributions.

**Find here:**
- **SDKs** - Download client libraries
- **Release Notes** - Find [collated release notes](https://github.com/Azure/Communication/tree/master/releasenotes) for the service and SDKs
- **Roadmap** - Review priorities for current and future service development

#### Conceptual Documentation, Samples, and Help
Find conceptual docs and quickstarts at [docs.microsoft.com](https://docs.microsoft.com/azure/communication-services/overview). ACS has several samples available for information on these take a look at our [dedicated samples page](https://docs.microsoft.com/azure/communication-services/samples/overview).

To ask questions or get help, [please check out these resources](https://docs.microsoft.com/azure/communication-services/support).

## ❤️ Feedback
We appreciate your feedback and energy helping us improve our services. [Please let us know if you are satisfied with ACS through this survey](https://microsoft.qualtrics.com/jfe/form/SV_4HMWolQyyLyeX77). 

If you'd like to submit feature requests please submit them to our [board on Azure UserVoice](https://feedback.azure.com/forums/934536-azure-communication-services).

## SDKs

Azure Communication Services capabilities are conceptually organized into six areas. Most areas have fully open-sourced client libraries programmed against published REST APIs that you can use directly over the Internet. The Calling client library uses proprietary network interfaces and is currently closed-source. More information on REST APIs and SDKs is in [docs.microsoft.com](https://docs.microsoft.com/azure/communication-services/concepts/sdk-options).

Package links are aggregated below.

| Area           | JavaScript | .NET | Python | Java SE | iOS | Android | Other                          |
| -------------- | ---------- | ---- | ------ | ---- | -------------- | -------------- | ------------------------------ |
| Azure Resource Manager | [npm](https://www.npmjs.com/package/@azure/arm-communication) | [NuGet](https://www.nuget.org/packages/Azure.ResourceManager.Communication) | [PyPi](https://pypi.org/project/azure-mgmt-communication/) | [Maven](https://search.maven.org/search?q=azure-resourcemanager-communication)  | - | - | [Go via GitHub](https://github.com/Azure/azure-sdk-for-go/releases/tag/v52.5.0) |
| Common         | [npm](https://www.npmjs.com/package/@azure/communication-common)         | [NuGet](https://www.nuget.org/packages/Azure.Communication.Common/)    | N/A      | [Maven](https://search.maven.org/search?q=a:azure-communication-common)   | [GitHub](https://github.com/Azure/azure-sdk-for-ios/releases)            | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-common)             | -                              |
| Identity | [npm](https://www.npmjs.com/package/@azure/communication-identity)         | [NuGet](https://www.nuget.org/packages/Azure.Communication.Identity)    | [PyPi](https://pypi.org/project/azure-communication-identity/)      | [Maven](https://search.maven.org/search?q=a:azure-communication-identity)   | -              | -              | -                            |
| Phone Numbers | [npm](https://www.npmjs.com/package/@azure/communication-phone-numbers)         | [NuGet](https://www.nuget.org/packages/Azure.Communication.PhoneNumbers)    | [PyPi](https://pypi.org/project/azure-communication-phonenumbers/)      | [Maven](https://search.maven.org/search?q=a:azure-communication-phonenumbers)   | -              | -              | -                            |
| Chat           | [npm](https://www.npmjs.com/package/@azure/communication-chat)        | [NuGet](https://www.nuget.org/packages/Azure.Communication.Chat)     | [PyPi](https://pypi.org/project/azure-communication-chat/)     | [Maven](https://search.maven.org/search?q=a:azure-communication-chat)   | [GitHub](https://github.com/Azure/azure-sdk-for-ios/releases)  | [Maven](https://search.maven.org/search?q=a:azure-communication-chat)   | -                              |
| SMS            | [npm](https://www.npmjs.com/package/@azure/communication-sms)         | [NuGet](https://www.nuget.org/packages/Azure.Communication.Sms)    | [PyPi](https://pypi.org/project/azure-communication-sms/)       | [Maven](https://search.maven.org/artifact/com.azure/azure-communication-sms)   | -              | -              | -                              |
| Calling        | [npm](https://www.npmjs.com/package/@azure/communication-calling)         | [NuGet](https://www.nuget.org/packages/Azure.Communication.Calling)     | -      | -     | [GitHub](https://github.com/Azure/Communication/releases)     | [Maven](https://search.maven.org/artifact/com.azure.android/azure-communication-calling/)            | -                              |
| UI             | [npm](https://www.npmjs.com/package/@azure/communication-react) | - | - | - | - | - | [GitHub](https://github.com/Azure/communication-ui-library), [Storybook](https://azure.github.io/communication-ui-library/?path=/story/overview--page) |
| Reference Documentation     | [docs](https://azure.github.io/azure-sdk-for-js/communication.html)         | [docs](https://azure.github.io/azure-sdk-for-net/communication.html)      | -      | [docs](http://azure.github.io/azure-sdk-for-java/communication.html)     | [docs](https://docs.microsoft.com/en-us/objectivec/communication-services/calling/)      | [docs](https://docs.microsoft.com/en-us/java/api/com.azure.android.communication.calling?view=communication-services-java-android)            | -                              |


## Release Notes 
Release notes are available directly in the publishing location (e.g. nuget) for SDKs. However every two weeks we aggregate release notes including services changes (e.g. new Azure Portal pages) in [this repo](https://github.com/Azure/Communication/tree/master/releasenotes).

 - 03/11/2021. Significant updates to ACS Calling with breaking changes:
    - [iOS - 1.0.0-beta.9](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.9)
    - [Android - 1.0.0.-beta.9](https://www.npmjs.com/package/@azure/communication-calling/v/1.0.0-beta.9) 
 - [3/22/2021 - 4/4/2021](/releasenotes/2021-March-30.md) -  General availability of the service. Most SDKs have updated 1.0.0 versions with breaking changes.
 - [4/4/2021 - 4/18/2021](/releasenotes/2021-April-18.md) - Calling iOS and Android SDKs updated with bug fixes and a small number of breaking changes. Calling JavaScript updated with bug fixes. Chat Python SDK GA version released.
 - [4/18/2021 - 5/2/2021](/releasenotes/2021-May-2.md) - Calling iOS and Android SDKs are generally available and stable. Phone Numbers is also generally availability with stable SDKs for .NET, JS, Java, and Python.
 - [5/2/2021 - 5/16/2021](/releasenotes/2021-May-16.md) - Initial release of **Azure Communication Services Windows Calling SDK** in public preview (v1.0.0-beta.1). Chat (.NET) and SMS (Java) version 1.0.1 has been published with minor bug fixes. 
 - [5/16/2021 - 5/31/2021](/releasenotes/2021-May-30.md) - Calling JS & Windows SDK libraries updated with minor bug fixes and Common Library Java package small fixes.
 
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

## Feature Roadmap
[Our roadmap](roadmap.md) communicates features currently in development (private preview) and on-going priorities for extending the scope of Azure Communication Services. It will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here are not exhaustive or guaranteed. We welcome your feedback on the roadmap.

A project view of the roadmap is [also available here](https://github.com/Azure/Communication/projects/1). Major updates to Azure Communication Services and other Azure services are available at [https://azure.microsoft.com/updates/](https://azure.microsoft.com/updates/).

## Help

We encourage developers to submit questions, suggest features, and report problems as issues in this repo. Other forums include:

- [Microsoft Q&A](https://docs.microsoft.com/answers/topics/azure-communication-services.html)
- [StackOverflow](https://stackoverflow.com/questions/tagged/azure+communication)

Depending on your [Azure subscription support plan](https://azure.microsoft.com/support/plans/) you can access support directly in the [Azure portal](https://azure.microsoft.com/en-us/support/create-ticket/).
