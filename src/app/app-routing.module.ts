import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { CadastrarComponent } from './front/cadastrar/cadastrar.component';
import { LoginComponent } from './front/login/login.component';
import { PokerComponent } from './front/poker/poker.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
