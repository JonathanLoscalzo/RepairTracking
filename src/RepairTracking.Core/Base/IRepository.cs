using System.Collections.Generic;

namespace RepairTracking.Core.Base
{
    public interface IRepository<TEntity>
    {
        List<TEntity> FetchAll();
        TEntity GetById(string id);
        TEntity Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        void Save();
    }
}