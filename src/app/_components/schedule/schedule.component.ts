import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../../_services/schedule.service';

import { Trainee } from '../../_models/trainee';
import { Trainer } from '../../_models/trainer';
import { Vehicle } from '../../_models/vehicle';
import { Schedule } from '../../_models/schedule';

import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { concat } from 'rxjs';
import { start } from 'repl';
import { KeyedRead } from '@angular/compiler';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers:[ ScheduleService ]
})

export class ScheduleComponent implements OnInit {
trainees: Trainee[];
trainers: Trainer[];
vehicles: Vehicle[];

Sessions_Array: any = [];           //schedules
TempSession_Array: any = [];        //tempSchedule
FilteredSession_Array: any =[];     //finalSchedule
FinalSchedule_Array: any =[];       //finalfinalS

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getTrainers();
    this.getTrainees();
    this.getVehicle()
  }

  getTrainers():void{
    this.scheduleService.getTrainer().subscribe(
      trainers => this.trainers = trainers
    );
  }

  getTrainees():void{
    this.scheduleService.getTrainee().subscribe(
      trainees => this.trainees = trainees
    );
  }

  getVehicle():void{
    this.scheduleService.getVehicle().subscribe(
      vehicles => this.vehicles = vehicles
    );
  }

  onInput($event){
    $event.preventDefault();
  }

  dropdownChange(){
    alert('aaa')
  }

  showData(){

  this.Sessions_Array.forEach((element,index) => {
  this.FilteredSession_Array['date'] = element.date
  this.FilteredSession_Array['start_time'] = element.start_time,
  this.FilteredSession_Array['end_time'] = element.end_time,
  this.FilteredSession_Array['trainer_id'] = element.trainer.trainer_id,
  this.FilteredSession_Array['trainee_id'] = element.trainee.reg_id,
  this.FilteredSession_Array['v_id'] = element.vehicle.v_id
  
    this.FinalSchedule_Array.push(Object.assign({},this.FilteredSession_Array))
    console.log('index is :',index)
  });
   
    console.log('finals',this.FinalSchedule_Array)

    
  }

  addData(){
    this.Sessions_Array.push( Object.assign([], this.TempSession_Array));
    console.log(this.FilteredSession_Array)
  }
  
  sendData(){
    this.scheduleService.createSchedule(JSON.stringify(this.FinalSchedule_Array)).subscribe(
      (res) => console.log(res)
    )
  }
}