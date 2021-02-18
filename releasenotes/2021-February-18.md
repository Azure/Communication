This release notes contain new changes for ACS Calling Web (JavaScript) SDK v1.0.0-beta.6

# Breaking API Changes
1. CallerInfo interface changes:
    1. identity property has been replaced by `identifier`
    2. optional `displayName` property which is useful for incoming call scenario
2. DeviceAccess interface changes:
    1. `audio` property is not optional anymore, it will be always returned
    2. `video` property is not optional anymore, it will be always returned
3. New interface `PermissionConstraints`
    ```js
        export interface PermissionConstraints {
            audio: boolean;
            video: boolean;
        }
    ```
4. DeviceManager interface changes:
    1. askDevicePermission method uses the new `PermissionConstraints` interface:  
       askDevicePermission(audio: boolean, video: boolean) -> askDevicePermission(permissionConstraints: PermissionConstraints)
5. RendererView interface changes:
    1. mirrored property has been replaced by `isMirrored`
6. RendererOptions interface changes:
    1. mirrored property has been replaced by `isMirrored`
7. IncomingCall interface changes:
    1. new readonly property `callerInfo` of type CallerInfo has been added
