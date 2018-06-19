import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

userform = new FormGroup({

name : new FormControl(null ,[Validators.required,Validators.minLength(5)]),

email : new FormControl(null ,Validators.required),
password : new FormControl(null ,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
repassword : new FormControl(null ,Validators.required)

})





  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate([''])
    }
}
