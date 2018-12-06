using System.Collections.Generic;
using AutoMapper;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Web.ViewModels.Element;
using RepairTracking.Core.Entities;
using System;
using RepairTracking.Web.ViewModels.Repair;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class RepairController : ControllerBase
    {
        private IMapper mapper;
        private IRepairRepository repository;
        private IClientRepository clientRepository;
        private IElementRepository elementRepository;

        public RepairController(IMapper mapper, IRepairRepository repository, IClientRepository clientRepository, IElementRepository elementRepository)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.clientRepository = clientRepository;
            this.elementRepository = elementRepository;
        }

        [HttpGet]
        public IEnumerable<Repair> Get()
        {
            return this.repository.FetchAll()
                .ToList();
        }

        [HttpGet, Route("{id}")]
        public ActionResult<Repair> Get(string id)
        {
            var repair = this.repository.GetById(id);
            if (repair == null)
            {
                return NotFound();
            }

            return Ok(repair);
        }

        [HttpGet, Route("code/{code}")]
        public ActionResult<Repair> GetByCode(string code)
        {
            var repair = this.repository.GetByCode(code);
            if (repair == null)
            {
                return NotFound();
            }

            return Ok(repair);
        }

        [HttpDelete, Route("{id}")]
        public ActionResult Delete(string id)
        {
            var repair = this.repository.GetById(id);
            if (repair == null) return NotFound();
            this.repository.Delete(repair);
            return NoContent();
        }

        [HttpPost]
        public ActionResult Create(repairDto repair)
        {
            var random = new Random();
            if (!ModelState.IsValid)
            {
                return BadRequest(modelState: ModelState);
            }
            repair.Code = new string(Enumerable.Repeat("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8)
                                    .Select(s => s[random.Next(s.Length)]).ToArray());
            var client = clientRepository.GetById(repair.Client);
            var rep = new Repair() {
                Amount = repair.Amount,
                Code = repair.Code,
                Element = elementRepository.GetById(repair.Element),
                Observations = repair.Observations,
                IsActive = true,
                Status = "En proceso"
            };
            client.Repairs.Add(rep);
            clientRepository.Update(client);
            return CreatedAtAction(nameof(Get), null, rep);
        }

        [HttpPut("{id}")]
        public ActionResult Update(repairDto repair)
        {
            this.repository.Update(this.mapper.Map<Repair>(repair));
            return Ok(this.mapper.Map<Repair>(repair));
        }
    }
}