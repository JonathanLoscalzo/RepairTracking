using RepairTracking.Core.ValueObjects;

namespace RepairTracking.Web.ViewModels.Client
{
    public class DocumentDto
    {
        public DocumentType Type { get; set; }

        public long Number { get; set; }
    }
}