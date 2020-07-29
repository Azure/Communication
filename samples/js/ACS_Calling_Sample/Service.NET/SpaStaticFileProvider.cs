// © Microsoft Corporation. All rights reserved.

using Microsoft.AspNetCore.SpaServices.StaticFiles;
using Microsoft.Extensions.FileProviders;

namespace Microsoft.SpoolCPaaSSamples.Service.Calling
{

    internal class SpaStaticFileProvider : ISpaStaticFileProvider
    {
        public IFileProvider FileProvider { get; set; }
    }
}