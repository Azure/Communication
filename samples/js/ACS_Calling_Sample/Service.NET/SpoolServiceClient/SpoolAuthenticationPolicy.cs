// © Microsoft Corporation. All rights reserved.

using Azure.Core;
using Azure.Core.Pipeline;
using System;
using System.Globalization;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Microsoft.SpoolCPaaSSamples.Service.Client
{
    internal class SpoolAuthenticationPolicy : HttpPipelinePolicy
    {
        private readonly byte[] _secret;
        private readonly SpoolsServiceCredential _spoolsServiceCredential;

        public SpoolAuthenticationPolicy(SpoolsServiceCredential spoolsServiceCredential)
        {
            _secret = Convert.FromBase64String(spoolsServiceCredential.Secret);
            _spoolsServiceCredential = spoolsServiceCredential;
        }

        public override void Process(HttpMessage message, ReadOnlyMemory<HttpPipelinePolicy> pipeline)
        {
            var contentHash = CreateContentHash(message);
            SignRequest(message, contentHash);
            ProcessNext(message, pipeline);
        }

        public override async ValueTask ProcessAsync(HttpMessage message, ReadOnlyMemory<HttpPipelinePolicy> pipeline)
        {
            var contentHash = await CreateContentHashAsync(message).ConfigureAwait(false);
            SignRequest(message, contentHash);
            await ProcessNextAsync(message, pipeline).ConfigureAwait(false);
        }

        private static string CreateContentHash(HttpMessage message)
        {
            var alg = SHA256.Create();

            using (var memoryStream = new MemoryStream())
            using (var contentHashStream = new CryptoStream(memoryStream, alg, CryptoStreamMode.Write))
            {
                message.Request.Content?.WriteTo(contentHashStream, message.CancellationToken);
            }

            return Convert.ToBase64String(alg.Hash);
        }

        private static async ValueTask<string> CreateContentHashAsync(HttpMessage message)
        {
            var alg = SHA256.Create();

            using (var memoryStream = new MemoryStream())
            using (var contentHashStream = new CryptoStream(memoryStream, alg, CryptoStreamMode.Write))
            {
                if (message.Request.Content != null)
                {
                    await message.Request.Content.WriteToAsync(contentHashStream, message.CancellationToken).ConfigureAwait(false);
                }
            }

            return Convert.ToBase64String(alg.Hash);
        }

        private string ComputeHash(string value)
        {
            var hmac = new HMACSHA256(_secret);
            return Convert.ToBase64String(hmac.ComputeHash(Encoding.ASCII.GetBytes(value)));
        }

        private void SignRequest(HttpMessage message, string contentHash)
        {
            const string signed_headers = "x-ms-date;host;x-ms-content-sha256";
            var date = DateTime.UtcNow.ToString("r", CultureInfo.InvariantCulture);
            var uri = message.Request.Uri.ToUri();
            var host = uri.Host;
            var pathAndQuery = uri.PathAndQuery;
            var method = message.Request.Method.Method;

            var stringToSign = $"{method}\n{pathAndQuery}\n{date};{host};{contentHash}";
            var sig = ComputeHash(stringToSign);
            var authHeader = $"HMAC-SHA256 Credential={_spoolsServiceCredential.Id}&SignedHeaders={signed_headers}&Signature={sig}";

            message.Request.Headers.SetValue("x-ms-date", date);
            message.Request.Headers.SetValue("x-ms-content-sha256", contentHash);
            message.Request.Headers.SetValue(HttpHeader.Names.Authorization, authHeader);
        }
    }
}
