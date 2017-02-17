import { Sentiment } from '../../../shared';

export class Brand implements Sentiment {
    id: number;
    name: string;
    description: string;
    iconUrl: string;
    webHome: string;
    // sentiment ranges between -1 (very negative) and +1 (very positive)
    sentiment: number;
}