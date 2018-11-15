import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isLoggedIn: boolean;
  RoleId: number;
  userId: number;
  isHome = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn = !!sessionStorage.getItem('token');
    this.RoleId = parseInt(sessionStorage.getItem('roleId'));
    this.userId = parseInt(sessionStorage.getItem('userId'));

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((res: NavigationEnd) => {
        if(res.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
    });
    this.isLoggedIn = !!sessionStorage.getItem('token');
  }
}
