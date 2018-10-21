using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RepairTracking.Web.Configuration;

namespace RepairTracking.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddConnectionProviderMySql(Configuration)
                .AddSecurity(Configuration)
                .ConfigureService()
                .ConfigureRepositories();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
         IHostingEnvironment env,
         IServiceProvider serviceProvider)
        {
            app.UseAuthentication();
            app.Configure(env);
            serviceProvider.CreateRoles().Wait();
            serviceProvider.CreateAdmin().Wait();
        }
    }
}
