using System.Collections.Generic;

namespace RepairTracking.Web.ViewModels.Element
{
    public class ElementDto
    {
        public string Id { get; set; }       
        public string Code { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public IEnumerable<PieceDto> Pieces { get; set; }
        public IEnumerable<TaskDto> Tasks { get; set; }
        public string Observations { get; set; }
    }
}