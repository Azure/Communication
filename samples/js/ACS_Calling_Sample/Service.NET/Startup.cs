// © Microsoft Corporation. All rights reserved.

using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.AspNetCore.SpaServices.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.SpoolCPaaSSamples.Service.Client;

namespace Microsoft.SpoolCPaaSSamples.Service.Calling
{
    public class Startup
    {
        private const string AllowAnyOrigin = nameof(AllowAnyOrigin);

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(new SpoolServiceClient(Configuration["ResourceConnectionString"]));

            // Allow CORS as our client may be hosted on a different domain.
            services.AddCors(options =>
            {
                options.AddPolicy(AllowAnyOrigin,
                builder =>
                {
                    builder.AllowAnyOrigin().AllowCredentials().AllowAnyMethod().AllowAnyHeader();
                });
            });
            services.AddResponseCompression();

            services.AddMvc();

            services.AddSingleton<ISpaStaticFileProvider>(configuration =>
            {
                var env = configuration.GetService<IHostingEnvironment>();
                return new SpaStaticFileProvider()
                {
                    FileProvider = env.IsDevelopment() ?
                        null :
                        new PhysicalFileProvider(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "ClientBuild"))
                };
            });
            
            return services.BuildServiceProvider();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseCors(AllowAnyOrigin);
            app.UseResponseCompression();
            app.UseMvc();

            app.UseSpa(spa =>
            {
            // on Development environment serve files by proxying to 'webpack-dev-server'. Make sure you run 'npm run start' from ClientApp folder
            if (env.IsDevelopment())
            {
                spa.UseProxyToSpaDevelopmentServer("http://127.0.0.1:8081/");
            }
            else
            {
                spa.Options.SourcePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "ClientBuild");
                }
            });
        }
    }
}