import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../_services/trainer.service';
import { Trainer } from '../../../_models/trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
  providers:[TrainerService]
})
export class TrainerComponent implements OnInit {
trainers: Trainer[];
newTrainer: any = {};
editTrainer: Trainer;
radioModel: string;
laoding: boolean;
RoleId: number;
    
  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
  
  this.RoleId = parseInt( sessionStorage.getItem('roleId'));
  }

  edit(trainer) {
    this.editTrainer = trainer;
  }

  getId(id: number) {
    alert(id);
  }
  
  get(): void {
    this.laoding = true;
    this.trainerService.getTrainer().subscribe(
      (trainers) => {this.trainers = trainers;
         this.laoding = false;
        });
       }

  add() {
    this.trainerService.addTrainer(this.newTrainer).subscribe(
      (res) => console.log(res)
    )
  }

  update(trainer: Trainer) {
    if (this.editTrainer) {
      this.trainerService.updateTrainer(trainer)
        .subscribe( (response) => {
          alert(response);
        });
   }
 }

  // delete(id) {
  //   this.trainerService.deleteTrainer(id).subscribe();
  // }
}
