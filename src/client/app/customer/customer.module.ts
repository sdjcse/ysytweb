import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SharedModule } from './shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';
import { listingcomponent }   from './listingPage/listing.component';


@NgModule({
  imports: [ SharedModule, CustomerRoutingModule, CommonModule, FormsModule],
  declarations: [ CustomerComponent, CustomerHomeComponent, CustomerLoginComponent, CustomerRegisterComponent, listingcomponent ]
})

export class CustomerModule { }
