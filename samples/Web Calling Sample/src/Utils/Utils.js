import { isCommunicationUser, isPhoneNumber, isCallingApplication } from '@azure/communication-common';

export const utils = {
    getAppServiceUrl: () => {
        return window.location.origin;
    },
    provisionNewUser: async (userIdentity) => {
        console.log('userIdentity: ', userIdentity);
        let response = await fetch('/tokens/provisionUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({userIdentity: userIdentity.value.trim()})
        });

        if (response.ok)
        {
            return response.json();
        }

        throw new Error('Invalid token response');
    },
    getIdentifierText: (identifier) => {
        if (isCommunicationUser(identifier)) {
            return identifier.communicationUserId;
        } else if (isPhoneNumber(identifier)) {
            return identifier.phoneNumber;
        } else if(isCallingApplication(identifier)) {
            return identifier.callingApplicationId;
        } else {
            return 'Unknwon Identifier';
        }
    }
}
