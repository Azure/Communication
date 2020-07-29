// © Microsoft Corporation. All rights reserved.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Microsoft.SpoolCPaaSSamples.Service.Client
{
    public class SpoolsServiceCredential
    {
        private const string EndpointKey = "endpoint";
        private const string IdKey = "id";
        private const string SecretKey = "secret";

        private static readonly char[] SegmentSeparator = { ';' };
        private static readonly char[] KeyValueSeparator = { '=' };

        public Uri Endpoint { get; }
        public string Id { get; }
        public string Secret { get; }


        public SpoolsServiceCredential(string connectionString)
        {
            var segments = connectionString.Split(SegmentSeparator, StringSplitOptions.RemoveEmptyEntries);
            if (segments.Length != 3)
            {
                throw new ArgumentException("Invalid connection string.", nameof(connectionString));
            }

            var dict = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            foreach (var segment in segments)
            {
                var kvp = segment.Split(KeyValueSeparator, 2);
                var key = kvp[0].Trim();
                if (dict.ContainsKey(key))
                {
                    throw new ArgumentException($"Duplicate properties found in connection string: {key}.");
                }

                dict.Add(key, kvp[1].Trim());
            }

            if (dict.TryGetValue("endpoint", out var endpoint) &&
                dict.TryGetValue("issuer", out var issuer) &&
                dict.TryGetValue("accessKey", out var accessKey))
            {
                this.Endpoint = new Uri(endpoint);
                this.Id = issuer.Split('/').Last();
                this.Secret = accessKey;
            }
            else
            {
                throw new ArgumentException("Invalid connection string.", nameof(connectionString));
            }
        }
    }
}
