import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPorIdComponent } from './usuario-por-id.component';
import {Route, RouterModule} from "@angular/router";
import {MatCardContent} from "@angular/material/card";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: UsuarioPorIdComponent
  }
];

@NgModule({
  declarations: [
    UsuarioPorIdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
  ]
})
export class UsuarioPorIdModule { }
