import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports: [ BrowserModule, SharedModule, AppRoutingModule ],
  declarations: [ AppComponent, FooterComponent ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [ AppComponent ]

})

export class AppModule { }
