import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { CadastrarComponent } from './front/cadastrar/cadastrar.component';
import { LoginComponent } from './front/login/login.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "cadastrar",
    component:CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
