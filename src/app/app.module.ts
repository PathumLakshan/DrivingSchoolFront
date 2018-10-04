import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HttpErrorHandler }     from './http-error-handler.servie';
import { MessageService }       from './message.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: './home/home.module#HomeModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule, // this module will give ability do request http request throughout the entire app
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)// this will use whatever the routes defined in const appRoutes array 
  ],
  providers: [
    HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})


export class AppModule { }
