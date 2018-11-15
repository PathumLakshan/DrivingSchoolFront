import { Input, OnInit } from '@angular/core';

export class SharedService implements OnInit {
public isLoggedIn: boolean;
public RoleId: number;
public userId: number;

ngOnInit(){
    this.isLoggedIn = !!sessionStorage.getItem('token');
    this.RoleId = parseInt( sessionStorage.getItem('roleId'));
    this.userId = parseInt(sessionStorage.getItem('userId'));

    console.log(this.RoleId, this.userId, this.isLoggedIn)
}
}