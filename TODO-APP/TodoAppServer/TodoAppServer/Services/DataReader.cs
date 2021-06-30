using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{
    public class DataReader : IDataReader
    {
        const string _todoitemsfile = "TodoItems.csv";
        const string _todolistfile = "TodoList.csv";
        const string _path = "Data";
        public Task<IEnumerable<TodoItem>> GetAllItems()
        {
            return Task.FromResult(File
            .ReadAllLines($"{_path}/{_todoitemsfile}")
             .Skip(1)
             .Where(str => !string.IsNullOrWhiteSpace(str))
             .Select(str => str.ToItem()));
        }

        public  Task<IEnumerable<TodoList>> GetAllLists()
        {
             return Task.FromResult(File
            .ReadAllLines($"{_path}/{_todolistfile}")
            .Skip(1)
            .Where(str => !string.IsNullOrWhiteSpace(str))
            .Select(val => val.ToList()));
        }
    }
}
