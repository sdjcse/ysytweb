import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { CustomerModule } from './customer/customer.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CustomerModule, FormsModule],
=======

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CustomerModule ],
>>>>>>> 3e10756e0cbbd171398011b2d3cf94cfde5f2f81
  declarations: [ AppComponent ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
<<<<<<< HEAD
  bootstrap: [ AppComponent ],
=======
  bootstrap: [ AppComponent ]
>>>>>>> 3e10756e0cbbd171398011b2d3cf94cfde5f2f81
})

export class AppModule { }
