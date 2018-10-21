using AutoMapper;
using RepairTracking.Core.Entities;
using RepairTracking.Core.ValueObjects;
using RepairTracking.Web.ViewModels;
using RepairTracking.Web.ViewModels.Client;

namespace RepairTracking.Web.Profilers
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<Client, ClientDto>().ReverseMap();
            CreateMap<Address, AddressDto>().ReverseMap();
            CreateMap<Document, DocumentDto>().ReverseMap();
        }
    }
}