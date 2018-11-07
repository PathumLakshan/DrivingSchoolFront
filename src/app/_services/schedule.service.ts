import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service';// to access different directory need to use ..
import { Trainee } from '../_models/trainee';
import { Trainer } from '../_models/trainer';
import { Vehicle } from '../_models/vehicle';

import { Schedule } from '../_models/schedule';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    "Authorization" : 'Bearer'+' '+ localStorage.getItem('token')
  })
};

@Injectable()
export class ScheduleService {

traineeapiurl = 'https://localhost:44323/api/trainee';
trainerapiurl = 'https://localhost:44323/api/trainer';
vehicleapiurl = 'https://localhost:44323/api/vehicle';

createUrl ='https://localhost:44323/api/training';

private handleError : HandleError

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TraineeService');
      this.handleError = httpErrorHandler.createHandleError('TrainerService');
      this.handleError = httpErrorHandler.createHandleError('VehicleService');  
      }
  
    //GET Methods
    getTrainee(): Observable<Trainee[]>{
      return this.http.get<Trainee[]>(this.traineeapiurl,httpOptions)
                  .pipe(
                    catchError(this.handleError('getTrainee', []))
                  );
    }

    getTrainer(): Observable<Trainer[]>{
      return this.http.get<Trainer[]>(this.trainerapiurl,httpOptions)
                  .pipe(
                    catchError(this.handleError('getTrainer', []))
                  );
    }

    getVehicle(): Observable<Vehicle[]>{
      return this.http.get<Vehicle[]>(this.vehicleapiurl,httpOptions)
                  .pipe(
                    catchError(this.handleError('getVehicle', []))
                  );
    }
    
    // POST Methods

    createSchedule(schedule){
      return this.http.post(this.createUrl,schedule,httpOptions)
                  .pipe(
                    catchError(this.handleError('Create Schedule',[]))
                  );
    }
    
  
}
