import { Component, OnInit } from '@angular/core';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from "../landing/landing.component";
import { DashboardComponent } from "../dashboard/dashboard.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'landing',
        component: LandingComponent,
        children: [ 
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },   
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
    ]  
  }
])
],
  // providers: [ AuthGuardService ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
