import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { LandingComponent } from './landing.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'landing', component: LandingComponent }
  ])],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
