import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TrainerComponent } from './trainer/trainer.component';
import { TraineeComponent } from './trainee/trainee.component';
import { CandidateComponent } from './candidate/candidate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { OwnerComponent } from './owner/owner.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    TrainerComponent,
    TraineeComponent,
    CandidateComponent,
    VehicleComponent,
    PaymentTypeComponent,
    OwnerComponent
  ]
})
export class HomeModule {}

