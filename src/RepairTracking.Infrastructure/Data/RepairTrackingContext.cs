using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using RepairTracking.Infrastructure.Security;
using RepairTracking.Core.Entities;
using RepairTracking.Core.ValueObjects;

namespace RepairTracking.Infrastructure.Data
{
    public class RepairTrackingContext : IdentityDbContext<RepairTrackingUser>
    {
        public RepairTrackingContext(DbContextOptions<RepairTrackingContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Element> Elements { get; set; }
        public DbSet<Piece> Pieces { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}