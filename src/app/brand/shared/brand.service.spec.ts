/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrandService } from './brand.service';

describe('BrandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandService]
    });
  });

  it('should ...', inject([BrandService], (service: BrandService) => {
    expect(service).toBeTruthy();
  }));
});
