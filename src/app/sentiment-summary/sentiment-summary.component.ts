import { Component, OnInit, Input, trigger,state,style,transition,animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sentiment-summary',
  templateUrl: 'sentiment-summary.component.html',
  styleUrls: ['sentiment-summary.component.css']
})
export class SentimentSummaryComponent implements OnInit {

  @Input("selectedObject") selectedSentimentObject:Sentiment;

 

  constructor() { }

  ngOnInit() {

   
  }



public get sentimentIndicatorTransformOffset():string
{
  let value:number = this.selectedSentimentObject.sentiment;

  value = value * -1;

  let ans:string = "translate("+value+", 0) scale(1, -1)";

  return ans;

}

public get sentimentPercentage():string
  {
        let value:number = this.selectedSentimentObject.sentiment;
        value = value +1
        let ans:string = String((value / 2) * 100);
      return ans + '%';
  }

 

}
