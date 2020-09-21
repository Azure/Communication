## Prerequisites

To complete this tutorial, you’ll need the following prerequisites:

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F). 
- A Mac running [Xcode](https://go.microsoft.com/fwLink/p/?LinkID=266532), along with a valid developer certificate installed into your Keychain.
- A deployed Communication Services resource. [Create a Communication Services resource](../../create-communication-resource.md).
- A [User Access Token](../../user-access-tokens.md) for your Azure Communication Service.

## Object model

The following classes and interfaces handle some of the major features of the Azure Communication Services Calling client library:

| Name                                  | Description                                                  |
| ------------------------------------- | ------------------------------------------------------------ |
| ACSCallClient| The CallClient is the main entry point to the Calling client library.|
| ACSCallAgent| The CallAgent is used to start and manage calls. |
| CommunicationUserCredential | The CommunicationUserCredential is used as the token credential to instantiate the CallAgent.|
| CommunicationIndentifier | The CommunicationIndentifier is used to represent the identity of the user which can be one of the following: CommunicationUser/PhoneNumber/CallingApplication. |


## Run the code

You can build an run your app on iOS simulator by selecting **Product** > **Run** or by using the (&#8984;-R) keyboard shortcut.

You can make an outbound VOIP call by providing a user ID in the text field and tapping the **Start Call** button. Calling `8:echo123` connects you with an echo bot, this is great for getting started and verifying your audio devices are working. 
