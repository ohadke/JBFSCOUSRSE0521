import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item.model';
import { TodoList } from '../models/TodoList.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl: string = 'http://localhost:5000/api';
  private listsSubject = new BehaviorSubject<TodoList[]>([]);
  private itemsSubject = new BehaviorSubject<TodoItem[]>([]);
  get lists$():Observable<TodoList[]>{
    return this.listsSubject.asObservable();
  }
  get items$():Observable<TodoItem[]>{
    return this.itemsSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  async loadLists():Promise<TodoList[]>{
    const headers = { "Content-Type":"application/json" }
    const url = `${this.baseUrl}/todolists`;
    let lists= await this.http.get<TodoList[]>(url,{'headers': headers}).toPromise();
    this.listsSubject.next(lists);
         return lists;
  }
  getList(id: number): Observable<TodoList> {
    console.log("got a list");
    return this.listsSubject.pipe(
      map(lists => lists.filter(list => list.id === id)[0]))
  }
  async postList(list: TodoList){
    const headers = { "Content-Type":"application/json" }
    const body = JSON.stringify(list);
    const url = `${this.baseUrl}/todolists`;
    await this.http.post<TodoList>(url, body,{'headers': headers}).toPromise();
     await this.loadLists();
  }
  async putList(list: TodoList) {
    const headers = { "Content-Type":"application/json"}
    const body = JSON.stringify(list);
    const url = `${this.baseUrl}/todolists/${list.id}`;
    await this.http.put<TodoList>(url, body,{'headers': headers}).toPromise();
    await this.loadLists();
  }
  async deleteList(id: number) {
    const urlList = `${this.baseUrl}/todolists/${id}`;
    const urlItems = `${this.baseUrl}/todoitems?listId=${id}`;
    if(this.baseUrl==='http://localhost:3000'){
      await this.http.delete(urlItems);
  }
    await this.http.delete(urlList).toPromise();
    await this.loadLists();
    await this.loadItems();
  }
  //start with Items
  async loadItems():Promise<TodoItem[]>{
    const url = `${this.baseUrl}/todoitems`;
    let items= await this.http.get<TodoItem[]>(url).toPromise();
    this.itemsSubject.next(items);
    return items;
  }
  async postItem(item: TodoItem){
    console.log("starting to post to server");
    const headers = { "Content-Type":"application/json"}
    const body = JSON.stringify(item);
    const url = `${this.baseUrl}/todoitems`;
    console.log("set to post");
    await this.http.post<TodoItem>(url, body,{'headers': headers}).toPromise();
    console.log("posted without await")
    this.loadItems();
  }
  getActiveItems(): Observable<TodoItem[]> {
    console.log("getting active items");
    return this.itemsSubject.pipe(
      map(items => items.filter(item => item.isCompleted === false)));
  }
  getItemsPerListId(listId:number): Observable<TodoItem[]> {
    return this.itemsSubject.pipe(
      map(items => items.filter(item => item.listId === listId)));
  }
  async putItem(item: TodoItem){
    const headers = { "Content-Type":"application/json"}
    const body = JSON.stringify(item);
    let id= item.id;
    const url = `${this.baseUrl}/todoitems/${id}`;

    await this.http.put<TodoItem>(url, body,{'headers': headers}).toPromise();
    this.loadItems();

  }

  async deleteAllListItems(listId:number){
    const url = `${this.baseUrl}/todoitems?listId=${listId}`;
    await this.http.delete<TodoItem[]>(url);
    this.loadItems();
  }



}
