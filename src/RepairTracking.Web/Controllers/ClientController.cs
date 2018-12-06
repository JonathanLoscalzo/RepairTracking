using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RepairTracking.Core.Entities;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Web.ViewModels;
using RepairTracking.Web.ViewModels.Client;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]")]
    [Authorize(AuthenticationSchemes="Bearer")]
    public class ClientController : ControllerBase
    {
        private IMapper mapper;
        private IClientRepository repository;

        public ClientController(IMapper mapper, IClientRepository repository)
        {
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<ClientDto> Get()
        {
            return this.repository.FetchAll()
                .ToList()
                .Select(this.mapper.Map<ClientDto>);
        }

        [HttpGet, Route("{id}")]
        public ActionResult<ClientDto> Get(string id)
        {
            var client = this.repository.GetById(id);
            if (client == null)
            {
                return NotFound();
            }

            return Ok(this.mapper.Map<ClientDto>(client));
        }

        [HttpGet, Route("GetRepairs/{id}")]
        public ActionResult<Repair> GetRepairs(string id)
        {
            var client = this.repository.GetById(id);
            if (client == null)
            {
                return NotFound();
            }

            return Ok(client.Repairs);
        }

        [HttpDelete, Route("{id}")]
        public ActionResult Delete(string id)
        {
            var client = this.repository.GetById(id);
            if (client == null) return NotFound();
            this.repository.Delete(client);
            return NoContent();
        }

        [HttpPost]
        public ActionResult Create(ClientDto client)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(modelState: ModelState);
            }

            var created = this.repository.Add(this.mapper.Map<Client>(client));
            return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public ActionResult Update(ClientDto client)
        {
            this.repository.Update(this.mapper.Map<Client>(client));
            return NoContent();
        }
    }
}