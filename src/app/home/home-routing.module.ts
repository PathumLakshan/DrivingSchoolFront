import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { TrainerComponent } from './trainer/trainer.component';
import { TraineeComponent } from './trainee/trainee.component';
import { CandidateComponent } from './candidate/candidate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { HomeComponent } from './home.component';

const homeroutes : Routes =[
   {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
    children: [
      
          { path: 'trainer', component: TrainerComponent },
          { path: 'trainee', component: TraineeComponent },
          { path: 'candidate', component: CandidateComponent },
          { path: 'vehicle', component: VehicleComponent },
          { path: 'paymenttype', component: PaymentTypeComponent }
      
    ]
   }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeroutes)
  ],
  exports :[
      RouterModule
  ]
})

export class HomeRoutingModule { }