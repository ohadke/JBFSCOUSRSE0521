import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists$!: Observable<TodoList[]>;

  constructor(private data:DataService,  private router:Router) { }

  ngOnInit(): void {
    this.lists$ = this.data.lists$; //gets the data list

  }
  goToList(id:number){
        this.router.navigate(['lists', id])
  }

  addList(){
    this.router.navigate(['lists', "-1" , 'edit'])
  }

}
