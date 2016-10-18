import { Component } from '@angular/core';
import { Brand } from './brand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News';

  selectedBrand:Brand;

  onBrandSelected(brand:Brand){
    this.selectedBrand = brand;
  }
}
