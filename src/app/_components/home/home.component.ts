import { NgModule, Input }       from '@angular/core';
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

@Input('isHome') isHomeRoute:boolean;

isLoggedIn: boolean;
loading = false;
userRole: string;
schedules: any=[];
pageIsChanged = false;
isHome = false;

  constructor( 
    private router: Router,
    private authenticationService: AuthenticationService,
    private scheduleService: ScheduleService
    ) { }
  
  ngOnInit() {
    this.routerEventListner()
    this.isLoggedIn = !!localStorage.getItem('token');
    this.userRole = localStorage.getItem("role");
  }

  loadData(){
    this.scheduleService.getSchedule().subscribe(
      (response) => this.schedules = response
    )
  }

  routerEventListner():void{
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((res: NavigationEnd) => {
        if(res.url == '/home')
        { this.isHome = true; console.log('is Home:True');console.log('is THome:_',this.isHome)}
        else
        { this.isHome = false; console.log('is Home:False');console.log('is FHome:_',this.isHome) }
    });
  }

  LogOut(){
    return new Promise((resolve) => {	
      this.loading = true;    
      this.authenticationService.logout();
      setTimeout(() =>{
      this.loading = false;
        this.router.navigate(['login']);
      }, 3000);
      resolve();
    });
  }

}
