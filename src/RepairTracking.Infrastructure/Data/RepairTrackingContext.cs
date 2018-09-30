using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using RepairTracking.Infrastructure.Security;

namespace RepairTracking.Infrastructure.Data
{
    public class RepairTrackingContext : IdentityDbContext<RepairTrackingUser>
    {
        public RepairTrackingContext(DbContextOptions<RepairTrackingContext> options)
            : base(options)
        {
        }
    }
}