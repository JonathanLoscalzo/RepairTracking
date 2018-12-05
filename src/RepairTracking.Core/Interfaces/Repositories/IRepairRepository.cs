using RepairTracking.Core.Base;
using RepairTracking.Core.Entities;

namespace RepairTracking.Core.Interfaces.Repositories
{
    public interface IRepairRepository : IRepository<Repair>
    {
        Repair GetByCode(string code);
    }
}