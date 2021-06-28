import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { EditListViewComponent } from './components/edit-list-view/edit-list-view.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ItemsComponent } from './components/items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';
import { ErrorPresenterComponent } from './components/error-presenter/error-presenter.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListsComponent,
    ItemsComponent,
    ShowListComponent,
    EditListViewComponent,
    NotFoundComponent,
    ShowListComponent,
    TodoItemPresenterComponent,
    ErrorPresenterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
