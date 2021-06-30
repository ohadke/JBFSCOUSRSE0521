using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{
    public class RepositoryService : IRepositoryService
    {
        //private readonly DataContext _dataContext;
        /* public SqlRepositoryService(DataContext dataContext)
         {
             _dataContext = dataContext;
         }
        */
        int _KeyIdItem = 0;
        int _KeyIdList = 0;
        private Dictionary<int, TodoList> _todolists = new();
        private Dictionary<int, TodoItem> _todoitems = new();
        private IDataWriter _dataWriter;
        private IDataReader _dataReader;
        private bool _isAllItemsLoaded;
        private bool _isAllListsLoaded;
         
        public RepositoryService(IDataReader dataReader, IDataWriter dataWriter)
            {
            _isAllItemsLoaded = false;
            _isAllListsLoaded = false;
            _dataReader = dataReader;
            _dataWriter = dataWriter;
        }
        #region LoadedData?  (ensureAllListsLoaded, ensureAllItemsLoaded)
        private async Task MakeSureAndLoadAllItemsLoaded()
        {
            if (_isAllItemsLoaded)
            {
                return;
            }
            _isAllItemsLoaded = true;
            _todoitems = (await _dataReader.GetAllItems()).ToDictionary(x => x.Id);
            if (_todoitems.Count() > 0)
            {
                _KeyIdItem = _todoitems.Values.Max(max => max.Id);
            }

        }
        private async Task MakeSureAndLoadAllListsLoaded()
        {
            if (_isAllListsLoaded)
            {
                return;
            }
            _isAllListsLoaded = true;
            _todolists = (await _dataReader.GetAllLists()).ToDictionary(x => x.Id);
            if (_todolists.Count() > 0)
            {
                _KeyIdList = _todolists.Values.Max(y => y.Id);
            }
        }
        #endregion
        public Task<TodoItem> AddItem(TodoItem item)
        {
            _KeyIdItem++;
            _todoitems.Add(_KeyIdItem++,item);
            _dataWriter.AppendItem(item);
            return Task.FromResult(item);
        }

        public Task<TodoList> AddList(TodoList list)
        {
            _KeyIdList++;
            _todolists.Add(_KeyIdList, list);
            _dataWriter.AppendList(list);
            return Task.FromResult(list);
        }

        public Task DeleteItems(int listId)
        {
            var remainingItems = _todoitems.Values.Where(item => item.ListId != listId).ToDictionary(Dictionary => Dictionary.Id);
            _todoitems = remainingItems;
            _dataWriter.SaveItem(_todoitems);
            return Task.CompletedTask;
        }

        public Task DeleteList(int listId)
        {
            _todolists.Remove(listId);
            _dataWriter.SaveList(_todolists);
            return Task.CompletedTask;
        }

        public async Task<List<TodoItem>> GetActiveItems()
        {
            await MakeSureAndLoadAllItemsLoaded();
            return _todoitems.Values
                .Where(todoitem => !todoitem.IsCompleted)
                .ToList();
        }

        public async Task<List<TodoItem>> GetAllItems()
        {
            await MakeSureAndLoadAllItemsLoaded();
            var a = _todoitems.Values.ToList();
            return a;

        }

        public async Task<List<TodoList>> GetAllLists()
        {
            await MakeSureAndLoadAllListsLoaded();
            return _todolists.Values.ToList();
        }

        public async Task<List<TodoItem>> GetItemsByListId(int listId)
        {
            await MakeSureAndLoadAllListsLoaded();
            return _todoitems.Values
                .Where(todoitem => todoitem.ListId == listId)
                .ToList();
        }
        
        public async Task<TodoList> GetList(int listId)
        {
            await MakeSureAndLoadAllListsLoaded();
            return _todolists[listId];
        }

        public Task<TodoItem> UpdateItem(TodoItem item)
        {

            _todoitems[item.Id] = item;
            _dataWriter.SaveItem(_todoitems);
            return Task.FromResult(item);
        }

        public Task<TodoList> UpdateList(TodoList list)
        {
            _todolists[list.Id] = list;
            _dataWriter.SaveList(_todolists);
            return Task.FromResult(list);
        }
    }
}
