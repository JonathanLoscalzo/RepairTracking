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
                .Where(x => x.IsActive)
                .ToList();
        }

        public override void Update(Element entity)
        {
            var piecesToDelete = _dbContext.Set<Piece>()
                .Where(x => x.ElementId == entity.Id && !entity.Pieces.Any(y => y.Id == x.Id));
            foreach (var item in piecesToDelete)
            {
                item.IsActive = false;
            }

            var tasksToDelete = _dbContext.Set<Task>()
                .Where(x => x.ElementId == entity.Id && !entity.Tasks.Any(y => y.Id == x.Id));
            foreach (var item in tasksToDelete)
            {
                item.IsActive = false;
            }

            base.Update(entity);
        }

        public override void Delete(Element entity)
        {
            _dbContext.Set<Element>().Attach(entity);
            entity.IsActive = false;
            var pieces = _dbContext.Set<Piece>().Where(x => x.ElementId == entity.Id);

            foreach (var item in pieces)
            {
                item.IsActive = false;
            }

            foreach (var item in _dbContext.Set<Task>().Where(x => x.ElementId == entity.Id))
            {
                item.IsActive = false;
            }

            _dbContext.SaveChanges();
        }
    }
}