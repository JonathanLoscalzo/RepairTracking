using System.Collections.Generic;
using RepairTracking.Core.Base;

namespace RepairTracking.Core.Entities
{
    public class Repair : BaseEntity
    {
        public string Status { get; set; }
        public Element Element { get; set; }
        public decimal Amount { get; set; }
        public string Observations { get; set; }
        public string Code { get; set; }
    }
}