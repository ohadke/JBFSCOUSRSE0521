import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import {  distinctUntilChanged, map} from 'rxjs/operators';
import { from, Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listNumber$!: Observable<number>
  itemNumber$!: Observable<number>
  activeItemNumber$!: Observable<number>
  date:Date = new Date();
  name:string="Ohad Keshet";
  constructor(
    private router: Router,
    private data :DataService
  ) { }

  ngOnInit(): void {
    this.listNumber$= this.data.lists$.pipe(map(lists=>lists.length),distinctUntilChanged());
    this.itemNumber$= this.data.items$.pipe(map(items=>items.length),distinctUntilChanged());
    this.activeItemNumber$= this.data.getActiveItems().pipe(map(items=>items.length),distinctUntilChanged());
  }

  createNewList(){
    this.router.navigate(['lists', "-1" , 'edit'])
    console.log("creating list");
  }

  goToLists(){
    this.router.navigate(['lists'])
  }
  goToItems(){
    this.router.navigate(['items'])
  }
}

