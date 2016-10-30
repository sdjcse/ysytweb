import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';

@Component({
  moduleId: module.id,
  selector: 'ysyt-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
