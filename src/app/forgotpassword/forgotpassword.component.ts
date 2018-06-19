import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  form = new FormGroup ({
    email : new FormControl('' ,Validators.required),
    password :new FormControl(null ,[Validators.required,Validators.maxLength(10)]),
    cpassword: new FormControl(null ,Validators.required)
  })

  constructor(private router:Router) { }

  ngOnInit() {
  }
back(){
this.router.navigate([''])
}
}
