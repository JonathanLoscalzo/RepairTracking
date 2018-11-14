using System;
using RepairTracking.Core.Base;

namespace RepairTracking.Core.Entities
{
    public class Piece : BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string ElementId { get; set; }
        public Element Element { get; set; }
    }
}