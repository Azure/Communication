// © Microsoft Corporation. All rights reserved.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace Chat
{
	public class Startup
    {
        private const string AllowAnyOrigin = nameof(AllowAnyOrigin);

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddContosoServices(Configuration.GetSection("ContosoChat"));

            // Allow CORS as our client may be hosted on a different domain.
            services.AddCors(options =>
            {
                options.AddPolicy(AllowAnyOrigin, builder =>
                {
                    builder.SetIsOriginAllowed(origin => true);
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                    builder.AllowCredentials();
                });
            });

            services.AddRazorPages();
            services.AddControllers()
                .AddNewtonsoftJson();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseCors(AllowAnyOrigin);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
            });

            app.UseCors(AllowAnyOrigin);

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                spa.Options.StartupTimeout = TimeSpan.FromSeconds(180);
                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start --max_old_space_size=4096");
                }
            });
        }
    }
}
