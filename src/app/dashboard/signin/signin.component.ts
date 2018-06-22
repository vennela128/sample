import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],

 
})
export class SigninComponent implements OnInit {
data:any={}
  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  fun(){
this.router.navigate(['details'])

  }
  forgot(){
    this.router.navigate(['forgot'])
    }
signup(){
  this.router.navigate(['signup'])
}
}
