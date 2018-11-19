import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';


@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    Page02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
