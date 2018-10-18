import { Component, OnInit } from '@angular/core';
import { TraineeService } from './trainee.service';
import { Trainee } from './trainee';
import { Candidate } from '../candidate/candidate';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css'],
  providers:[TraineeService]
})
export class TraineeComponent implements OnInit {
trainees: Trainee[];
editTrainee : Trainee;
selectedTrainee: Trainee[];
trainee : any = {};

  constructor(private traineeService: TraineeService) { }

  ngOnInit() {
    this.get();
    
  }

  edit(trainee){
    this.editTrainee = trainee;
  }

  onInput($event){
    $event.preventDefault();
  }

  get():void{
    this.traineeService.getTrainee().subscribe(
      trainees => this.trainees = trainees
    );
  }

  add(){
     this.traineeService.addTrainee(this.trainee).subscribe(
       (res) => console.log('response',res)
     );
     
  }

  update(trainee: Trainee){
    if (this.editTrainee) {
      this.traineeService.updateTrainee(trainee)
        .subscribe(trainee => {
          // replace the hero in the heroes list with update from server
          const ix = trainee ? this.trainees.findIndex(h => h.reg_id === trainee.reg_id) : -1;
          if (ix > -1) { this.trainees[ix] = trainee; }
        });
      this.editTrainee = undefined;
    }
   
  }
  delete(trainee: Trainee){
    this.trainees = this.trainees.filter( tr => tr !== trainee)
    this.traineeService.deleteTrainee(trainee.reg_id).subscribe();
  }
}
