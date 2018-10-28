import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..

import { Owner } from "../_models/owner";


const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    "Authorization" : 'Bearer'+' '+ localStorage.getItem('token')
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

    addOwner(owner: Owner): Observable<Owner>{
      return this.http.post<Owner>(
        this.apiurl, owner,httOptions).pipe(
          catchError(this.handleError('addOwner',owner))
        );
    }
  
}