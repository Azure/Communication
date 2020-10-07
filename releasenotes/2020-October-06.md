# Release Notes for October 06, 2020

This release activates SDKs and APIs for telephony scenarios. This includes acquiring phone numbers and sending SMS messages. Additionally we are releasing Chat SDKs for native mobile platforms, Swift (iOS) and Java (Android).


## .NET SMS SDK

This initial release of the SDK allows you to add SMS capabilities to your application. You can send SMS messages, track delivery reports for sent messages and more. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-net/blob/311c797e27d246f2622697da23c6565d04ae75fc/sdk/communication/Azure.Communication.Sms/README.md).

## JavaScript SMS SDK

This initial release of the SDK allows you to add SMS capabilities to your application. You can send SMS messages, track delivery reports for sent messages and more. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-js/blob/b323328a0152848528b789f20bbada46357b5e33/sdk/communication/communication-sms/README.md).

## Python SMS SDK

This initial release of the SDK allows you to add SMS capabilities to your application. You can send SMS messages, track delivery reports for sent messages and more. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-python/blob/ac9406eebcf1a992c7959840041a637c208809e5/sdk/communication/azure-communication-sms/README.md).

## Java SMS SDK

This initial release of the SDK allows you to add SMS capabilities to your application. You can send SMS messages, track delivery reports for sent messages and more. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-java/blob/cd8bc73a328f1009145956b51fbcf465e235b6a5/sdk/communication/azure-communication-sms/README.md).

## JavaScript Administration SDK

Added phone number administration to purchase and configure phone numbers. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-js/blob/b323328a0152848528b789f20bbada46357b5e33/sdk/communication/communication-administration/README.md).

## .NET Administration SDK

Added phone number administration to purchase and configure phone numbers. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-net/blob/311c797e27d246f2622697da23c6565d04ae75fc/sdk/communication/Azure.Communication.Administration/README.md).

## Java Administration SDK

Added phone number administration to purchase and configure phone numbers. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-java/blob/cd8bc73a328f1009145956b51fbcf465e235b6a5/sdk/communication/azure-communication-administration/README.md).

## Python Administration SDK

Added phone number administration to purchase and configure phone numbers. For more information, please see the [README](https://github.com/Azure/azure-sdk-for-python/blob/ac9406eebcf1a992c7959840041a637c208809e5/sdk/communication/azure-communication-administration/README.md).

## Android Chat SDK

Add chat to your Android application. This initial release of the SDK allows creation of chat to send & receive messages, edit/delete messages, add/remove members from a chat and more. Real-time channel functionality will be available in future releases. For details, see [README](https://github.com/Azure/azure-sdk-for-android/blob/master/sdk/communication/azure-communication-chat/README.md).    

## iOS Chat SDK
Add chat to your iOS application. This initial release of the SDK allows creation of chat to send & receive messages, edit/delete messages, add/remove members from a chat and more. Real-time channel functionality will be available in future releases. For details, see [README](https://github.com/Azure/azure-sdk-for-ios/blob/master/sdk/communication/AzureCommunicationChat/README.md).

## Android Calling SDK - Version 1.0.0-beta.2

* **[Fix]** Fix handing of invalid Push Notification tokens
* **[Fix]** IsMutedUpdated\IsSpeakingUpdated events are now available
* **[Fix]** Fix bug where getCallerIdentity method on CallAgent did not return caller's identifier

## iOS Calling SDK - Version [1.0.0-beta.4](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.4)

* **[Fix]** IsMutedUpdated\IsSpeakingUpdated events are now available
* **[Fix]** Fix bug where group call cannot be started in mute state
* **[Fix]** Removed dependency on quicklookthumbnailing and iosurface frameworks
* **[Fix]** Fix bug where getCallerIdentity method on CallAgent did not return caller's identifier

