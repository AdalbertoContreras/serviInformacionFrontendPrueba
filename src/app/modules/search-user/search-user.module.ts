import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user.component';
import {Route, RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {UsuarioModule} from "../../component/usuario/usuario.module";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: SearchUserComponent
  }
];

@NgModule({
  declarations: [
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    UsuarioModule
  ]
})
export class SearchUserModule { }
