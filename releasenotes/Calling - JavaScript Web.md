# Release notes
## JavaScript 
### v1.0.1-beta.1 (March 30, 2021)

This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.1-beta.1

Available in NPM - [https://www.npmjs.com/package/@azure/communication-calling/v/1.0.1-beta.1](https://www.npmjs.com/package/@azure/communication-calling/v/1.0.1-beta.1)

**Beta release**

Please note about the [feature set](https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/calling-sdk-features) and [known issues](https://docs.microsoft.com/en-us/azure/communication-services/concepts/known-issues)

Moving forward, we will be having two versions of the SDKs:

* v x.x.x-Beta.x - the SDK versions provide access to new functionality, which is not at the General Availability milestone. E.g., **Teams Interoperability is supported in the Beta versions.**
* v x.x.x - the version of the SDK that at General Availability. Azure Communication Services provide full SLA for these SDKs


# Bugfixes
1. Fixed [Web 1.0.0-beta.10 - remoteParticipantsUpdated event is not triggered when Teams user is leaving a meeting](https://github.com/Azure/Communication/issues/238)


---------------------------------------
### v1.0.0 (March 29, 2021)
- General Availblity

Please note about the [feature set](https://docs.microsoft.com/en-us/azure/communication-services/concepts/voice-video-calling/calling-sdk-features) and [known issues](https://docs.microsoft.com/en-us/azure/communication-services/concepts/known-issues)

Moving forward, we will be having two versions of the SDKs:

* v x.x.x-Beta.x - the SDK versions provide access to new functionality, which is not at the General Availability milestone. E.g., Teams Interoperability is supported in the Beta versions.
* v x.x.x - the version of the SDK that at General Availability. Azure Communication Services provide full SLA for these SDKs

---------------------------------------
### v1.0.0-beta.10 (March 24, 2021)
This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.0-beta.10

# Breaking API Changes
1. v1.0.0-beta.10 takes dependency on @azure/communication-common@1.0.0-beta.6 and @azure/logger@^1.0.2
2. `CallingApplicationIdentifier` and `CallingApplicationKind`were removed starting from @azure/communication-common@1.0.0-beta.6
Applications that were relying on them can still leverage generic `UnknownIdentifier` and `UnknownIdentifierKind`

    2.1 Call `addParticipant` method doesn't accept `CallingApplicationIdentifier` anymore

    2.2 Call `removeParticipant` method doesn't accept `CallingApplicationIdentifier` anymore

    2.3 CallAgent `startCall`  method doesn't accept `CallingApplicationIdentifier` anymore

    2.4 `CallerInfo` doesn't expose `CallingApplicationIdentifier` anymore as one of the `identifier` types, it will use `UnknownIdentifier` as a fallback

    2.5 `RemoteParticipant` `identifier` property doesn't expose `CallingApplicationIdentifier` anymore, it will use `UnknownIdentifier` as a fallback

3. `isMicrophoneMuted` changed to `isMuted`, if `isMuted` is set to `true` it indicates that local user is muted because of
* application called `mute()` method on the Call object and it resolved
* in Teams interop scenarios - Teams user muted ACS user
* in Teams interop scenarios - Teams user triggered 'mute all' feature for all participants in the meeting

    3.1 `isMutedChanged` event was introduced on the `Call` object

4. `VideoDeviceInfo` - `cameraFacing` property was removed

5. `Renderer` class was renamed to `VideoStreamRenderer`
6. `RendererOptions` type used in `createView` method on `Renderer` is now called `CreateViewOptions`
7. `createView` now returns `VideoStreamRendererView` type instead of `RendererView`



# Other changes

## Logger
CallClient doesn't accept `AzureLogger` instance in options, instead application can control logs by importing `setLogLevel` function and 
calling it with appropriate log level
**Example**
```js
import { setLogLevel } from '@azure/logger';

// configure log level
setLogLevel('verbose');

const callClient = new CallClient();
```

[More about @azure/logger](https://www.npmjs.com/package/@azure/logger)

## Errors
Whenever ACS Calling library throws an error, it will contain improved error message, with additional details.

## IncomingCall
`IncomingCall` changes
* added `callEndReason` property of a `CallEndReason` type that indicates why call ended* 

## Prevent race conditions when rendering stream
To prevent race condition where `VideoStreamRendererView` is used to render a `RemoveVideoStream` that becomes unavailable ( `isAvailable` changes to `false` )
`VideoStreamRendererView` will be automatically disposed
* when stream `isAvailable` changes to `false` while `createView()` promise is still pending, `createView()` promise will be rejected


---------------------------------------
### v1.0.0-beta.9 (March 8, 2021)
This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.0-beta.8 and v1.0.0-beta.9

# Bug fixes
### v1.0.0-beta.8
Media quality improvements - more stabile and uniform quality in all scenarios

### v1.0.0-beta.9
Fixed issue for Safari - DeviceManager.askDevicePermission - when called with both audio:true, video: true, after stream is already acquired for a given device, was loosing track of acquired stream. Since 1.0.0-beta.9, ACS Calling SDK will split these calls into 2 prompts on Safari.

# Breaking API Changes
1. CallState - removed 'Incoming' state, this state is now invalid since 1.0.0-beta.4 introduced IncomingCall


# New features

## Support for multiple CallClient instances
CallClient can now be instantiated multiple times
* each instance can then be used to create new CallAgent instance using `async createCallAgent` API
* you can create only one CallAgent instance from each CallClient instance
* each CallAgent instance must be initialized for a different user, by implementing and passing user specific `CommunicationTokenCredential`

**Example**
```js
const callClientUser1 = new CallClient();
const callAgentUser1 = await callClientUser1.createCallAgent(communicationTokenCredentialForUser1, {displayName: 'User1'});
const callClientUser2 = new CallClient();
const callAgentUser2 = await callClientUser2.createCallAgent(communicationTokenCredentialForUser2, {displayName: 'User2'});
```

## Access DeviceManager without creating CallAgent instance
CallClient API to get DeviceManager instance - `async getDeviceManager()` can now be called prior to initialization of CallAgent instance

**Example**
```js
const callClient = new CallClient();
const deviceManager = await callClient.getDeviceManager();
await deviceManager.getCamears();
```
This allows developers to implement UX where user can manage devices or create preview of local camera before user context is known.

## Call transcription 

Call transcription is an extended feature of the core `Call` API. 
In the Teams interop scenarios, when a Teams user starts 'Transcription' on a Teams side,
your application must notify the user that call is being actively transcribed due to privacy reasons.

You first need to obtain the transcription feature API object

**Example**
```js
const callTranscriptionApi = call.api(Features.Transcription);
```

Then, you can check if the audio in the call is being transcribed, inspect the `isTranscriptionActive` property of `callTranscriptionApi`, it returns `Boolean`

**Example**
```js
const isTranscriptionActive = callTranscriptionApi.isTranscriptionActive;
```

You can also subscribe to transcription state changes

**Example**
```js
const isTranscriptionActiveChangedHandler = () => {
  console.log(callTranscriptionApi.isTranscriptionActive);
};
callRecordingApi.on('isTranscriptionActiveChanged', isTranscriptionActiveChangedHandler);
```

To unsubscribe your event handler call

**Example**
```js
callRecordingApi.off('isTranscriptionActiveChanged', isTranscriptionActiveChangedHandler);
```
