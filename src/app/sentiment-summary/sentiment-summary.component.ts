import { Component, OnInit, trigger,state,style,transition,animate } from '@angular/core';
import { Brand} from '../brand';

@Component({
  moduleId: module.id,
  selector: 'app-sentiment-summary',
  templateUrl: 'sentiment-summary.component.html',
  styleUrls: ['sentiment-summary.component.css']
})
export class SentimentSummaryComponent implements OnInit {

  selectedBrand:Brand = new Brand();

  constructor() { }

  ngOnInit() {
  }

}
