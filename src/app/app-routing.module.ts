import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { CadastrarComponent } from './front/cadastrar/cadastrar.component';
import { LoginComponent } from './front/login/login.component';
import { PokerComponent } from './front/poker/poker.component';
import { RegraPokerComponent } from './front/regra-poker/regra-poker.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "cadastrar",
    component:CadastrarComponent
  },
  {
    path: "poker",
    component:PokerComponent
  },
  {
    path: "regraPoker",
    component:RegraPokerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
