
import { Component, OnInit, Input, trigger,state,style,transition,animate } from '@angular/core';

import { Brand} from '../brand';


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

<<<<<<< HEAD
=======


public get sentimentIndicatorTransformOffset():string
{
  let value:number = this.selectedSentimentObject.sentiment;

  value = value * -1;
>>>>>>> development





  public get sentimentPosition():string
  {
//  points="0,10, 20,10, 10,0" 
    let ans:string = "";

     if(this.selectedSentimentObject != null)
     {
            let offset:number = this.selectedSentimentObject.sentiment;
            if(offset <=0)
            {
              offset = offset * -2.5;
            }
            else{
              offset = offset * -22;
            }

            

            let x1 = 0 + offset;
            let x2 = 20 + offset;
            let x3 =  10 + offset;
            ans = x1 + `,10,` + x2 + `,10,` + x3 + `,0`;
     }

     return ans;
  }

  public get sentimentPercentage():number
    {
          let value:number = this.selectedSentimentObject.sentiment;
          value = value +1
          let ans = (value / 2) * 100;

        return ans;
    }

 

}
