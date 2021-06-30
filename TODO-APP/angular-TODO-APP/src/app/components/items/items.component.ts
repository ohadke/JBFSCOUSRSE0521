import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TodoItem } from 'src/app/core/models/todo-item.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items$!: Observable<TodoItem[]>;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.items$ = this.data.getActiveItems();
  }
    async updateItem(item:TodoItem, event:boolean){
    item.isCompleted = event;
    await this.data.putItem(item);


  }

}
