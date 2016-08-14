import { Component } from '@angular/core';
import { BrandListComponent, Brand} from './brand';
import { SentimentSummaryComponent } from './sentiment-summary';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrandListComponent, SentimentSummaryComponent],
  providers: []
})
export class AppComponent {
  title = 'News';

  selectedBrand:Brand;

  foo:Number = 1;

  // respond to brand selected event
  onBrandSelected(brand:Brand){
    this.selectedBrand = brand;
  }
  

}
