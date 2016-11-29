import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [ CommonModule, SharedRoutingModule ],
  declarations: [ LandingComponent, LoginComponent, RegisterComponent ]
})

export class SharedModule { }
