import { Component, OnInit } from '@angular/core';
import { LogginService } from './loggin.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
  providers:[LogginService]
}) 


export class LogginComponent implements OnInit {
login:  any= {};

  constructor(private loginService: LogginService, private router: Router,) { }

  ngOnInit() {
  }

  userLogin(){
    this.loginService.userLogin(this.login).subscribe(
      (response) => {
        //console.log('Response:',response)
        this.router.navigate(['home'])
      });
  }

}
