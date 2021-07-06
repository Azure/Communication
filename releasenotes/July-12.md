# Release notes for June 29 - July 12

## Table of contents
* [Azure Portal](#azure-portal)
* [Azure Resource Manager](#azure-resource-manager)
* [Calling](#calling)
* [Chat](#chat)
* [Identity](#identity)
* [Phone Numbers](#phone-numbers)
* [SMS](#sms)

## Azure Portal

## Azure Resource Manager

## Calling

### Android

- [v1.1.0](https://github.com/Azure/Communication/blob/master/releasenotes/acs-calling-android-sdk-release-notes.md#v110-2021-06-29)

#### New Features:
- Ability to dispose of CallAgent and CallAgent using the new `dispose()` method to reduce the memory footprint of the app.

#### Bug fixes
- Support for API level 30 (Android 11.0).
- Silence suppression for Group Calls and Teams meeting interop scenarios is enabled.
- LocalVideoStream.switchSource(VideoDeviceInfo) will throw a `CallingCommunicationException` with `CallingCommunicationErrors.LOCAL_VIDEO_STREAM_SWITCH_SOURCE_FAILURE` error code.
- Attempt to create multiple CallAgent using the same identity will throw a `CallingCommunicationException` with `CallingCommunicationErrors.NO_MULTIPLE_CONNECTIONS_WITH_SAME_IDENTITY` error code.
- Turning the local video off/on quickly shows a blank local video [GH#225](https://github.com/Azure/Communication/issues/225).
- Memory leak Renderer View for LocalVideoStream [GH#224](https://github.com/Azure/Communication/issues/224).

## Chat

## Identity

## Phone Numbers

## SMS



