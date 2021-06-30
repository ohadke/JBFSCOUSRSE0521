using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoAppServer.Models
{
    public class TodoList
    {
        public TodoList(int Id, string Caption, string Description, string Image, string Color)
        {
            this.Id = Id;
            this.Caption = Caption;
            this.Description = Description;
            this.Image = Image;
            this.Color = Color;
        }

        public int Id { get; set; }
        public string Caption { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Color { get; set; }
    }
}
