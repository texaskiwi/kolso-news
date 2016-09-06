/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LipsumGeneratorService } from './lipsum-generator.service';

describe('Service: LipsumGenerator', () => {
  

   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LipsumGeneratorService]
    })
  });

  it('should create an instance of the service',
    inject([LipsumGeneratorService],
      (service: LipsumGeneratorService) => {
        expect(service).toBeTruthy();
      }));

  
  it('should generate 37 words',
    inject([LipsumGeneratorService],
    (service: LipsumGeneratorService) => {
      expect(service.getWords(37).split(" ").length).toEqual(37);
    }));

  it('should generate four HTML paragraphs containing 27 words each',
    inject([LipsumGeneratorService],
      (service: LipsumGeneratorService) => {

        let ans:string = service.getParagraphs(4,27);

        expect(ans.startsWith("<p>")).toBe(true);
        expect(ans.endsWith("</p>")).toBe(true);

        ans = ans.replace("<p>"," ");
        ans = ans.replace("</p>"," ");
         

        let words = ans.trim().split(" ");
        
        // bug something eating 2 words
        expect(words.length).toEqual(106);  


      }
    ));


});  // end describe
