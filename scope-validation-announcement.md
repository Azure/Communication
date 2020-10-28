# We are keep improving our service! But we might affect you , please read this.
With the initial release of the ACS we allowed to request the scopes for the tokens. Please refer here for the [Access Token scopes](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/access-tokens?pivots=programming-language-javascript)

However we have not enforced the VoIP and PSTN scopes. Meaning you could make a call with  a chat only scope in your token.

Starting tomorrow we will start rolling out the update to enforce the scopes. That means if you have a token with chat only scope you will not be able to make a call.

We will watch the telemetry to see affected customers and will be reaching out to customers who might experience the issues. However, we highly encourage you to review the tokens you have and if you need to have ability to make PSTN or VoIP calls, please ensure your token has the VoIP scope. 

Please any urgent escalation send to acsfeedback@microsoft.com
