import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'landing', component: LandingComponent },
    { path: 'signin' , component: LoginComponent},
    { path: 'signup' , component: RegisterComponent}
  ])],
  exports: [RouterModule]
})

export class SharedRoutingModule { }
