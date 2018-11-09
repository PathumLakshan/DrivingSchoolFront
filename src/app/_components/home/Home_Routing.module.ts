import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { TrainerComponent } from './trainer/trainer.component';
import { TraineeComponent } from './trainee/trainee.component';
import { CandidateComponent } from './candidate/candidate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { OwnerComponent } from './owner/owner.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
//import { HomeComponent } from './home.component';
import { AuthGuard } from '../../_guards/auth.guard';

const homeroutes : Routes =[
   {
    path: '',
    //component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
          { path: 'trainer', component: TrainerComponent,canActivate: [AuthGuard] },
          { path: 'trainee', component: TraineeComponent,canActivate: [AuthGuard] },
          { path: 'candidate', component: CandidateComponent,canActivate: [AuthGuard] },
          { path: 'vehicle', component: VehicleComponent,canActivate: [AuthGuard] },
          { path: 'paymenttype', component: PaymentTypeComponent,canActivate: [AuthGuard] },
          { path: 'owner', component: OwnerComponent,canActivate: [AuthGuard] }   
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