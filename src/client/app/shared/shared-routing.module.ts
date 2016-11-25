import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'landing', component: LandingComponent },
    { path: 'login' , component: LoginComponent}
  ])],
  exports: [RouterModule]
})

export class SharedRoutingModule { }
