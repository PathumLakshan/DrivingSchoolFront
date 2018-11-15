import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../../_services/owner.service';
import { Owner } from '../../../_models/owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  providers:[OwnerService]
})
export class OwnerComponent implements OnInit {

owner: any = {};
vehicle: any = {};
owners: Owner[];
loading: boolean;
RoleId: number;
 
constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.RoleId = parseInt( sessionStorage.getItem('roleId'));
  }

  get(): void {
    this.loading = true;
    this.ownerService.getOwner().subscribe(
      (res) => {
        console.log(res);
        this.owners = res;
        this.loading = false;
      }
    )
  }

  add() {
    this.ownerService.addOwner(this.owner).subscribe(
      (res) => console.log('Response', res)
    );
  }

}
