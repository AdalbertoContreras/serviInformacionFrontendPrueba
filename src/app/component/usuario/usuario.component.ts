import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../models/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input()
  usuario: Usuario;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.usuario)
  }

  navegar() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.router.navigate(['/search/', this.usuario.login]);
  }

}
