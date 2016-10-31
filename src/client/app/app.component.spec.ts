import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export function main() {

  describe('App component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ TestComponent, AppComponent, HomeComponent ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<ysyt-app></ysyt-app>'
})

class TestComponent {
}



