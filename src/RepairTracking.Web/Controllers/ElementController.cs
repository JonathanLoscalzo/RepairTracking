using System.Collections.Generic;
using AutoMapper;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Web.ViewModels.Element;
using RepairTracking.Core.Entities;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ElementController : ControllerBase
    {
        private IMapper mapper;
        private IElementRepository repository;

        public ElementController(IMapper mapper, IElementRepository repository)
        {
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<ElementDto> Get()
        {
            return this.repository.FetchAll()
                .ToList()
                .Select(this.mapper.Map<ElementDto>);
        }

        [HttpGet, Route("{id}")]
        public ActionResult<ElementDto> Get(string id)
        {
            var client = this.repository.GetById(id);
            if (client == null)
            {
                return NotFound();
            }

            return Ok(this.mapper.Map<ElementDto>(client));
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
        public ActionResult Create(ElementDto element)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(modelState: ModelState);
            }

            var created = this.repository.Add(this.mapper.Map<Element>(element));
            return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public ActionResult Update(ElementDto element)
        {
            this.repository.Update(this.mapper.Map<Element>(element));
            return NoContent();
        }
    }
}