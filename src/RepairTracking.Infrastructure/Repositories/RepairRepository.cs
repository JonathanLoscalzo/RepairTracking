using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RepairTracking.Core.Entities;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Infrastructure.Data;

namespace RepairTracking.Infrastructure.Repositories
{
    public class RepairRepository : Repository<Repair>, IRepairRepository
    {
        public RepairRepository(RepairTrackingContext dbContext) : base(dbContext)
        {
        }

        public override List<Repair> FetchAll()
        {
            return _dbContext
                .Set<Repair>()
                .Include(x => x.Element)
                .Where(x => x.IsActive)
                .ToList();
        }

        public Repair GetByCode(string code)
        {
            return _dbContext.Set<Repair>().FirstOrDefault(e => e.Code == code);
        }

        // public override void Update(Repair entity)
        // {
        //     var piecesToDelete = _dbContext.Set<Piece>()
        //         .Where(x => x.ElementId == entity.Id && !entity.Pieces.Any(y => y.Id == x.Id));
        //     foreach (var item in piecesToDelete)
        //     {
        //         item.IsActive = false;
        //     }

        //     var tasksToDelete = _dbContext.Set<Task>()
        //         .Where(x => x.ElementId == entity.Id && !entity.Tasks.Any(y => y.Id == x.Id));
        //     foreach (var item in tasksToDelete)
        //     {
        //         item.IsActive = false;
        //     }

        //     base.Update(entity);
        // }

        public override void Delete(Repair entity)
        {
            _dbContext.Set<Repair>().Attach(entity);
            entity.IsActive = false;

            _dbContext.SaveChanges();
        }
    }
}