using System.Collections.Generic;
using AutoMapper;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Web.ViewModels.Element;
using RepairTracking.Core.Entities;
using System;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class RepairController : ControllerBase
    {
        private IMapper mapper;
        private IRepairRepository repository;

        public RepairController(IMapper mapper, IRepairRepository repository)
        {
            this.mapper = mapper;
            this.repository = repository;
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

        [HttpGet, Route("{code}")]
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
        public ActionResult Create(Repair repair)
        {
            var random = new Random();
            if (!ModelState.IsValid)
            {
                return BadRequest(modelState: ModelState);
            }
            repair.Code = new string(Enumerable.Repeat("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8)
                                    .Select(s => s[random.Next(s.Length)]).ToArray());
                                    
            var created = this.repository.Add(repair);
            return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public ActionResult Update(Repair repair)
        {
            this.repository.Update(repair);
            return Ok(repair);
        }
    }
}