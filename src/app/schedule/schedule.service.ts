import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.servie';// to access different directory need to use ..
import { Trainee } from '../home/trainee/trainee';
import { Trainer } from '../home/trainer/trainer';
import { Vehicle } from '../home/vehicle/vehicle';

const httOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable()
export class ScheduleService {

traineeapiurl = 'https://localhost:44323/api/trainee';
trainerapiurl = 'https://localhost:44323/api/trainer';
vehicleapiurl = 'https://localhost:44323/api/vehicle';

private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TraineeService');
      this.handleError = httpErrorHandler.createHandleError('TrainerService');
      this.handleError = httpErrorHandler.createHandleError('VehicleService');  
      }
  
    getTrainee(): Observable<Trainee[]>{
      return this.http.get<Trainee[]>(this.traineeapiurl)
                  .pipe(
                    catchError(this.handleError('getTrainee', []))
                  );
    }

    getTrainer(): Observable<Trainer[]>{
      return this.http.get<Trainer[]>(this.trainerapiurl)
                  .pipe(
                    catchError(this.handleError('getTrainer', []))
                  );
    }

    getVehicle(): Observable<Vehicle[]>{
      return this.http.get<Vehicle[]>(this.vehicleapiurl)
                  .pipe(
                    catchError(this.handleError('getVehicle', []))
                  );
    }

    
  
}
