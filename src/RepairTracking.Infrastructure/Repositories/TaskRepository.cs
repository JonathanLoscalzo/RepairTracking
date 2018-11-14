using RepairTracking.Core.Entities;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Infrastructure.Data;

namespace RepairTracking.Infrastructure.Repositories
{
    public class TaskRepository : Repository<TaskGeneric>, ITaskRepository
    {
        public TaskRepository(RepairTrackingContext dbContext) : base(dbContext)
        {
        }
    }
}