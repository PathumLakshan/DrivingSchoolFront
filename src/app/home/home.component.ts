import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  imports: [
    HomeRoutingModule,
  ]
})
export class HomeComponent implements OnInit {

  constructor(router : Router) { }

  ngOnInit() {
  }

}
