using RepairTracking.Core.Base;

namespace RepairTracking.Core.Entities
{
    public class TaskCommon : BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Observations { get; set; }
        public decimal Price { get; set; }
    }
}