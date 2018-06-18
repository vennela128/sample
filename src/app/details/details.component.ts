import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
data:any=[]
  constructor(private appservice:AppService,private router:Router ) { }

  ngOnInit() {
    this.appservice.getdata().subscribe(res=>this.data=res)
   
  }
  logout(){
    this.router.navigate([''])
  }

}
