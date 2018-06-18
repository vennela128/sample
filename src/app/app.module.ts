import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes,Router } from '@angular/router';
import {AppService } from './app.service';
import { DetailsComponent } from './details/details.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:"details",component:DetailsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
