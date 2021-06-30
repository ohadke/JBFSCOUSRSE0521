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
    [Route("api/todoitems")]
    [ApiController]
    public class TodoItemController : ControllerBase
    {
        private readonly IRepositoryService _Repo;

        public TodoItemController(IRepositoryService Repo)
        {
            _Repo = Repo;
        }
        [HttpGet]
        public async Task<ActionResult<List<TodoItem>>> GetAllItems()
        {
            var result = await _Repo.GetAllItems();
            Console.WriteLine(result[0].Id + "," + result[0].Caption + result[0].ListId + result[0].IsCompleted);
            return Ok(result);
        }
        [HttpPost]
        public async Task<ActionResult<TodoItem>> AddItem(TodoItem TodoItem)
        {
            Console.WriteLine("got http request");
            try
            {
                var res = await _Repo.AddItem(TodoItem);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TodoItem>> UpdateItem(TodoItem Todoitem)
        {
            try
            {
                var res = await _Repo.UpdateItem(Todoitem);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
