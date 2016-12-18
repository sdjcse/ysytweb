import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';
import { ProductDetailsComponent }  from './product-details/product-details.component';
import { listingcomponent }   from './product-list/product-list.component';

const customerRoutes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CustomerHomeComponent },
      { path: 'signin', component: CustomerLoginComponent },
      { path: 'signup', component: CustomerRegisterComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'products', component: listingcomponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
