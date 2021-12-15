import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../service/usuario.service";
import {Usuario} from "../../models/usuario";
import {UsuarioConsultado} from "../../models/usuario-consultado";

@Component({
  selector: 'app-usuario-por-id',
  templateUrl: './usuario-por-id.component.html',
  styleUrls: ['./usuario-por-id.component.scss']
})
export class UsuarioPorIdComponent implements OnInit {

  usuario: UsuarioConsultado = null;
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    let usuario = this.route.snapshot.paramMap.get("id");
    this.buscarUsuario(usuario);

  }

  buscarUsuario(usuario: string) {
    (this.usuarioService.get(usuario)).subscribe(
      (response: UsuarioConsultado) => {
        this.usuario = response;
      },
      (error) => {
        usuario = null;
      }
    );
  }

}
