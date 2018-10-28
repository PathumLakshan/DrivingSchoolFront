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
newTrainer: any={};
editTrainer : Trainer;

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
   // this.get();
  }

  edit(trainer){
    this.editTrainer = trainer;
  }

  get():void{
    this.trainerService.getTrainer().subscribe(
      trainers => this.trainers = trainers
    );
  }

  add(){
    this.trainerService.addTrainer(this.newTrainer).subscribe(
      (res) => alert('Success !')
    )
  }

  update(trainer: Trainer){
    if (this.editTrainer) {
      this.trainerService.updateTrainer(trainer)
        .subscribe(trainer => {
          // replace the hero in the heroes list with update from server
          const ix = trainer ? this.trainers.findIndex(h => h.trainer_id === trainer.trainer_id) : -1;
          if (ix > -1) { this.trainers[ix] = trainer; }
        });
      this.editTrainer = undefined;
    }
   
  }
  delete(trainer: Trainer){
    this.trainers = this.trainers.filter( tr => tr !== trainer)
    this.trainerService.deleteTrainer(trainer.trainer_id).subscribe();
  }
}
