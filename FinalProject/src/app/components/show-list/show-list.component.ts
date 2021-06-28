import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';
import {  map, switchMap } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/todo-item.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { wordsCountValidator } from 'src/app/core/validators/validator';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  list$!: Observable<TodoList>;
  items$!: Observable<TodoItem[]>;
  id$!: Observable<number>;
  showAskDelete  =false;

  newItemControl!: FormControl;


  constructor(  private data :DataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.newItemControl = this.formBuilder.control("", [Validators.required, Validators.minLength(10), wordsCountValidator(3),]);
    this.id$ = this.route.params.pipe(
      map(params =>+params['id']));

    this.list$= this.id$.pipe(
      map(id=>this.data.getList(id)),
      switchMap(x => x));

    this.items$ = this.id$.pipe(
      map(id=> this.data.getItemsPerListId(id)),
      switchMap(x=>x));
  }
  editList(id:number){
    this.router.navigate(['lists', id , 'edit'])
  }
  async deleteList(id:number){
    await this.data.deleteList(id);
    this.router.navigate(['home']);}

  addList(){
    this.router.navigate(['lists', -1 , 'edit'])// navigate to list -1 edit
  }

  cancelDelete(){this.showAskDelete= false;}
  askDelete(){this.showAskDelete= true;}

  async addNewItem(id:number){
    let item: TodoItem ={
      "id" :0,
      "caption": this.newItemControl.value,
      "listId": id,
      "isCompleted": false
    }
    await this.data.postItem(item);
    this.list$= this.id$.pipe(
      map(id=>this.data.getList(id)),
      switchMap(x => x));
    this.newItemControl.reset()
  }
    async updateItem(item:TodoItem, event:boolean){
    item.isCompleted = event;
    await this.data.putItem(item);
  }
}
