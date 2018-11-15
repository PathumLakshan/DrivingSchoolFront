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
  providers: [TraineeService, CandidateService]
})

export class TraineeComponent implements OnInit {
candidate: Candidate[];
trainees: Trainee[];
editTrainee: Trainee;
selectedTrainee: Trainee[];
trainee: any = {};
loading: boolean;
RoleId: number;


  constructor(
    private traineeService: TraineeService,
    private cadidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidate();
    this.RoleId = parseInt( sessionStorage.getItem('roleId'));
  }

  edit(trainee) {
    this.editTrainee = trainee;
  }

  onInput($event) {
    $event.preventDefault();
  }

  getCandidate(): void {
    this.cadidateService.getCandidate().subscribe(
      candidate => this.candidate = candidate
    );
  }

  getTrainee(): void {
    this.loading = true;
    this.traineeService.getTrainee().subscribe(
      (traineeRes) => {
        this.trainees = traineeRes;
      this.loading = false;
      });
  }

  add(){
     this.traineeService.addTrainee(this.trainee).subscribe(
       (res) => alert('Success !')
     );
  }

  update(trainee: Trainee){
    // if (this.editTrainee) {
    //   this.traineeService.updateTrainee(trainee)
    //     .subscribe(trainee => {
    //       // replace the hero in the heroes list with update from server
    //       const ix = trainee ? this.trainees.findIndex(h => h.reg_id === trainee.reg_id) : -1;
    //       if (ix > -1) { this.trainees[ix] = trainee; }
    //     });
    //   this.editTrainee = undefined;
    // }
  }

  delete(trainee: Trainee) {
    this.trainees = this.trainees.filter( tr => tr !== trainee )
    this.traineeService.deleteTrainee(trainee.reg_id).subscribe();
  }
}
