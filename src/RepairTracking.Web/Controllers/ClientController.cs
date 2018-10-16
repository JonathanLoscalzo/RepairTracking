using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RepairTracking.Web.ViewModels;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        public ClientController()
        {

        }

        [HttpGet]
        public IEnumerable<ClientDto> Get()
        {
            return new List<ClientDto>(){
                new ClientDto(),
                new ClientDto(),
                new ClientDto(),
            };
        }

        [HttpGet, Route("{id}")]
        public ClientDto Get(string id)
        {
            return new ClientDto();
        }

        [HttpDelete, Route("{id}")]
        public void Delete(string id)
        {
            return ; //new ClientDto();
        }

        [HttpPost]
        public ClientDto Create(ClientDto client)
        {
            return new ClientDto();
        }

        [HttpPut("{id}")]
        public ClientDto Update(ClientDto client)
        {
            return new ClientDto();
        }
    }
}