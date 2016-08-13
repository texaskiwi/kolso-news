/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { provide, DebugElement } from '@angular/core';
import {addProviders, inject, async} from '@angular/core/testing';

import { BrandsummaryComponent } from './brandsummary.component';

describe('Component: Brandsummary', () => {
  it('should create an instance', () => {
    let component = new BrandsummaryComponent();
    expect(component).toBeTruthy();
  });
});
