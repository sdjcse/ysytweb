import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing/landing-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [ CommonModule, LandingRoutingModule ],
  declarations: [ LandingComponent ]
})

export class SharedModule { }
