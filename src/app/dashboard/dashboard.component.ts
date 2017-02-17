import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'News';
  selectedBrand: Brand;


  constructor() { }

  ngOnInit() {
  }



  onBrandSelected(brand: Brand) {
    this.selectedBrand = brand;
  }


}
