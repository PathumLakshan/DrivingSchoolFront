import { Component, OnInit } from '@angular/core';
import { TrainerService } from './trainer.service';
import { Trainer } from './trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
  providers:[TrainerService]
})
export class TrainerComponent implements OnInit {
trainers: Trainer[];
editTrainer : Trainer;

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.get();
  }

  edit(trainer){
    this.editTrainer = trainer;
  }

  get():void{
    this.trainerService.getTrainer().subscribe(
      trainers => this.trainers = trainers
    );
  }

  add(trainer_name: string){
    this.editTrainer = undefined;
    trainer_name = trainer_name.trim();
    if (!trainer_name) { return; }

    // The server will generate the id for this new hero
    const newTrainer: Trainer = { trainer_name } as Trainer;
    this.trainerService.addTrainer(newTrainer).subscribe(
      trainer => this.trainers.push(trainer)
    );
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
