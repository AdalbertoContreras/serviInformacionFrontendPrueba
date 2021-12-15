import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../service/usuario.service";
import {Usuario} from "../../models/usuario";
import {UserSearch} from "../../models/user-search";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  nombreBuscar = '';
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  public  buscar() {
  if(this.nombreBuscar.length > 3 &&this.nombreBuscar.indexOf("gcpglobal") != 0)
    (this.usuarioService.seacrh(this.nombreBuscar)).subscribe(
      (response: UserSearch) => {
        this.usuarios = [];
        for(let i = 0; i < 10; i ++) {
          this.usuarios.push(response.items[i]);
          console.log(response[i])
        }
      },
      (error) => {
        this.usuarios = [];
      }
    );
  }

}
