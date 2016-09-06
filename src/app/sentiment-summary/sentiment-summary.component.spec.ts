/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { SentimentSummaryComponent } from './sentiment-summary.component';
import { Brand } from '../brand/shared/brand.model';

describe('Component: SentimentSummary', () => {

  let selectedSentiment: Sentiment;


 beforeEach(() => {
    selectedSentiment = new Brand();
    TestBed.configureTestingModule({
      providers: [SentimentSummaryComponent, Brand]
    })
  });



  it('should create an instance', () => {
    let component = new SentimentSummaryComponent();
    expect(component).toBeTruthy();
  });

  it('should return a valid percentage for the range -1 to 1',
    inject([SentimentSummaryComponent, Brand], (summaryComponent: SentimentSummaryComponent, brand:Brand) => {

      brand.sentiment = 0;
      summaryComponent.selectedSentimentObject = brand;
      
      expect(summaryComponent.sentimentPercentage).toEqual(50);
      brand.sentiment = -1;
      expect(summaryComponent.sentimentPercentage).toEqual(0);
      brand.sentiment = 1;
      expect(summaryComponent.sentimentPercentage).toEqual(100);

    }));


});


