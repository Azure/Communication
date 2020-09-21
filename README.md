# Azure Communication Services - SDKs, Samples, and Help
This repo provides links, code, client libraries (SDKs), and samples for developers using [Azure Communication Services](https://azure.microsoft.com/en-us/services/azure-communication-services/).

- **SDKs** - Download client libraries
- **Release Notes** - Find [collated release notes](https://github.com/Azure/Communication/tree/master/releasenotes) for the service and SDKs
- **Samples** - Download samples
- **Help** - Ask questions, file issues, or request features

For more information about Azure Communication Services APIs and SDKs please see [docs.microsoft.com](https://aka.ms/spooldocs).

## SDKs

Azure Communication Services capabilities are conceptually organized into six areas. 
- **REST-based SDKs:** ARM, Common, Administration, Chat, and SMS, are entirely or partially open-source and published through centralized Azure repos and channels linked below. 
- **REST APIs** are documented in the [Azure REST API repo](https://github.com/Azure/azure-rest-api-specs).
- **Calling SDKs** are available through this repo. 


| Assembly               | Protocols             |Open vs. Closed Source| Namespaces                          | Capabilities                                                      |
| ---------------------- | --------------------- | ---|-------------------------- | --------------------------------------------------------------------------- |
| Azure Resource Manager | REST | Open            | Azure.ResourceManager.Communication | Provision and manage Communication Services resources             |
| Common                 | REST | Open               | Azure.Communication.Common          | Provides base types for other client libraries |
| Administration         | REST | Open               | Azure.Communication.Administration  | Manage users, access tokens, and phone numbers, allocate standards-compliant STUN and TURN servers |
| Chat                   | REST with proprietary signalling | Open with closed source signalling package    | Azure.Communication.Chat            | Add real-time text based chat to your applications  |
| SMS                    | REST | Open              | Azure.Communication.SMS             | Send and receive SMS messages |
| Calling                | Proprietary transport | Closed |Azure.Communication.Calling         | Leverage voice, video, screen-sharing, and other real-time data communication capabilities          |


| Language    | Packages             | Repo                             | Documentation                    |
|:------------|:--------------------:|:--------------------------------:|:--------------------------------:|
| General     |                      |[azure-sdk Repository](https://github.com/Azure/azure-sdk)            | [Official Azure Documentation](http://aka.ms/azure-sdk-docs)   |
| Android     |                      |[azure-sdk-for-android Repository](https://github.com/Azure/azure-sdk-for-android)| Coming Soon                      |
| C# /.NET    |[.NET Packages](https://azure.github.io/azure-sdk/releases/latest/dotnet.html)       |[azure-sdk-for-net Repository](https://github.com/Azure/azure-sdk-for-net)    | [.NET Documentation](http://aka.ms/net-docs)             |
| iOS         |                      |[azure-sdk-for-ios Repository](https://github.com/Azure/azure-sdk-for-ios)    | Coming Soon                      |
| Java        |[Java Packages](https://azure.github.io/azure-sdk/releases/latest/java.html)      |[azure-sdk-for-java Repository](https://github.com/Azure/azure-sdk-for-java)   | [Java Documentation](http://aka.ms/java-docs)             |
| JavaScript  |[JavaScript Packages](https://azure.github.io/azure-sdk/releases/latest/js.html)|[azure-sdk-for-js Repository](https://github.com/Azure/azure-sdk-for-js)     | [JavaScript Documentation](http://aka.ms/js-docs)       |
| Python      |[Python Packages](https://azure.github.io/azure-sdk/releases/latest/python.html)    |[azure-sdk-for-python Repository](https://github.com/Azure/azure-sdk-for-python) | [Python Documentation](https://aka.ms/python-docs)           |

## Samples

Several samples are available in this repo.

**Application Samples**
These are JavaScript-based web applications implemented using Microsoft's Fluent design language and components. They function in both mobile and desktop browser settings.

- Chat Hero Sample - Demonstrates rich text chat
- Calling Hero Sample - Demonstrates voice and video calling

## Help

We encourage developers to submit questions, suggust features, and report problems as issues in this repo. Other forums include:

- [Microsoft Q&A](https://docs.microsoft.com/en-us/answers/index.html)
- [StackOverflow](https://stackoverflow.com/questions/tagged/azure+communication)

Depending on your [Azure subscription support plan](https://azure.microsoft.com/support/plans/) you can access support directly in the [Azure portal](https://azure.microsoft.com/en-us/support/create-ticket/).
