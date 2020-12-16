# Release Notes for December 16, 2020

This release contains following changes for ACS Web (JavaScript) SDK. 

## Version 1.0.0-beta.3

## Bug fixes
1.  Call.unhold() API can now be called right after Call.hold() API without having to wait for Call.hold() API to resolve.
2.  Fixes to allow consumption of library with as a ES5 bundle ( enables support for EmberJs framework )

## Breaking API changes
1.  Display name of an ACS user is now passed in CallClient.createCallAgent() API as an optional argument and it is immutable.
`callAgent.updateDisplayName` API is deprecated.
### New interface
```ts
export class CallClient {
  // ...
  public async createCallAgent(tokenCredential: CommunicationUserCredential, options?: CallAgentOptions): Promise<CallAgent>
}

export interface CallAgentOptions {
    /**
     * Specify the display name of the local participant for all new calls.
     */
    displayName?: string;
}
```
### Usage example
```ts
    const tokenCredential = new AzureCommunicationUserCredential("<USER ACCESS TOKEN>");
    callAgent = await callClient.createCallAgent(tokenCredential, {displayName: 'optional ACS user name'});
```
2.  Changed join group call API to now take a GroupLocator:

### New interface
```ts
export class CallAgent {
  // ...
  join(groupLocator: GroupLocator, options?: JoinCallOptions): Call;
}
/**
 * Locator used for joining a group call.
 * @public
 */
export interface GroupCallLocator {
    groupId: string;
}
```
### Usage example
```ts
    const groupLocator = { groupId: '<GROUP_ID>'};
    callAgent.join(groupLocaltor, {});
```
3.  Changed join Teams meeting api to now take a MeetingLocaltor:
### New interface
```ts
/**
 * @beta
 * Locator used for joining a meeting with meeting link.
 */
export interface TeamsMeetingLinkLocator {
    meetingLink: string;
}

/**
 * @beta
 * Locator used for joining a meeting with meeting coordinates.
 */
export interface TeamsMeetingCoordinatesLocator {
    threadId: string;
    organizerId: string;
    tenantId: string;
    messageId: string;
}

/**
 * @beta
 * Type of Meeting locator.
 */
export type MeetingLocator = TeamsMeetingLinkLocator | TeamsMeetingCoordinatesLocator;

export class CallAgent {
  // ...
  /**
     * @beta
     * Join a meeting.
     * @param meetingLocator - Meeting information.
     * @param options - Call start options.
     * @returns The Call object associated with the call.
     */
    join(meetingLocator: MeetingLocator, options?: JoinCallOptions): Call;
}
```

### Usage example

```ts
  const teamsMeetingLinkLocator = { meetingLink: '<TEAMS_MEETING_URL>'};
  callAgent.join(teamsMeetingLinkLocator, {});
```
4.  Teams/ACS meeting interop - ACS Calling SDK will not expose any Teams bots ( e.g. Recording ) through 'remoteParticipants' collection.
    Application can inspect & subscribe to isRecordingActive property to discover if current call is recorded
5.  Call.startVideo(localVideoStream: LocalVideoStream) API must now take a LocalVideoStream object as an argument
6.  LocalVideoStream constructor must now take VideoDeviceInfo as an argument

