import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../_services/schedule.service';

import { Trainee } from '../../_models/trainee';
import { Trainer } from '../../_models/trainer';
import { Vehicle } from '../../_models/vehicle';
import { Schedule } from '../../_models/schedule';

import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { concat } from 'rxjs';
import { start } from 'repl';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers:[ ScheduleService ]
})

export class ScheduleComponent implements OnInit {
trainees: Trainee[];
trainers: any=[];
vehicles: Vehicle[];
schedules: any = [];
tempschedule: any = [];


finalSchedule = [
  'date',
  'start_time'
]

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getTrainers();
    this.getTrainees();
    this.getVehicle();
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

  showData(){
    console.log(this.tempschedule);
    console.log(this.schedules);
    var len = this.schedules.length;
    console.log(len)

    // var tempArr = Object.assign([], this.schedules)
    // this.finalSchedule.push(tempArr);

    
    for(var i=0;i<len;i++) {
     // Object.defineProperty(this.finalSchedule[i], 'date',{ value: this.schedules[i].date})
      this.finalSchedule[i] = this.schedules[i].date
      this.finalSchedule[i] = this.schedules[i].start_time

        //console.log('a')
        //console.log(this.schedules[i].date)
        //this.finalSchedule[i].date = this.schedules[i].date
        //this.finalSchedule[i].date = this.schedules[i].date,
        // this.finalSchedule[i].start_time = this.schedules[i].start_time,
        // this.finalSchedule[i].end_time = this.schedules[i].end_time,
        // this.finalSchedule[i].trainer_id = this.schedules[i].trainer.trainer_id,
        // this.finalSchedule[i].trainee_id = this.schedules[i].trainee.reg_id,
        // this.finalSchedule[i].v_id = this.schedules[i].vehicle.v_iddate
    }
    

    console.log(this.finalSchedule)
  }

  addData(){
    console.log(this.trainers)
   // console.log(this.finalSchedule[0].date)[""0""].date
   var temp = Object.assign([], this.tempschedule)
    this.schedules.push(temp);
    console.log(this.finalSchedule)
    console.log(this.schedules)
    
 
 
  // this.schedules.forEach(element => {
  //   this.finalSchedule[0].date = element.date,
  //   console.log('a')
  //   this.finalSchedule[1].start_time = element.start_time,
  //   this.finalSchedule[2].end_time = element.end_time,
  //   this.finalSchedule[3].trainer_id = element.trainer.trainer_id,
  //   this.finalSchedule[4].trainee_id = element.trainee.reg_id,
  //   this.finalSchedule[5].v_id = element.vehicle.v_id
  // });
  }
  
}