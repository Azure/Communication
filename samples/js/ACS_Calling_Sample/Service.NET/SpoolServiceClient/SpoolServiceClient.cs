// © Microsoft Corporation. All rights reserved.

using Azure.Core;
using Azure.Core.Pipeline;
using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Microsoft.SpoolCPaaSSamples.Service.Client
{
    public class SpoolServiceClient
    {
        private readonly SpoolsServiceCredential _spoolsServiceCredential;
        private readonly HttpPipeline _pipeline;

        public SpoolServiceClient(string connectionString, ClientOptions clientOptions = default)
        {
            _spoolsServiceCredential = new SpoolsServiceCredential(connectionString);
            _pipeline = HttpPipelineBuilder.Build(new SpoolServiceClientOptions(), new SpoolAuthenticationPolicy(_spoolsServiceCredential));
        }

        public async Task<JObject> GetUserToken(string userId, CancellationToken cancellationToken = default)
        {
            var request = _pipeline.CreateRequest();
            request.Method = RequestMethod.Post;
            request.Uri.Reset(new Uri($"https://ppe.plat.teams.microsoft.com/rtcgateway/tokenService/{_spoolsServiceCredential.Id}/{userId}" ));

            var response = await _pipeline.SendRequestAsync(request, cancellationToken).ConfigureAwait(false);
            using (var reader = new StreamReader(response.ContentStream))
            {
                string content = await reader.ReadToEndAsync().ConfigureAwait(false);

                return JObject.Parse(content);
            }
        }
    }
}
