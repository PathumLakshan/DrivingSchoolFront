import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
isLoggedIn = false;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('https://localhost:44323/api/Login/authentication', { username, password })
            .pipe(map(user => {
                //login successful if there's a jwt token in the response
                if (user && user.Token) {
                    console.log('token');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', user.Token);
                    localStorage.setItem('role', user.roleDesc);
                    this.isLoggedIn = true;
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.isLoggedIn = false;
        console.log('AuthService: isLoggedIn:', this.isLoggedIn)
    }
}