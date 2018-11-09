import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isLoggedIn:boolean;
  isHome = false;

  constructor(
private router: Router
){}

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((res: NavigationEnd) => {
        if(res.url == '/home')
        { this.isHome = true; console.log('is Home:True');console.log('is THome:_',this.isHome)}
        else
        { this.isHome = false; console.log('is Home:False');console.log('is FHome:_',this.isHome) }
    });
  
    this.isLoggedIn = !!localStorage.getItem('token');
    console.log('In app component:',this.isLoggedIn)
  }
  title = 'DrivingSchool';
  
}
