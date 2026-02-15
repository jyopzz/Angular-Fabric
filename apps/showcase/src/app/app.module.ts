import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  IconModule } from 'angular-fabric';
import { HomeComponent } from './pages/home/home.component';
import { IconsComponent } from './pages/icons/icons.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { AllIconComponent } from './pages/all-icon/all-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconsComponent,
    ButtonsComponent,
    CardsComponent,
    AllIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
