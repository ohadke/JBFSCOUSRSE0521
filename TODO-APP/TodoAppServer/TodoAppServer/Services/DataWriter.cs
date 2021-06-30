using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{

    public class DataWriter : IDataWriter
    {
        const string _todoitemsfile = "TodoItems.csv";
        const string _todolistfile = "TodoList.csv";
        const string _path = "Data";
        async public void AppendItem(TodoItem item)
        {
            string documentPath = $"{_path}/{_todoitemsfile}";
            var line = item.ItemToLine();

            using (StreamWriter outputFile = new StreamWriter(documentPath, true))
            {
                await outputFile.WriteLineAsync(line);
            }
        }

        async public void AppendList(TodoList list)
        {
            string documentPath = $"{_path}/{_todolistfile}";

            var line = list.ListToLine();

            using (StreamWriter outputFile = new StreamWriter(documentPath, true))
            {
                await outputFile.WriteLineAsync(line);
            }
        }

        async public void SaveItem(Dictionary<int, TodoItem> dictionary)
        {
            var tableItemHeader = "id,caption,listId,isComleted";
            string docPath = $"{_path}/{_todoitemsfile}";

            var lines = dictionary.Values.Select(item => item.ItemToLine());

            using (StreamWriter outputFile = new StreamWriter(docPath))
            {
                await outputFile.WriteLineAsync(tableItemHeader);
                foreach (string str in lines)
                {
                    await outputFile.WriteLineAsync(str);
                }
            }
        }


        async public void SaveList(Dictionary<int, TodoList> dictionary)
        {
            var tableListHeader = "id,caption,description,image,color";
            string documentPath = $"{_path}/{_todolistfile}";
            var lines = dictionary.Values.Select(lst => lst.ListToLine());
            using (StreamWriter outputFile = new StreamWriter(documentPath))
            {
                await outputFile.WriteLineAsync(tableListHeader);
                foreach (string str in lines)
                    await outputFile.WriteLineAsync(str);
            }
        }
    }
}
