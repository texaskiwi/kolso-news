import { Component } from '@angular/core';
import { BrandListComponent, Brand} from './brand';
import { SentimentSummaryComponent } from './sentiment-summary';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrandListComponent, SentimentSummaryComponent,MD_BUTTON_DIRECTIVES,MD_TOOLBAR_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
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
