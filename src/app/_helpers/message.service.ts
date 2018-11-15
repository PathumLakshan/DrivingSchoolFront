import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material'; 

@Injectable({ providedIn: 'root' })
export class MessageService {

  private subject = new Subject<any>();
  messages: string[] = [];
  errorMessage: string;
  isLoggedIn: boolean;
  userId: number;
  RoleId: number;

  constructor(
    public snackbar: MatSnackBar,
  ) {}

  add(message: string) {
    this.messages.push(message);
  }

  showMessage(message: string) {
    this.snackbar.open(message, 'close',{
      duration: 5000,
      panelClass: ['red-snackbar']
    });
  }

  setSessionVar(): void {
    this.isLoggedIn = !!sessionStorage.getItem('token');
    this.RoleId = parseInt( sessionStorage.getItem('roleId'));
    this.userId = parseInt(sessionStorage.getItem('userId'));
  }

  clear() {
    this.messages = [];
  }

    getLoginVar(): Observable<any> {
        return this.subject.asObservable();
    }
}
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/