import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { CustomerModule } from './customer/customer.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CustomerModule ],
  declarations: [ AppComponent ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
