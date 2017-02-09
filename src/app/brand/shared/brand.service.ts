import { Injectable } from '@angular/core';
import { BRANDS } from './mock-brands'

@Injectable()
export class BrandService {

  constructor() { }
  getBrands() {
    return Promise.resolve(BRANDS);
  }
  // return an individual brand from the brand collection
  getBrand(id: number) {
    return Promise.resolve(BRANDS).then(
      brands => brands.filter(b => b.id === id)[0]
    );
  }
}
