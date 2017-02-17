/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrandListComponent } from './brand-list.component';

import { BrandService, Brand } from '../index';

import { AngularFire, FirebaseListObservable } from 'angularfire2';





describe('BrandlistComponent', () => {
  let component: BrandListComponent;
  let fixture: ComponentFixture<BrandListComponent>;





  beforeEach(async(() => {


    var angularFireStub = {
      database: {
        list(s: string) {
          return ['BMW', 'Ford', 'Honda'];
        }
      }
    };


    TestBed.configureTestingModule({
      declarations: [BrandListComponent],
      providers: [
        { provide: BrandService, useValue: BrandService },
        { provide: AngularFire, useValue: angularFireStub }]
    })
    //    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });


});
