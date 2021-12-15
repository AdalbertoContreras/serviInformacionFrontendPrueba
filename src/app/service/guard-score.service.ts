import { Injectable } from '@angular/core';
import {Observable} from "rxjs/";
import {ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from "@angular/router";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class GuardScoreService {

  constructor(
    private _router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  check(): boolean{
    var data: Usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(data);
    return data && data.score >= 30;
  }

}
