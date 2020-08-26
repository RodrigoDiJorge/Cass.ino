import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front/header/header.component';

//Booststrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';

//Components
import { CadastrarComponent } from './front/cadastrar/cadastrar.component';
import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PokerComponent } from './front/poker/poker.component';
import { RegraPokerComponent } from './front/regra-poker/regra-poker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastrarComponent,
    HomeComponent,
    LoginComponent,
    PokerComponent,
    RegraPokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
