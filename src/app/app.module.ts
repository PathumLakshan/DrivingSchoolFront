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
import { ScheduleComponent } from './schedule/schedule.component';
import { LogginComponent } from './loggin/loggin.component';


import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoutes: Routes =[
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'login',
    component: LogginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    LogginComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule, // this module will give ability do request http request throughout the entire app
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),// this will use whatever the routes defined in const appRoutes array 
    MDBBootstrapModule.forRoot(),
        AngularFontAwesomeModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})


export class AppModule { }
