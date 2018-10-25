import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..
import { Trainee } from '../_models/trainee';

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    "Authorization" : 'Bearer'+' '+ localStorage.getItem('token')
  })
};

@Injectable()
export class TraineeService {
apiurl = 'https://localhost:44323/api/trainee';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TraineeService');
      }
  
    getTrainee(): Observable<Trainee[]>{
      return this.http.get<Trainee[]>(this.apiurl)
                  .pipe(
                    catchError(this.handleError('getTrainee', []))
                  );
    }

    addTrainee(trainee: Trainee): Observable<Trainee>{
      return this.http.post<Trainee>(
        this.apiurl, trainee,httOptions).pipe(
          catchError(this.handleError('addTrainee',trainee))
        );
    }

    updateTrainee(trainee: Trainee){
      return this.http.put<Trainee>(this.apiurl,httOptions).pipe(
        catchError(this.handleError('updateTrainee', trainee))
      );
    }

    deleteTrainee(id:number){
      const url = `${this.apiurl}/${id}`; 
      return this.http.delete(url, httOptions).
      pipe(catchError(this.handleError('delete')));

    }
  
}
