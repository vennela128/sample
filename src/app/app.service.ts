import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable()
export class AppService {
 constructor(private http:HttpClient){

 }
  getdata(){
return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
