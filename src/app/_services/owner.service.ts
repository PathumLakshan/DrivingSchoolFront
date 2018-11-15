import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..

import { Owner } from "../_models/owner";


import { environment } from '../../environments/environment';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization' : 'Bearer'+' '+ sessionStorage.getItem('token')
  })
};

@Injectable()
export class OwnerService {
  URL = environment.API_URL;
apiurl = this.URL +'owner';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('OwnerService');
      }
  
    getOwner(): Observable<Owner[]>{
      return this.http.get<Owner[]>(this.apiurl,httpOptions)
                  .pipe(
                    catchError(this.handleError('getOwner', []))
                  );
    }

    addOwner(owner: Owner): Observable<Owner>{
      return this.http.post<Owner>(
        this.apiurl, owner,httpOptions).pipe(
          catchError(this.handleError('addOwner',owner))
        );
    }
  
}
