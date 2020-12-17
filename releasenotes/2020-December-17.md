# Release Notes for December 16, 2020

This release contains following changes for ACS Android(Java) SDK. 

## Version 1.0.0-beta.5

## New Features
1. Support for armeabi-v7a and x86 ABI
2. Ability to set Caller display name when initializing the SDK

### Usage example
```java
CommunicationUserCredential communicationUserCredential = new CommunicationUserCredential(<USER ACCESS TOKEN>);
CallClient callClient = new CallClient(); 
CallAgentOptions callAgentOptions = new CallAgentOptions();
callAgentOptions.setDisplayName("Alice display name");
Context appContext = this.getApplicationContext(); // From within an Activity class
CallAgent callAgent = callClient.createCallAgent(appContext, communicationUserCredential, callAgentOptions)
```

## Bug fixes
1. Handle push notification payload on CallAgent throwing an exception
