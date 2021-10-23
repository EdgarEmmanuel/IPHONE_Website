import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPartComponent } from './navbar-part/navbar-part.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { FooterpartComponent } from './footerpart/footerpart.component';
import {IphoneSeComponent} from './parts/iphone-se/iphone-se.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPartComponent,
    MainpartComponent,
    FooterpartComponent,
    IphoneSeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
