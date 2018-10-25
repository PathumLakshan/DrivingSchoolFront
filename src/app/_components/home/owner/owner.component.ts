import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

owner: any={};
vehicle: any={};

  constructor() { }

  ngOnInit() {
  }

  add(){
    alert('Submitted !')
    console.log(this.owner)
    console.log(this.vehicle)
  }
}
