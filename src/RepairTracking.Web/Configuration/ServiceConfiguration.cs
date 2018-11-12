using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Infrastructure.Repositories;

namespace RepairTracking.Web.Configuration
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection ConfigureRepositories(this IServiceCollection services)
        {
            services.AddAutoMapper();
            services.AddTransient<IClientRepository, ClientRepository>();
            services.AddTransient<IElementRepository, ElementRepository>();
            return services;
        }
    }
}