import { NgModule, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { HomeRoutingModule } from './Home_Routing.module';
import { Router,NavigationEnd } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import { ScheduleService } from '../../_services/schedule.service';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ScheduleService]
})

@NgModule({
  imports: [
    HomeRoutingModule,
  ]
})
export class HomeComponent implements OnInit {

isLoggedIn: boolean;
userId: number;
RoleId: number;
schedules: any = [];
pageIsChanged = false;
isHome = false;
loading: boolean;
scheduleForTrainer: any = [];
scheduleForTrainee: any = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private scheduleService: ScheduleService
    ) { }
  ngOnInit() {
    this.routerEventListner();
    this.isLoggedIn = !!sessionStorage.getItem('token');
    this.RoleId = parseInt(sessionStorage.getItem('roleId'));
    this.userId = parseInt(sessionStorage.getItem('userId'));
  }

  loadData() {
    this.loading = true;
    this.scheduleService.getSchedule().subscribe(
      (response) => {
        this.schedules = response;
        this.loading = false;
    });
    if ( this.RoleId === 2) {
      this.loading = true;
    this.scheduleService.getSchedulebyTraineeId(this.userId).subscribe(
      (response) => {
        this.scheduleForTrainee = response;
      this.loading = false;
    });
    } else if ( this.RoleId === 3) {
      this.loading = true;
    this.scheduleService.getSchedulebyTraineeId(this.userId).subscribe(
      (response) => {
        this.scheduleForTrainer = response;
      this.loading = false;
    });
    }
  }

  routerEventListner(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((res: NavigationEnd) => {
        if (res.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
    });
  }

  LogOut() {
    return new Promise((resolve) => {
      this.loading = true;
      this.authenticationService.logout();
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['login']);
      }, 3000);
      resolve();
    });
  }

}
