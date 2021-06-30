import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListViewComponent } from './components/edit-list-view/edit-list-view.component';

import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListsComponent } from './components/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowListComponent } from './components/show-list/show-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },// if we route to an empty url we will go to the homepage
  {path: 'home' , component:HomeComponent},
  {path: 'lists' , component: ListsComponent},
  { path: 'lists/:id', component: ShowListComponent },
  { path: 'lists/:id/edit', component: EditListViewComponent},
  {path: 'items' , component: ItemsComponent},
  { path: '404', component: NotFoundComponent},
  {path: '**' , redirectTo: '404'}//if we route to something else we will go to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
