import { Component } from '@angular/core';
import { Brand } from './brand';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'News';

  selectedBrand:Brand;

  // respond to brand selected event
  onBrandSelected(brand:Brand){
    this.selectedBrand = brand;
  }
  

}
