using System.Collections.Generic;
using System.Linq;
using RepairTracking.Core.Base;

namespace RepairTracking.Core.Entities
{
    public class Element : BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public IEnumerable<Piece> Pieces { get; set; }
        public IEnumerable<Task> Tasks { get; set; }
        public string Observations { get; set; }
    }
}