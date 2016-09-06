/* tslint:disable:no-unused-variable */


import {BrandService, Brand } from '../shared/index';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
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



  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandService]
    })
  });



  it('should create an instance', inject([BrandService], (testService:BrandService) => {



    let component = new BrandListComponent(testService);
    expect(component).toBeTruthy();
  }));


});
