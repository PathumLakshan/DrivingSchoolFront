import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TrainerComponent } from './trainer/trainer.component';
import { TraineeComponent } from './trainee/trainee.component';
import { CandidateComponent } from './candidate/candidate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from '../../_routing-modules/home-routing.module';
import { OwnerComponent } from './owner/owner.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports: [  
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [
    TrainerComponent,
    TraineeComponent,
    CandidateComponent,
    VehicleComponent,
    PaymentTypeComponent,
    OwnerComponent
],
schemas: [ NO_ERRORS_SCHEMA ],
})
export class HomeModule {}

