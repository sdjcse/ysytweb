import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';

const customerRoutes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CustomerHomeComponent },
      { path: 'signin', component: CustomerLoginComponent },
      { path: 'signup', component: CustomerRegisterComponent }
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