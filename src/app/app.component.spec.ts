/* tslint:disable:no-unused-variable */

import { TestBed,async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: KolsoNews', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent]
    })
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'News\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('News');
    }));
    
});
