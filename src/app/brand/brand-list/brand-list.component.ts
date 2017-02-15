import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BrandService, Brand } from '../index';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  providers: [BrandService]
})
export class BrandListComponent {

  @Output() onBrandSelected = new EventEmitter<Brand>();

  public selectedBrand: Brand;

  brands: FirebaseListObservable<any[]>;

  constructor(private brandService: BrandService, af: AngularFire) {

    this.brands = af.database.list('/brands');

  }


  selectBrand(brand: Brand) {
    this.onBrandSelected.emit(brand);
    this.selectedBrand = brand;
  }


}
