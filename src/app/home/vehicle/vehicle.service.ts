import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Vehicle } from './vehicle'

import { HttpErrorHandler, HandleError } from '../../http-error-handler.servie';// to access different directory need to use ..

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable()
export class VehicleService {
apiurl = 'https://localhost:44323/api/vehicle';
private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('VehicleService');
      }
  
    getVehicle(): Observable<Vehicle[]>{
      return this.http.get<Vehicle[]>(this.apiurl)
                  .pipe(
                    catchError(this.handleError('getVehicle', []))
                  );
    }

    addVehicle(vehicle: Vehicle): Observable<Vehicle>{
      return this.http.post<Vehicle>(
        this.apiurl, vehicle,httOptions).pipe(
          catchError(this.handleError('addVehicel',vehicle))
        );
    }

    updateVehicle(vehicle: Vehicle){
      return this.http.put<Vehicle>(this.apiurl,httOptions).pipe(
        catchError(this.handleError('updateVehicle', vehicle))
      );
    }

    deleteVehicle(id:number){
      const url = `${this.apiurl}/${id}`; 
      return this.http.delete(url, httOptions).
      pipe(catchError(this.handleError('delete')));

    }
  
}
