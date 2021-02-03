This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.0-beta.4

# Bug fixes
1. Fix CallEndReason.subCode lower case 'c' typo 
2. Fix CallAgent.join() api accepting undefined CallContext. Api must now take a GroupLocator or MeetingLocator 

# Breaking API Changes
1. New flow for properties/collection subscriptions.
Application has to inspect current values and subscribe to update events for future values
```js
    // Subscribe to participants currently in a Call
    call.remoteParticipants.forEach(p => {
        subscribeToRemoteParticipant(p);
    })

    call.on('remoteParticipantsUpdated', e => {
        // Subscribe to new participants in the call
        e.added.forEach( p=> {
            subscribeToRemoteParticipant(p)
        })
        e.removed.forEach( p => {
            unsubscribeToRemoteParticipant(p)
        })
    });

    function subscribeToParticipant(p) {
        // Subscribe to participant's current video/screensharing streams
        p.videoStreams.forEach(v => { handleRemoteStream(v) });
        // Subscribe to particiapnt's new video/screensharing streams
        p.on('videoStreamsUpdated', e => {
            e.added.forEach(v => { handleRemoteStream(v) })
        })
    }
}
```
2. Changed Call.callerIdentity variable to Call.callerInfo which is now of type CallerInfo
```js
export declare interface CallerInfo {
    /**
    * Identity of the caller
    */
    identity: CommunicationUserIdentifier | PhoneNumberIdentifier | CallingApplicationIdentifier | MicrosoftTeamsUserIdentifier | UnknownIdentifier | undefined;
}
```

4. Changed Call.isIncoming: boolean to Call.direction: CallDirection
```js
    export declare type CallDirection = 'Incoming' | 'Outgoing';
```

3. Type name changes from @azure/communication-common version beta4
```js
    CommunicationUserCredential -> CommunicationTokenCredential
    CommunicationUser -> CommunicationUserIdentifier
    PhoneNumber -> PhoneNumberIdentifier
    CallingApplication -> CallingApplicationIdentifier
```
Note: @azure/communication-calling beta4 depends on @azure/communication-common beta4

# New features

## Call recording management

Call recording is an extended feature of the core `Call` API. You first need to obtain the recording feature API object:

```js
const callRecordingApi = call.api(Features.Recording);
```

Then, to can check if the call is being recorded, inspect the `isRecordingActive` property of `callRecordingApi`, it returns `Boolean`.

```js
const isResordingActive = callRecordingApi.isRecordingActive;
```

You can also subscribe to recording changes:

```js
const isRecordingActiveChangedHandler = () => {
  console.log(callRecordingApi.isRecordingActive);
};

callRecordingApi.on('isRecordingActiveChanged', isRecordingActiveChangedHandler);
```

## Call Transfer management

Call transfer is an extended feature of the core `Call` API. You first need to obtain the transfer feature API object:

```js
const callTransferApi = call.api(Features.Transfer);
```

Call transfer involves three parties *transferor*, *transferee*, and *transfer target*. Transfer flow is working as following:

1. There is already a connected call between *transferor* and *transferee*
2. *transferor* decide to transfer the call (*transferee* -> *transfer target*)
3. *transferor* should put the call on hold first before invoking `transfer` API
4. *transferor* calls `transfer` API
5. *transferee* decide to whether `accept` or `reject` the transfer request to *transfer target* via `transferRequested` event.
6. *transfer target* will receive an incoming call only if *transferee* did `accept` the transfer request

### Transfer terminology

- Transferor - The one who initiates the transfer request
- Transferee - The one who is being transferred by the transferor to the transfer target
- Transfer target - The one who is the target that is being transferred to

To transfer current call, you can use `transfer` synchronous API. `transfer` takes optional `TransferCallOptions` which allows you to set `disableForwardingAndUnanswered` flag:

- `disableForwardingAndUnanswered` = false - if *transfer target* doesn't answer the transfer call, then it will follow the *transfer target* forwarding and unanswered settings
- `disableForwardingAndUnanswered` = true - if *transfer target* doesn't answer the transfer call, then the transfer attempt will end

```js
// transfer target can be ACS user
const id = { communicationUserId: <ACS_USER_ID> };
```

```js
// call transfer API
const transfer = callTransferApi.transfer({targetParticipant: id});
```

Transfer allows you to subscribe to `transferStateChanged` and `transferRequested` events. `transferRequsted` event comes from `call` instance, `transferStateChanged` event and transfer `state` and `error` comes from `transfer` instance

```js
// transfer state
const transferState = transfer.state; // None | Transferring | Transferred | Failed

// to check the transfer failure reason
const transferError = transfer.error; // transfer error code that describes the failure if transfer request failed
```

Transferee can accept or reject the transfer request initiated by transferor in `transferRequested` event via `accept()` or `reject()` in `transferRequestedEventArgs`. You can access `targetParticipant` information, `accept`, `reject` methods in `transferRequestedEventArgs`.

```js
// Transferee to accept the transfer request
callTransferApi.on('transferRequested', args => {
  args.accept();
});

// Transferee to reject the transfer request
callTransferApi.on('transferRequested', args => {
  args.reject();
});
```


## New 'incomingCall' event for CallAgent
The `CallAgent` instance emits an `incomingCall` event when the logged in identity is receiving an incoming call. To listen to this event subscibe in the following way

```js
const incomingCallHander = async (args: { incomingCall: IncomingCall }) => {
	//accept the call
	var call = await incomingCall.accept();

	//reject the call
	incomingCall.reject();
};
callAgentInstance.on('incomingCall', incomingCallHander);
```
The `incomingCall` event will provide with an instance of `IncomingCall` on which you can accept or reject a call. Please note that Call interface no longer has accept() nor reject() method. These two methods are now part of the IncomingCall interface.
```js
export declare interface IncomingCall {
    readonly id: string;
    accept(options?: AcceptCallOptions): Promise<Call>;
    reject(): Promise<void>;
    on(event: 'callEnded', listener: CallEndedEvent): void;
    off(event: 'callEnded', listener: CallEndedEvent): void;
}
```

## New 'callEnded' event for Call obj
```js
    call.on('callEnded', args => {
        console.log(args.callEndReason);
    });
```

## Other changes
1. New package structure:
    * /dist
        * sdk.bundle.js
    * /dist-esm
        * sdk.bundle.js
    * /types
        * communication-calling.d.ts
    * EULA.txt
    * Notices.txt
    * package.json (Updated)
    * README.md (Updated)
2. Added new package dependencies:
    * @azure/logger version 1.0.0
    * @azure/communication-common version beta4 (calling beta4 depends on common beta4)

