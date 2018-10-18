import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { OwnerService } from '../owner/owner.service';
import { Vehicle } from './vehicle';
import { Owner } from '../owner/owner';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers:[VehicleService, OwnerService]
})
export class VehicleComponent implements OnInit {
ownerName:'';
vehicles: Vehicle[];
vehicle: any ={};
owners: Owner[];

  constructor(private vehicleServie: VehicleService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.getOwner();
    this.get();
  }

  get():void{
    this.vehicleServie.getVehicle().subscribe(
      vehicles => this.vehicles = vehicles
    );
  }

  add(){
     this.vehicleServie.addVehicle(this.vehicle).subscribe(
       (res) => console.log('response',res)
     );  
  }

  getOwner():void{
    this.ownerService.getOwner().subscribe(
      owners => this.owners = owners
    )
  }
}
