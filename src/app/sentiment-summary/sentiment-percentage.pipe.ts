import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sentimentPercentage'})
export class SentimentPercentagePipe implements PipeTransform {
  transform(value: number): number {

        let maxNumber = 1;
        let minNumber = -1;

        value = value +1

        let ans = (value / 2) * 100;

        return ans;
  }
}