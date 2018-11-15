import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..

import { PaymentType } from "../_models/paymentType";


import { environment } from '../../environments/environment';

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization' : 'Bearer'+' '+ sessionStorage.getItem('token')
  })
};

@Injectable()
export class PaymentTypeService {
  URL = environment.API_URL

apiurl = this.URL+'paymenttype';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('PaymentTypeService');
      }
  
    getPaymentTypes(): Observable<PaymentType[]>{
      return this.http.get<PaymentType[]>(this.apiurl)
                  .pipe(
                    catchError(this.handleError('getPaymentType', []))
                  );
    }

    addPaymentType(ptype: PaymentType): Observable<PaymentType>{
      return this.http.post<PaymentType>(
        this.apiurl, ptype,httOptions).pipe(
          catchError(this.handleError('addPaymentType',ptype))
        );
    }
  
}
