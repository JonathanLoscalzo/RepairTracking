using AutoMapper;
using RepairTracking.Core.Entities;
using RepairTracking.Web.ViewModels.Element;

namespace RepairTracking.Web.Profilers
{
    public class ElementProfile : Profile
    {
        public ElementProfile()
        {
            CreateMap<Element, ElementDto>().ReverseMap();
            CreateMap<Piece, PieceDto>().ReverseMap();
            CreateMap<Task, TaskDto>().ReverseMap();
        }
    }
}