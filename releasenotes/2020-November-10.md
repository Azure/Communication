# Release Notes for November 10, 2020

This release will only contain changes for ACS Web (JavaScript) SDK. 

## Bug fixes
* Call.callEndReason is undefined when Call terminates issue was fixed and now will be populated with a code and sub-code which determine the reason why the call terminated.
* Call terminates when there is only 1 participant left in the call ([GitHub Issue 68](https://github.com/Azure/Communication/issues/68)) was fixed and now call will stay connected if there is only 1 participant left in the call.


## New features

* New APIs to join Teams meetings by using meeting link or meeting coordinates:
<br/>`CallAgent.join(context: MeetingLinkContext, options?: JoinCallOptions): Call;`
<br/>`CallAgent.join(context: MeetingCoordinatesContext, options?: JoinCallOptions): Call;`
