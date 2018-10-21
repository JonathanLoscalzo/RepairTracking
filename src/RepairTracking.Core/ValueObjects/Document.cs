using RepairTracking.Core.Base;

namespace RepairTracking.Core.ValueObjects
{
    public class Document : BaseEntity
    {
        public DocumentType Type { get; set; }

        public long Number { get; set; }
    }
}