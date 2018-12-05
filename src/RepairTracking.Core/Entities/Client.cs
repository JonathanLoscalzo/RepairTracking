using System.Collections.Generic;
using RepairTracking.Core.Base;
using RepairTracking.Core.ValueObjects;

namespace RepairTracking.Core.Entities
{
    public class Client : BaseEntity
    {
        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Email { get; set; }

        public Document Document { get; set; }

        public Address Address { get; set; }

        public string Cellphone { get; set; }

        public string Telephone { get; set; }
        public IEnumerable<Repair> Repairs { get; set; }
    }
}