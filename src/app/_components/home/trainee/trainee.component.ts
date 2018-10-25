import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../../_services/trainee.service';

import { CandidateService } from '../../../_services/candidate.service';
import { Trainee } from '../../../_models/trainee';
import { Candidate } from '../../../_models/candidate';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css'],
  providers:[TraineeService,CandidateService]
})
export class TraineeComponent implements OnInit {
candidate: Candidate[];
trainees: Trainee[];
editTrainee : Trainee;
selectedTrainee: Trainee[];
trainee : any = {};

  constructor(
    private traineeService: TraineeService,
    private cadidateService: CandidateService) { }

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
    this.cadidateService.getCandidate().subscribe(
      candidate => this.candidate = candidate
    );
  }

  add(){
     this.traineeService.addTrainee(this.trainee).subscribe(
       (res) => alert('Success !')
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
