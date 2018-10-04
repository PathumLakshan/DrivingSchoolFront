import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TrainerComponent } from './trainer/trainer.component';
import { TraineeComponent } from './trainee/trainee.component';
import { CandidateComponent } from './candidate/candidate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    TrainerComponent,
    TraineeComponent,
    CandidateComponent,
    VehicleComponent,
    PaymentTypeComponent
  ]
})
export class HomeModule {}

