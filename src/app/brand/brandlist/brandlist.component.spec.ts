/* tslint:disable:no-unused-variable */


import {BrandService, Brand } from '../shared/index';
import { By }           from '@angular/platform-browser';
import { provide, DebugElement } from '@angular/core';
import { beforeEachProviders, addProviders, async, inject } from '@angular/core/testing';
import { BrandListComponent } from './brandlist.component';

describe('Component: BrandList', () => {

  let MockBrandService = {
    getBrands(){
      return new Brand();
    },
    getBrand(id: Number){
      return new Brand();
    }
  }

beforeEachProviders(() => [
  BrandService
])



  it('should create an instance', inject([BrandService], (testService:BrandService) => {



    let component = new BrandListComponent(testService);
    expect(component).toBeTruthy();
  }));


});
