import { Component, OnInit, Input } from '@angular/core';
import { Sentiment } from '../../../shared/Sentiment';

@Component({
  selector: 'app-brand-summary',
  templateUrl: './brand-summary.component.html',
  styleUrls: ['./brand-summary.component.css']
})
export class BrandSummaryComponent implements OnInit {

  @Input("selectedObject") selectedSentimentObject: Sentiment;
  constructor() { }

  ngOnInit() {
  }

}
