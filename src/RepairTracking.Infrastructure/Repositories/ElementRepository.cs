using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RepairTracking.Core.Entities;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Infrastructure.Data;

namespace RepairTracking.Infrastructure.Repositories
{
    public class ElementRepository : Repository<Element>, IElementRepository
    {
        public ElementRepository(RepairTrackingContext dbContext) : base(dbContext)
        {
        }

        public override List<Element> FetchAll()
        {
            return _dbContext
                .Set<Element>()
                .Include(x => x.Pieces)
                .Include(x => x.Tasks)
                .ToList();
        }
    }
}