import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.servie';// to access different directory need to use ..

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class LogginService {

  private loginUrl = "https://localhost:44323/api/Login/userLogin";
  private handleError : HandleError

  constructor(private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('LogginService');
     }

     userLogin(user: User):Observable<User>{
      return this.http.post<User>(this.loginUrl,user,httOptions).pipe(
        catchError(this.handleError('userLogin',user))
      );
     }
}
