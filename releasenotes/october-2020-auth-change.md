# Breaking Change - November 3, 2020

### We are keep improving our service! But changes affect you , please read this.

Currently developers are **allowed but not required** to request the scopes for the tokens. Please refer here for the [Access Token scopes](https://docs.microsoft.com/azure/communication-services/quickstarts/access-tokens?pivots=programming-language-javascript). However we have not enforced the VoIP and PSTN scopes. Meaning you could make a VoIP call with  "chat" only  or "pstn" only scope in your token.

Starting 9:00AM November 3, 2020, Pacific time, we will start deploying a service update to enforce the presence of 'voip' scope for voip and pstn calls. That means if you have a token with chat only or 'pstn' only scope, you will not be able to make a voip or pstn call. All voip and pstn calls should carry the mandatory 'voip' scope in token.

We will be reaching out to customers who might experience call failures due to start of 'voip' scope enforcement. We highly encourage you to review how you issue new tokens, and if you need to have ability to make PSTN or VoIP calls, please ensure you issue tokens with correct scopes (VoIP for VoIP and PSTN).

Please direct any urgent escalation to [acsfeedback@microsoft.com](mailto:acsfeedback@microsoft.com) or file an issue in this repo.
