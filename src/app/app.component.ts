import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isLoggedIn:boolean;

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('token');
    console.log('In app component:',this.isLoggedIn)
  }
  title = 'DrivingSchool';
  
}
