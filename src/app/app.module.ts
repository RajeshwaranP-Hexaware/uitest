import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PagesModule} from './pages/pages.module';

import { AppComponent } from './app.component';
// import { BusinessInformation2Component } from '.././business-information2/business-information2.component';






@NgModule({
  declarations: [
    AppComponent,
    // BusinessInformation2Component

  ],
  imports: [
    BrowserModule,PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
