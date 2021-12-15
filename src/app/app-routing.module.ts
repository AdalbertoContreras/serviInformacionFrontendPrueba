import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {GuardScoreService} from "./service/guard-score.service";

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'search'},
  {
    path: '',
    children: [
      {
        path: 'search',
        loadChildren: () => import('src/app/modules/search-user/search-user.module').then(m => m.SearchUserModule),

      },
      {
        path: 'search/:id',
        canActivate: [GuardScoreService],
        loadChildren: () => import('src/app/modules/usuario-por-id/usuario-por-id.module').then(m => m.UsuarioPorIdModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
