import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Trainer } from '../_models/trainer'

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    "Authorization" : 'Bearer'+' '+ localStorage.getItem('token')
  })
};

@Injectable()
export class TrainerService {
apiurl = 'https://localhost:44323/api/trainer';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TrainerService');
      }
  
    getTrainer(): Observable<Trainer[]>{
      return this.http.get<Trainer[]>(this.apiurl,httOptions)
                  .pipe(
                    catchError(this.handleError('getTrainer', []))
                  );
    }

    addTrainer(trainer: Trainer): Observable<Trainer>{
      return this.http.post<Trainer>(
        this.apiurl, trainer,httOptions).pipe(
          catchError(this.handleError('addTrainer',trainer))
        );
    }

    updateTrainer(trainer: Trainer){
      return this.http.put<Trainer>(this.apiurl,httOptions).pipe(
        catchError(this.handleError('updateTrainer', trainer))
      );
    }

    deleteTrainer(id:number){
      const url = `${this.apiurl}/${id}`; 
      return this.http.delete(url, httOptions).
      pipe(catchError(this.handleError('delete')));

    }
  
}
