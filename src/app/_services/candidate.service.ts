import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..
import { Candidate } from '../_models/candidate';

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    "Authorization" : 'Bearer'+' '+ localStorage.getItem('token')
  })
};

@Injectable()
export class CandidateService {
apiurl = 'https://localhost:44323/api/candidate';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('CandidateService');
      }
  
    getCandidate(): Observable<Candidate[]>{
      return this.http.get<Candidate[]>(this.apiurl)
                  .pipe(
                    catchError(this.handleError('getCandidate', []))
                  );
    }

    addCandidate(candidate: Candidate): Observable<Candidate>{
      return this.http.post<Candidate>(
        this.apiurl, candidate,httOptions).pipe(
          catchError(this.handleError('addCandidate',candidate))
        );
    }

    updateCandidate(candidate: Candidate){
      return this.http.put<Candidate>(this.apiurl,httOptions).pipe(
        catchError(this.handleError('updateCandidate', candidate))
      );
    }

    deleteCandidate(id:number){
      const url = `${this.apiurl}/${id}`; 
      return this.http.delete(url, httOptions).
      pipe(catchError(this.handleError('delete')));

    }
  
}
