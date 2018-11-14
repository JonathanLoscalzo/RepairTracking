using AutoMapper;
using RepairTracking.Core.Entities;
using RepairTracking.Web.ViewModels.Task;

namespace RepairTracking.Web.Profilers
{
    public class TaskProfiler : Profile
    {
        public TaskProfiler()
        {
            CreateMap<TaskGeneric, TaskGenericDto>().ReverseMap();
        }
    }
}