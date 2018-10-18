import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Trainee } from '../home/trainee/trainee';
import { Trainer } from '../home/trainer/trainer';
import { Vehicle } from '../home/vehicle/vehicle';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { concat } from 'rxjs';

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
schedules: any = [];
tempschedule: any = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getTrainers();
    this.getTrainees();
    this.getVehicle();
  }

  getTrainers():void{
    this.scheduleService.getTrainer().subscribe(
      trainers=> this.trainers = trainers
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
    
  }

  addData(){
  this.schedules.push(Object.assign({}, this.tempschedule));
  }
}
