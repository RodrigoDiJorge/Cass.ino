import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { CadastrarComponent } from './front/cadastrar/cadastrar.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
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
