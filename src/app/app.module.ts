import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app-routing.module';
import { HttpErrorHandler } from './_helpers/http-error-handler.service';
import { MessageService } from './_helpers/message.service';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSnackBarModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogginComponent } from './_components/loggin/loggin.component';
import { ScheduleComponent } from './_components/schedule/schedule.component';
import { HomeComponent } from './_components/home/home.component';
import { AppComponent } from './app.component';

import {ErrorInterceptor} from './_helpers/error.interceptor';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule, // this module will give ability do request http request throughout the entire app
    NgbModule,
    FormsModule,// this will use whatever the routes defined in const appRoutes array  
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    routing
  ],
  declarations:[
    AppComponent,
    HomeComponent,
    LogginComponent,
    ScheduleComponent
  ],

  schemas: [ NO_ERRORS_SCHEMA ],


  
  providers: [
    HttpErrorHandler,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
