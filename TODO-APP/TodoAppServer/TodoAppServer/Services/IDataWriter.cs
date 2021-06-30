using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{
    public interface IDataWriter
    {
        void AppendList(TodoList list);
        void SaveItem(Dictionary<int, TodoItem> dic);
        void SaveList(Dictionary<int, TodoList> dic);
        void AppendItem(TodoItem item);
    }
}
