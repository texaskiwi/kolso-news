/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrandSummaryComponent } from './brand-summary.component';

describe('BrandsummaryComponent', () => {
  let component: BrandSummaryComponent;
  let fixture: ComponentFixture<BrandSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrandSummaryComponent]
    })
    //      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
