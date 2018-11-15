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
login:  any = {};
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

  userLogin() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.login.userName, this.login.password)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          this.loading = false;
          this.clearFields();
        }
        );
      }

      clearFields(): void {
        this.login.userName = null;
        this.login.password = null;
      }
}