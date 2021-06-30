using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{
     public interface IRepositoryService
    {   /// <summary>
    /// add
    /// </summary>
    /// <param name="list"></param>
    /// <returns></returns>
        Task<TodoList> AddList(TodoList list);
        Task<TodoItem> AddItem(TodoItem item);
        //get
        Task<List<TodoList>> GetAllLists();
        Task<List<TodoItem>> GetAllItems();
        Task<List<TodoItem>> GetActiveItems();
        Task<TodoList> GetList(int listId);
        Task<List<TodoItem>> GetItemsByListId(int listId);
        ///put
        ///
        Task<TodoItem> UpdateItem(TodoItem item);
        Task<TodoList> UpdateList(TodoList list);
        //delete
        Task DeleteItems(int listId);
        Task DeleteList(int listId);




    }
}
