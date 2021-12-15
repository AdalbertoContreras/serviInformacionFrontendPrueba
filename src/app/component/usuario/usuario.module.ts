import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  exports:[
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
