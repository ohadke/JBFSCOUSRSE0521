import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import {  map, switchMap} from 'rxjs/operators';
import { TodoList } from 'src/app/core/models/TodoList.model';
import { DataService } from 'src/app/core/services/data.service';

import { requiredAndTouched, wordsCountValidator } from 'src/app/core/validators/validator';

@Component({
  selector: 'app-edit-list-view',
  templateUrl: './edit-list-view.component.html',
  styleUrls: ['./edit-list-view.component.css']
})
export class EditListViewComponent implements OnInit {
  colorList: string[] = ['red', 'steelblue', 'blue', 'steelblue', 'magenta', 'brown', 'orange' ];
  iconList: string[] = [ '\uf07a', '\uf073', '\uf6d3', '\uf77c', '\uf11b', '\uf1fd','\uf434','\uf06b' ,'\uf09d', '\uf20b' ];
  list$!: Observable<TodoList>;
  listForm!: FormGroup;
  id$!: Observable<number>;
  subscription = new Subscription;
  constructor(private route: ActivatedRoute,
   private data:DataService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(
      map(params =>+params['id']));

    this.list$ = this.id$.pipe(
      map(id => this.data.getList(id)),
      switchMap(x => x)
    )
    this.subscription =  this.list$.subscribe(list => {
      if(!list){//if the list is empty we create a new one
        list = {
          id: -1,
          caption: '',
          description: '',
          image: '',
          color: ''
        }
      }
        this.buildForm(list)//st
    })
  }
  buildForm(list: TodoList){
    this.listForm = this.formBuilder.group({
        caption: [list.caption, [Validators.required, requiredAndTouched]],
        description: [list.description, [Validators.required, requiredAndTouched,  wordsCountValidator(10), Validators.minLength(30)]],// limited to 30 and 10
        color: [list.color, [Validators.required]],
        image: [list.image, [Validators.required]],
      })
  }
  async saveData(){
    console.log('trying to sav e data');
    let id = +this.route.snapshot.params['id']
    let list = {
      ...this.listForm.value,
      id: id
    };
      if(id===-1){
        list.id=0;
        console.log('before');
          await this.data.postList(list);
        console.log('after');

       }
       else{
          await this.data.putList(list);
       }
       this.router.navigate(['lists']);//go to the list page
          }
          get(fieldName: string) {
            return this.listForm.get(fieldName);
        }

          ngOnDestroy(): void {
            this.subscription.unsubscribe();
          }


}
