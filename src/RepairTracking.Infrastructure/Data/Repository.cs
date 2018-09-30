using System.Collections.Generic;
using System.Linq;
using RepairTracking.Core.Base;

namespace RepairTracking.Infrastructure.Data
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly RepairTrackingContext _dbContext;

        public Repository(RepairTrackingContext dbContext)
        {
            _dbContext = dbContext;
        }

        public virtual T GetById(string id)
        {
            return _dbContext.Set<T>().SingleOrDefault(e => e.Id == id);
        }

        public virtual T Add(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            _dbContext.SaveChanges();

            return entity;
        }

        public virtual void Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            _dbContext.SaveChanges();
        }

        public virtual void Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
            // _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }

        public virtual List<T> FetchAll()
        {
            return _dbContext.Set<T>().ToList();
        }

        public virtual void Save() => _dbContext.SaveChanges();
    }
}