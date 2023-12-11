import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create/booktable',
    component: CreateDataComponent
  },
  {
    path: 'update/booktable',
    component: UpdateDataComponent
  },
  {
    path: 'delete/booktable',
    component: DeleteByIdComponent
  },
  {
    path: 'getbyid/booktable',
    component: GetByIdComponent
  },
  {
    path: 'getall/booktable',
    component: GetAllDataComponent
  },
  {
    path: 'create/authortable',
    component: CreateAuthorComponent
  },
  {
    path: 'update/authortable',
    component: UpdateAuthorComponent
  },
  {
    path: 'delete/authortable',
    component: DeleteAuthorComponent
  },
  {
    path: 'getbyid/authortable',
    component: GetbyidAuthorComponent
  },
  {
    path: 'getall/authortable',
    component: GetallauthorComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
