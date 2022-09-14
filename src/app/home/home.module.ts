import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GameDataComponent } from './game-data/game-data.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameDataComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule
  ]
})
export class HomeModule { }
