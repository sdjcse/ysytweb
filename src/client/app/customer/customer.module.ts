import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

=======
>>>>>>> 3e10756e0cbbd171398011b2d3cf94cfde5f2f81

import { SharedModule } from './shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { listingcomponent }   from './listingPage/listing.component';


@NgModule({
  imports: [ SharedModule, CustomerRoutingModule, CommonModule, FormsModule],
  declarations: [ CustomerComponent, CustomerHomeComponent, CustomerLoginComponent, CustomerRegisterComponent, listingcomponent ]
=======

@NgModule({
  imports: [ SharedModule, CustomerRoutingModule ],
  declarations: [ CustomerComponent, CustomerHomeComponent, CustomerLoginComponent, CustomerRegisterComponent ]
>>>>>>> 3e10756e0cbbd171398011b2d3cf94cfde5f2f81
})

export class CustomerModule { }
