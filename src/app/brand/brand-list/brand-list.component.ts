import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BrandService, Brand } from '../index';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  providers: [BrandService]
})
export class BrandListComponent implements OnInit {

  @Output() onBrandSelected = new EventEmitter<Brand>();

  public brands: Brand[];
  public selectedBrand: Brand;

  items: FirebaseListObservable<any[]>;

  constructor(private brandService: BrandService, af: AngularFire) {

    this.items = af.database.list('/brands');

  }

  ngOnInit() {
    this.getBrands();
  }


  getBrands() {
    this.brandService.getBrands().then(brands => this.brands = brands);
  }

  selectBrand(brand: Brand) {
    this.onBrandSelected.emit(brand);
    this.selectedBrand = brand;
  }


}
