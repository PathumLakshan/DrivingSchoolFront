import { Component, OnInit } from '@angular/core';

import { PaymentType } from '../../../_models/paymentType';

import { PaymentTypeService } from '../../../_services/paymentType.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css'],
  providers:[PaymentTypeService]
})
export class PaymentTypeComponent implements OnInit {
ptype: any={};
ptypes: PaymentType[];
  constructor(private paymentTypeService: PaymentTypeService) { }

  ngOnInit() {
    this.getPTypes();
  }

  addNewPType(){
    this.paymentTypeService.addPaymentType(this.ptype).subscribe(
      (res) => console.log(res)
    );
    console.log('submitted !');
  }

  getPTypes(){
    this.paymentTypeService.getPaymentTypes().subscribe(
      (response) => this.ptypes = response
    )
  }

}
