import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
data:any=[]
  constructor(private appservice:AppService ) { }

  ngOnInit() {
    this.appservice.getdata().subscribe(res=>this.data=res)
   
  }
  

}
