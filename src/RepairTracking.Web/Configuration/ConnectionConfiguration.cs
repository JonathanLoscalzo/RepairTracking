using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace RepairTracking.Web.Configuration
{
    public static class ConnectionConfiguration
    {
        public static IServiceCollection AddConnectionProviderMySql(this IServiceCollection services, IConfiguration configuration)
        {
            var connection = configuration.GetConnectionString("RepairTracking");

            services.AddDbContext<RepairTracking.Infrastructure.Data.RepairTrackingContext>(options => options.UseMySql(connection, opt => opt.MigrationsAssembly("RepairTracking.Infrastructure")));

            return services;
        }
    }
}