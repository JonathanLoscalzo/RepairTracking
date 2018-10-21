using RepairTracking.Core.Base;

namespace RepairTracking.Core.ValueObjects
{
    public class Address: BaseEntity
    {
        public string Street { get; set; }
        public int? Number { get; set; }
        public int? Floor { get; set; }
        public int? Depto { get; set; }
    }
}