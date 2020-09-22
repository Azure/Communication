// © Microsoft Corporation. All rights reserved.

using Azure.Communication.Administration;
using System;
using System.Threading.Tasks;

namespace Chat
{
	public class UserTokenManager : IUserTokenManager
    {
        public async Task<(string userMri, string skypeToken, long expiresDateUtc)> GenerateTokenAsync(string resourceConnectionString)
        {
            try
            {
                CommunicationIdentityClient communicationIdentityClient = new CommunicationIdentityClient(resourceConnectionString);
                
                Azure.Response<Azure.Communication.CommunicationUser> userResponse = await communicationIdentityClient.CreateUserAsync();
                Azure.Communication.CommunicationUser user = userResponse.Value;
                Azure.Response<Azure.Communication.Administration.Models.CommunicationUserToken> tokenResponse =
                    await communicationIdentityClient.IssueTokenAsync(user, scopes: new[] { CommunicationTokenScope.Chat });
                string token = tokenResponse.Value.Token;
                DateTimeOffset expiresOn = tokenResponse.Value.ExpiresOn;
                return (user.Id, token, expiresOn.Ticks);
            }
            catch (Azure.RequestFailedException ex)
            {
                Console.WriteLine($"Error occured while Generating Token: {ex}");
                return (null, null, -1);
            }
        }
    }
}
