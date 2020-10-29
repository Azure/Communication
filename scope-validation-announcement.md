# Breaking Change - November 3, 2020

### We are keep improving our service! But we changes affect you , please read this.

Currently developers are **allowed but not required** to request the scopes for the tokens. Please refer here for the [Access Token scopes](https://docs.microsoft.com/azure/communication-services/quickstarts/access-tokens?pivots=programming-language-javascript). However we have not enforced the VoIP and PSTN scopes. Meaning you could make a VoIP call with  a chat only scope in your token.

Starting 9:00AM November 3, 2020, Seattle time, we will start deploying a service update to enforce the presence of 'voip' scope for voip and pstn calls. That means if you have a token with chat only scope you will not be able to make a call.

We will monitor telemetry to find affected customers and are reaching out to customers who might experience issues. However, we highly encourage everyone to pro-actively review your token management flows and ensure you are correctly requesting necessary scopes.

Please any urgent escalation send to [acsfeedback@microsoft.com](mailto:acsfeedback@microsoft.com) or file an issue in this repo.
