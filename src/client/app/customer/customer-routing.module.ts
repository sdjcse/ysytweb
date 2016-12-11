import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { listingcomponent }   from './listingPage/listing.component';

=======
>>>>>>> 3e10756e0cbbd171398011b2d3cf94cfde5f2f81

const customerRoutes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CustomerHomeComponent },
      { path: 'signin', component: CustomerLoginComponent },
<<<<<<< HEAD
      { path: 'signup', component: CustomerRegisterComponent },
      { path: 'listingPage', component: listingcomponent}
=======
      { path: 'signup', component: CustomerRegisterComponent }
>>>>>>> 3e10756e0cbbd171398011b2d3cf94cfde5f2f81
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