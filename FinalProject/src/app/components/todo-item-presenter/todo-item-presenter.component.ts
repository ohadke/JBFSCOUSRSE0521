import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/core/models/todo-item.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent implements OnInit {

  @Input() caption: string = '';
  @Input() isCompleted: boolean=false;
  @Output() complete = new EventEmitter<boolean>();//pass it forward

  //constructor(private data:DataService) { }
  ngOnInit(): void {
  }

  update(){//here we check if any event has complete
      this.isCompleted =  !this.isCompleted//we check if the event target is checked

      this.complete.emit(this.isCompleted);
  }

}

