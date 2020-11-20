# Release Notes for November 18, 2020

This release will only contain changes for ACS Calling iOS SDK. 

## iOS Calling SDK - Version [1.0.0-beta.5](https://github.com/Azure/Communication/releases/tag/v1.0.0-beta.5)

### New Features
- Cocoapods is available for ACS
- Added Cocoapods specs for AzureCore, AzureCommunication, AzureCommunicationChat and AzureCommunicationCalling SDK's

### Breaking Changes
- Swift applications will not see `ACS` prefix for classes and enums. For e.g. `ACSCallAgent` is now `CallAgent` when Azure Communication Calling SDK is imported in a Swift application.
- Parameter labels are mandatory for all API calls from Swift Applications.
- Except the first argument all other arguments in delegates will need parameter labels in Swift Applications.
- Exception is thrown if an application tries to render video/camera twice.


### Bug Fixes
Among of the problem that we fixed:
- Deadlock when deleting `ACSCallAgent` object
- Call.hangup() method will return only after all necessary events are delivered to the app  ([GitHub Issue 85](https://github.com/Azure/Communication/issues/85))
- Call.hangup() now terminates call if the call is in Connecting or Ringing state ([GitHub Issue 96](https://github.com/Azure/Communication/issues/96))
- Calling SDK was raising RemoteVideoStream removed event when app stopped rendering it. SDK now raises a follow-up RemoteVideoStream added event once the stream is ready to be rendered again. ([GitHub Issue 95](https://github.com/Azure/Communication/issues/95))


## Android Calling SDK - Version 1.0.0-beta.3

### Bug Fixes
* **[Fix]** Call.hangup() method will return only after all necessary events are delivered to the app
* **[Fix]** Call.hangup() now terminates call if the call is in Connecting or Ringing state
* **[Fix]** Calling SDK was raising RemoteVideoStream removed event when app stopped rendering it. SDK now raises a follow-up RemoteVideoStream added event once the stream is ready to be rendered again.
