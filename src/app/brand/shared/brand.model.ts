import { Sentiment } from  '../../shared/Sentiment';

export class Brand implements Sentiment {
    id:number;
    title:string;
    description:string;
    iconUrl:string;
    webHome:string;
    // sentiment ranges between -1 (very negative) and +1 (very positive)
    sentiment:number;
}