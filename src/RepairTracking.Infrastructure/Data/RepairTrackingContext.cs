using Microsoft.EntityFrameworkCore;

namespace RepairTracking.Infrastructure.Data
{
    public class RepairTrackingContext : DbContext
    {
        public RepairTrackingContext(DbContextOptions<RepairTrackingContext> options)
            : base(options)
        {
        }
    }
}