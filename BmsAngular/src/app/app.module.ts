import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateDataComponent } from './book/create-data/create-data.component';
import { UpdateDataComponent } from './book/update-data/update-data.component';
import { DeleteByIdComponent } from './book/delete-by-id/delete-by-id.component';
import { GetByIdComponent } from './book/get-by-id/get-by-id.component';
import { GetAllDataComponent } from './book/get-all-data/get-all-data.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { UpdateAuthorComponent } from './author/update-author/update-author.component';
import { DeleteAuthorComponent } from './author/delete-author/delete-author.component';
import { GetbyidAuthorComponent } from './author/getbyid-author/getbyid-author.component';
import { GetallauthorComponent } from './author/getallauthor/getallauthor.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    UpdateDataComponent,
    DeleteByIdComponent,
    GetByIdComponent,
    GetAllDataComponent,
    CreateAuthorComponent,
    UpdateAuthorComponent,
    DeleteAuthorComponent,
    GetbyidAuthorComponent,
    GetallauthorComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
