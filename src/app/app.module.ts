import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
    BrowserModule,
    RouterModule.forRoot([
      {path: 'page01', component: Page01Component},
      {path: 'page02', component: Page02Component}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
