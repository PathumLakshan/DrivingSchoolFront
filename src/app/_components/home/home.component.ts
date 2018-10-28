import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HomeRoutingModule } from '../../_routing-modules/home-routing.module';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
//import { ScheduleService } from '../../_services/schedule.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  imports: [
    HomeRoutingModule,
  ]
})
export class HomeComponent implements OnInit {
isLoggedIn: boolean;
loading = false;
userRole: string;
schedules: any={};


  constructor( 
    private router: Router,
    private authenticationService: AuthenticationService,
    // private scheduleService: ScheduleService
    ) { }
  
  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
    this.userRole = localStorage.getItem("role");
    console.log('home component: loggedIn',this.isLoggedIn)
    console.log('home component:Loadin',this.loading)

    
  }
  LogOut(){
    return new Promise((resolve) => {	 
      console.log('a')     
      this.loading = true;    
      this.authenticationService.logout();
      console.log('b')
      setTimeout(() =>{
        
      this.loading = false;
        console.log('c')
        this.router.navigate(['login']);
      }, 3000);
      resolve();
    });
    // 
    // console.log('logout')
  }

}
