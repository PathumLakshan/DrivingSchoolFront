import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../_helpers/http-error-handler.service'; // to access different directory need to use ..
import { Trainee } from '../_models/trainee';
import { Trainer } from '../_models/trainer';
import { Vehicle } from '../_models/vehicle';

import { Schedule } from '../_models/schedule';

import { environment } from '../../environments/environment';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer' + ' ' + sessionStorage.getItem('token')
  })
};

@Injectable()
export class ScheduleService {
URL = environment.API_URL;

traineeapiurl = this.URL + 'trainee';
trainerapiurl = this.URL + 'trainer';
vehicleapiurl = this.URL + 'vehicle';


private handleError: HandleError;

  constructor(
    private http:HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TraineeService');
      this.handleError = httpErrorHandler.createHandleError('TrainerService');
      this.handleError = httpErrorHandler.createHandleError('VehicleService');
      }
    // GET Methods
    getTrainee(): Observable<Trainee[]>{
      return this.http.get<Trainee[]>(this.traineeapiurl,httpOptions)
                  .pipe(
                    catchError(this.handleError('getTrainee', []))
                  );
    }

    getTrainer(): Observable<Trainer[]>{
      return this.http.get<Trainer[]>(this.trainerapiurl, httpOptions)
                  .pipe(
                    catchError(this.handleError('getTrainer', []))
                  );
    }

    getVehicle(): Observable<Vehicle[]>{
      return this.http.get<Vehicle[]>(this.vehicleapiurl, httpOptions)
                  .pipe(
                    catchError(this.handleError('getVehicle', []))
                  );
    }

    getSchedule(): Observable<Schedule[]>{
      return this.http.get<Schedule[]>(this.URL + 'training', httpOptions)
      .pipe(
        catchError(this.handleError('getSchedule',[]))
      )
    }

    getSchedulebyTraineeId(TraineeId: number): Observable<any []>{
      return this.http.get<Schedule[]>(this.URL + 'training/traineeschedule/' + TraineeId, httpOptions)
      .pipe(
        catchError(this.handleError('getSchedulebyTraineeId',[]))
      )
    }

    getSchedulebyTrainerId(TrainerId: number): Observable<any []>{
      return this.http.get<Schedule[]>(this.URL + 'training/trainerschedule/' + TrainerId, httpOptions)
      .pipe(
        catchError(this.handleError('getSchedulebyTrainerId',[]))
      )
    }

    // POST Methods

    createSchedule(schedule){
      return this.http.post(this.URL+'training',schedule,httpOptions)
                  .pipe(
                    catchError(this.handleError('Create Schedule',[]))
                  );
    }
    
  
}
