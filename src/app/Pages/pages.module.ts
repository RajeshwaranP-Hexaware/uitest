import { CommonModule } from "@angular/common"; 
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Router,Routes} from  '@angular/router';
import { Http, BaseRequestOptions,HttpModule } from '@angular/http';
import {HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { RoutingModule } from "./routing/routing.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsuranceheadingComponent } from './header/insuranceheading/insuranceheading.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { DashboardfooterComponent } from './dashboardfooter/dashboardfooter.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BusinessInformationComponent } from './business-information/business-information.component';
import { BusinessInformation1Component } from './business-information1/business-information1.component';
import { BusinessInformation2Component } from './business-information2/business-information2.component';
import { BusinessInformation3Component } from './business-information3/business-information3.component';
import { CompareComponent } from './compare/compare.component';



export const routes: Routes = [
  {  path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},  
  { path: '**', component: LoginComponent },   
];

@NgModule({
  declarations: [       
  LoginComponent, LandingComponent, DashboardComponent, InsuranceheadingComponent, ZipcodeComponent, DashboardfooterComponent, ProgressbarComponent, BusinessInformationComponent, BusinessInformation1Component, BusinessInformation2Component, BusinessInformation3Component, CompareComponent],
  imports: [
     FormsModule, CommonModule ,RoutingModule,HttpModule,BrowserModule,BrowserAnimationsModule,    
     RouterModule.forRoot(routes, {useHash: true}),     
     ReactiveFormsModule
     
    
  ],
  providers: [CookieService,DatePipe],
  exports: [RouterModule]
  
})
export class PagesModule { }