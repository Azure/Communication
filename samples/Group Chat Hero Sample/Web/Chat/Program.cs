// © Microsoft Corporation. All rights reserved.

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Chat
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine("Creating web host");

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            return WebHost
                .CreateDefaultBuilder(args)
                .UseStartup<Startup>();
        }
    }
}