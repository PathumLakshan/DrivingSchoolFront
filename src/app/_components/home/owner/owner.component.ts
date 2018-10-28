import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../../_services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  providers:[OwnerService]
})
export class OwnerComponent implements OnInit {

owner: any={};
vehicle: any={};

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
  }

  add(){
    console.log('beforeSubmit')
    this.ownerService.addOwner(this.owner).subscribe(
      (res) => console.log('Response', res)
    );
    alert('Submitted !')
    console.log(this.owner)
    console.log(this.vehicle)
  }
}
