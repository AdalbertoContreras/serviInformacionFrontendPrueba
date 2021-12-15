import { Injectable } from '@angular/core'; // at top
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/usuario";
import {Observable} from "rxjs/";
import {UserSearch} from "../models/user-search";
import {UsuarioConsultado} from "../models/usuario-consultado";

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {

  }

  public seacrh(nombreBuscar: string): Observable<UserSearch> {
    return this.httpClient.get<UserSearch>('https://api.github.com/search/users?q=' + nombreBuscar);
  }

  public get(nombreBuscar: string): Observable<UsuarioConsultado> {
    return this.httpClient.get<UsuarioConsultado>('https://api.github.com/users/' + nombreBuscar);
  }
}
