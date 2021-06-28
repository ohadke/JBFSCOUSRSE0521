import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-TODO-APP';
constructor(private data:DataService) {}
ngOnInit(): void {
  this.data.loadLists()
  this.data.loadItems()
}
}
