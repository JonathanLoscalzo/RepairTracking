using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RepairTracking.Core.Entities;
using RepairTracking.Core.Interfaces.Repositories;
using RepairTracking.Web.ViewModels.Task;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = "Bearer")]

    public class TaskController : ControllerBase
    {
        private IMapper mapper;
        private ITaskRepository repository;

        public TaskController(IMapper mapper, ITaskRepository repository)
        {
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<TaskGenericDto> Get()
        {
            return this.repository.FetchAll()
                .ToList()
                .Select(this.mapper.Map<TaskGenericDto>);
        }

        [HttpGet, Route("{id}")]
        public ActionResult<TaskGenericDto> Get(string id)
        {
            var client = this.repository.GetById(id);
            if (client == null)
            {
                return NotFound();
            }

            return Ok(this.mapper.Map<TaskGenericDto>(client));
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
        public ActionResult Create(TaskGenericDto task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(modelState: ModelState);
            }

            var created = this.repository.Add(this.mapper.Map<TaskCommon>(task));
            return CreatedAtAction(nameof(Get), new { id = created.Id }, this.mapper.Map<TaskGenericDto>(created));
        }

        [HttpPut("{id}")]
        public ActionResult Update(TaskGenericDto task)
        {
            this.repository.Update(this.mapper.Map<TaskCommon>(task));
            return Ok(this.mapper.Map<TaskGenericDto>(task));
        }
    }
}