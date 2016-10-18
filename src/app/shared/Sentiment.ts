// The sentiment interface is implemented by objects 
// that record how an object is perceived as determined by analytics
// This could be Brands, Products, Companies, People 
// UI objects like sentiment-summary use Sentiment based objects

export class Sentiment
{
    // sentiment ranges between -1 (very negative) and +1 (very positive)
    sentiment:number;
}