import { Component, OnInit, EventEmitter, Output} from '@angular/core';
// import { BrandService } from '../shared/brand.service';
// import { Brand } from '../shared/brand.model';

// barreling didn't work without explicit index
import {BrandService, Brand } from '../shared/index';

@Component({ 
  moduleId: module.id,
  selector: 'app-brandlist',
  templateUrl: 'brandlist.component.html',
  styleUrls: ['brandlist.component.css'],
  providers: [BrandService]
})
export class BrandListComponent implements OnInit {

  @Output() onBrandSelected = new EventEmitter<Brand>();

  public brands: Brand[];
  public selectedBrand: Brand;



  constructor(private brandService: BrandService) {}

  ngOnInit() {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().then(brands => this.brands = brands);
  }

  selectBrand(brand:Brand)
  {
    this.onBrandSelected.emit(brand);
    this.selectedBrand = brand;
  }

}
