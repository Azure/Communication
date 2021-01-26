# Release Notes for January 26, 2021

Released 1.0.0-beta.4 of JS @azure/communication-common and @azure/communication-administration

We've published new npm packages for common and administration, please update your dependencies to the latest. 

<br/>`npm install @azure/communication-common@latest`

Highlights include the addition of the new MicrosoftTeamsUserIdentifier and paging bug fixes.

## communication-common 1.0.0-beta.4 (2021-01-25) 

### Added

*   Added MicrosoftTeamsUserIdentifier and isMicrosoftTeamsUserIdentifier.
*   Added optional id property to communication identifiers.
	
### Breaking Changes

*  	Changed identifier kind property to use lowerCamelCase.
*   Renamed CommunicationUserCredential to CommunicationTokenCredential.
*   Renamed RefreshOptions to CommunicationTokenRefreshOptions.
*   Renamed Identifier to CommunicationIdentifier.
*   Renamed IdentifierKind to CommunicationIdentifierKind.
*   Renamed PhoneNumber to PhoneNumberIdentifier.	
*   Renamed isPhoneNumber to isPhoneNumberIdentifier.
*   Renamed CommunicationUser to CommunicationUserIdentifier.	
*   Renamed isCommunicationUser to isCommunicationUserIdentifier.
*   Renamed CallingApplication to CallingApplicationIdentifier.
*   Renamed isCallingApplication to isCallingApplicationIdentifier.
	
## communication-administration 1.0.0-beta.4 (2021-01-25)

### Added

*   CommunicationIdentityClient added a constructor that supports TokenCredential.	
*   PhoneNumberAdministrationClient added a constructor that supports TokenCredential.

### Breaking Changes

*   Replaced CommunicationUser with CommunicationUserIdentifier.
	
### Key bug fixes

*   Fixed a bug where poller options were ignored for beginReleasePhoneNumbers, beginReservePhoneNumbers and beginPurchaseReservation.	
*   Fixed paging for listPhoneNumbers, listPhonePlanGroups, listPhonePlans, listReleases, listSearches, listSupportedCountries.
