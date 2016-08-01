import { Component, OnInit } from '@angular/core';
import { Brand} from '../brand';

@Component({
  moduleId: module.id,
  selector: 'app-sentiment-summary',
  templateUrl: 'sentiment-summary.component.html',
  styleUrls: ['sentiment-summary.component.css']
})
export class SentimentSummaryComponent implements OnInit {

  selectedBrand:Brand;

  constructor() { }

  ngOnInit() {
  }

}
