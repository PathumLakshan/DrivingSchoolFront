import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
}) 

export class LogginComponent implements OnInit {
login:  any= {};
loading = false;
submitted = false;
returnUrl: string;
error = '';

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  userLogin(){
    this.submitted = true;
    alert('a')
    this.loading = true;
    this.authenticationService.login(this.login.userName, this.login.password)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['home']);
            console.log(data)   
        },
        error => {
          console.log(error)
            this.error = error.message;
            this.loading = false;
        });
      }
}