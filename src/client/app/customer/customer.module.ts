import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';

@NgModule({
  imports: [ SharedModule, CustomerRoutingModule ],
  declarations: [ CustomerComponent, CustomerHomeComponent, CustomerLoginComponent, CustomerRegisterComponent ]
})

export class CustomerModule { }
