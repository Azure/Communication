// © Microsoft Corporation. All rights reserved.

using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SpoolCPaaSSamples.Service.Client;

namespace Microsoft.SpoolCPaaSSamples.Service.Controllers
{
    [Route("/userToken")]
    public class UserTokenController : Controller
    {
        private readonly SpoolServiceClient _spoolServiceClient;

        public UserTokenController(SpoolServiceClient spoolServiceClient)
        {
            _spoolServiceClient = spoolServiceClient;
        }

        /// <summary>
        /// Gets all endpoints in the nexus.
        /// </summary>
        /// <param name="nexusId">The nexus id.</param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAsync([FromQuery] string userId)
        {
            return this.Ok(await _spoolServiceClient.GetUserToken(userId).ConfigureAwait(false));
        }
    }
}
