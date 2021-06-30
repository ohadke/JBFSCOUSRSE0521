using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;
using TodoAppServer.Services;

namespace TodoAppServer.Controllers
{
    [Route("api/todolists")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly IRepositoryService _Repo;
        public TodoListController(IRepositoryService repository)
        {
            _Repo = repository;
        }
        // GET: TodoListController
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoList>>> GetAllLists()
        {
            try
            {
                IEnumerable<TodoList> result = await _Repo.GetAllLists();
                return Ok(result);
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoList>> GetListById(int id)
        {
            try
            {
                TodoList result = await _Repo.GetList(id);
                return Ok(result);
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost]
        public async Task<ActionResult<TodoList>> AddList(TodoList list)
        {
            try
            {
                var res = await _Repo.AddList(list);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("{listId}")]
        public async Task<ActionResult<TodoList>> DeleteList(int listId)
        {
            try
            {
                await _Repo.DeleteList(listId);
                await _Repo.DeleteItems(listId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<TodoList>> UpdateList(TodoList list)
        {
            try
            {
                var res = await _Repo.UpdateList(list);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }

    }
}
