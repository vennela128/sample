import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes,Router } from '@angular/router';
import {AppService } from './app.service';
import { DetailsComponent } from './details/details.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SigninComponent } from './dashboard/signin/signin.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { AboutComponent } from './dashboard/about/about.component';
const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children: [{
    path:"home",component:HomeComponent},
  {path:"signin",component:SigninComponent},
  {path:"contact",component:ContactComponent},
   {path:"about",component:AboutComponent}]
  },
  {path:"forgot",component:ForgotpasswordComponent},
  {path:"signup",component:SignupComponent},
  {path:"hhhh",component:HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    ForgotpasswordComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    SidemenuComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    AboutComponent,
    ContactComponent


    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
