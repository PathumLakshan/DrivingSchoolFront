import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Vehicle } from '../_models/vehicle'

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..

import { environment } from '../../environments/environment';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer' + ' ' + sessionStorage.getItem('token')
  })
};

@Injectable()
export class VehicleService {
// api url from env.
  URL = environment.API_URL;
  apiurl = this.URL + 'vehicle';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('VehicleService');
      }

    getVehicle(): Observable<Vehicle[]>{
      return this.http.get<Vehicle[]>(this.apiurl, httpOptions)
                  .pipe(
                    catchError(this.handleError('getVehicle', []))
                  );
    }

    addVehicle(vehicle: Vehicle): Observable<Vehicle>{
      return this.http.post<Vehicle>(
        this.apiurl, vehicle,httpOptions).pipe(
          catchError(this.handleError('addVehicel',vehicle))
        );
    }

    updateVehicle(vehicle: Vehicle){
      return this.http.put<Vehicle>(this.apiurl,httpOptions).pipe(
        catchError(this.handleError('updateVehicle', vehicle))
      );
    }

    deleteVehicle(id:number){
      const url = `${this.apiurl}/${id}`; 
      return this.http.delete(url, httpOptions).
      pipe(catchError(this.handleError('delete')));

    }
  
}
