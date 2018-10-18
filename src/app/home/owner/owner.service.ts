import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../../http-error-handler.servie';// to access different directory need to use ..

import { Owner } from "./owner";


const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable()
export class OwnerService {
apiurl = 'https://localhost:44323/api/owner';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('OwnerService');
      }
  
    getOwner(): Observable<Owner[]>{
      return this.http.get<Owner[]>(this.apiurl)
                  .pipe(
                    catchError(this.handleError('getOwner', []))
                  );
    }

    
  
}
