using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoAppServer.Models
{
    public class TodoItem {
    public int Id{ get; set; }
    public string Caption{ get; set; }
    public int ListId { get; set; }
    public bool IsCompleted { get; set; }
        public TodoItem(int Id,string Caption, int ListId,bool IsCompleted)
        {
            this.Id = Id;
            this.Caption = Caption;
            this.ListId = ListId;
            this.IsCompleted = IsCompleted;
        }


    }
}
