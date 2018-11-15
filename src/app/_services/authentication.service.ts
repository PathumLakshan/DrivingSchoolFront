import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    // api url from env.
    URL = environment.API_URL;
    isLoggedIn = false;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(this.URL + 'Login/authentication', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.Token) { 
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('token', user.Token);
                    sessionStorage.setItem('role', user.roleDesc);
                    sessionStorage.setItem('roleId', user.roleId);
                    sessionStorage.setItem('userId', user.userId);
                    this.isLoggedIn = true;
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        this.isLoggedIn = false;
        console.log('AuthService: isLoggedIn:', this.isLoggedIn)
    }
}