import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';
import { listingcomponent }   from './listingPage/listing.component';
import { ProductDetailsComponent }  from './product-details/product-details.component';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule, CustomerRoutingModule, NgbModule ],
  declarations: [ CustomerComponent, CustomerHomeComponent, CustomerLoginComponent, CustomerRegisterComponent, ProductDetailsComponent, listingcomponent ]
})

export class CustomerModule { }
