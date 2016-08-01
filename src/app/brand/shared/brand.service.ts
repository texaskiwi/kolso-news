import {BRANDS} from './mock-brands'
import {Injectable} from '@angular/core' 

// typescript sees the injectable decorator and uses 
// it to emit metadata about the class
@Injectable()
export class BrandService {
    getBrands(){
        return Promise.resolve(BRANDS);
    }
    // return an individual brand from the brand collection
    getBrand(id: number){
        return Promise.resolve(BRANDS).then(
            brands => brands.filter(b => b.id === id)[0]
        );
    }
    
}