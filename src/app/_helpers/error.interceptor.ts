import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';
import { MessageService } from './message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private messageService: MessageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            } else if (err.status === 0) {
                this.messageService.showMessage('Unknonw Error Occured !, Probably You are not Connected to Server.Or Server is Offline.');
            } else if (err.status === 400) {
                this.messageService.showMessage('Bad Request');
            } else if (err.status === 404) {
                this.messageService.showMessage('Not Found !');
            }  else if (err.status === 200) {
                this.messageService.showMessage('Success !');
            } else {
                this.messageService.showMessage('Something went wrong !');
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        })
        );
    }
}