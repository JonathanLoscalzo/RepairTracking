using System.Linq;
using Microsoft.EntityFrameworkCore;
using RepairTracking.Core.Entities;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Infrastructure.Data;

namespace RepairTracking.Infrastructure.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(RepairTrackingContext dbContext) : base(dbContext)
        {
        }

        public override Client GetById(string id) => _dbContext.Clients
                .Include(x => x.Address)
                .Include(x => x.Document)
                .Include(x => x.Repairs)
                .SingleOrDefault(e => e.Id == id);
    }

    
}