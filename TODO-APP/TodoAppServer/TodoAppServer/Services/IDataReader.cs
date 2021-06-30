using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{
     public interface IDataReader
    {
        Task<IEnumerable<TodoItem>> GetAllItems();
        Task<IEnumerable<TodoList>> GetAllLists();
    }
}
