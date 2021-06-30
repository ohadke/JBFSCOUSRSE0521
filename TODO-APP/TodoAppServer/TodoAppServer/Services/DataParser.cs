using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppServer.Models;

namespace TodoAppServer.Services
{
    public static  class DataParser
    {
        public static TodoList ToList(this string src)
        {
            var cols = src.ToColumns();
            Console.WriteLine(int.Parse(cols[0]));
            return new TodoList(
                Id: int.Parse(cols[0]),
                Caption: cols[1],
                Description: cols[2],
                Image: cols[3],
                Color: cols[4]
            );
        }
        public static TodoItem ToItem(this string src)
        {
            var cols = src
                .Split(',')
                .Select(x => x.Trim())
                .ToArray();
            return new TodoItem(
                Id : int.Parse(cols[0]),
                Caption: cols[1],
                ListId: int.Parse(cols[2]),
                IsCompleted: bool.Parse(cols[3])
            );
        }
        public static string[] ToColumns(this string source)
        {
            return source
                .Split(',')
                .Select(x => x.Trim())
                .ToArray();
        }
        public static string ListToLine(this TodoList list)
        {
            var line = $"{list.Id},{list.Caption},{list.Description},{list.Image},{list.Color}";
            return line;

        }
        public static string ItemToLine(this TodoItem item)
        {
            var line = $"{item.Id},{item.Caption},{item.ListId},{item.IsCompleted}";
            return line;

        }
    }
}
