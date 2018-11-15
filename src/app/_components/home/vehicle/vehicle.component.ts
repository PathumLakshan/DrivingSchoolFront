import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../_services/vehicle.service';
import { OwnerService } from '../../../_services/owner.service';
import { Vehicle } from '../../../_models/vehicle';
import { Owner } from '../../../_models//owner';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers:[VehicleService, OwnerService]
})
export class VehicleComponent implements OnInit {
ownerName: '';
vehicles: Vehicle[];
vehicle: any = {};
owners: Owner[];
loading: boolean;
RoleId: number;

  constructor(private vehicleServie: VehicleService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.RoleId = parseInt( sessionStorage.getItem('roleId'));
  
  }

  get():void{
    this.loading = true;
    this.vehicleServie.getVehicle().subscribe(
      (vehicles) => {
        this.vehicles = vehicles;
        this.ownerService.getOwner().subscribe(
          (owners) => {
            this.owners = owners;
            this.loading = false;
          }
        );
      }
    );
  }

  add() {
     this.vehicleServie.addVehicle(this.vehicle).subscribe(
       (res) => console.log('response', res)
     );
  }
}
