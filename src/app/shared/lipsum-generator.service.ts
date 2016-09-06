import { Injectable } from '@angular/core';

@Injectable() 
export class LipsumGeneratorService {

  constructor() { }


  getParagraphs(numberOfParagraphs:number, numberOfWordsPerParagraph:number)
  {

    let ans:string = "";
    for(let p=0; p<numberOfParagraphs; p++)
    {
        ans += "<p>";
        ans += this.getWords(numberOfWordsPerParagraph);
        ans += "</p>";
    }

    return ans;
  }


  getWords(numberOfWords:number){

    let ans:string[] = new Array<string>(numberOfWords);

    let words = this.lipsum.split(" ");

    for(let i=0; i<numberOfWords; i++)
    {
      ans[i]=words[i];
    }

    return ans.join(" ");
    

  }
 

 lipsum:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque maximus mollis. Donec lobortis purus turpis, id ornare nisl mollis vitae. Ut quis auctor metus. Morbi fringilla, nisi nec hendrerit egestas, ipsum elit interdum nulla, nec hendrerit massa orci vitae justo. Nulla vitae tortor sagittis, ullamcorper nunc ac, aliquet ipsum. Quisque ac dolor id nisi pharetra mattis. Mauris posuere euismod lorem, in pharetra mauris mattis vel. Quisque quis dui lacinia, elementum metus a, consectetur velit. Praesent sed tellus tincidunt, aliquet nunc vitae, egestas sapien. Aliquam posuere libero sed velit imperdiet egestas nec sed lectus. Phasellus porttitor dui quis nisi scelerisque blandit. Sed quis sapien at tortor finibus volutpat eu et elit. Donec ac sodales ipsum, vel venenatis mauris. Aliquam erat volutpat.

Nulla eget lobortis arcu, ut dignissim diam. Sed id mi vel est lacinia aliquam. Morbi pellentesque eleifend diam, quis auctor ligula tincidunt vitae. Fusce viverra accumsan augue, et sodales lectus sodales vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean hendrerit pretium dolor, non sollicitudin nisl vestibulum sit amet. Suspendisse in libero tellus. Morbi eget posuere ipsum. Etiam placerat leo pulvinar mi faucibus, vitae dictum tellus eleifend. Sed in finibus est, vulputate aliquet odio. Etiam vitae metus ante. Fusce ultricies diam sed nunc egestas tincidunt. In ac lacus consequat, finibus justo eu, pretium diam.

Nulla eu tincidunt leo. Vestibulum luctus hendrerit nunc vel laoreet. Morbi ipsum eros, sollicitudin et augue a, sodales euismod velit. Sed elementum commodo elit. Sed venenatis ornare finibus. Nullam quam lectus, ornare mollis quam et, lacinia maximus eros. Donec sed pretium leo. Mauris luctus enim diam, suscipit feugiat sapien fermentum scelerisque. Nullam commodo maximus faucibus. Quisque sodales diam lorem, sit amet dictum arcu aliquam ut. Praesent vestibulum commodo tortor nec laoreet.

Praesent id felis nunc. Suspendisse at porta libero, eu dapibus nibh. Nam non urna eu urna pretium molestie. Fusce porta lectus vel mauris consequat interdum. Maecenas lacinia id nisi et luctus. Sed vitae iaculis lorem, eu tincidunt nibh. Nulla malesuada ornare odio vel volutpat. Vestibulum eu fringilla erat. Nullam ante elit, ultricies at sem a, sagittis iaculis odio. Nulla euismod eleifend neque ut euismod.

Etiam accumsan, massa et interdum vulputate, felis sapien lacinia nulla, at blandit nisi augue laoreet odio. Mauris sed orci dui. Nulla consectetur ante sed mauris dictum placerat. Ut efficitur tristique eros, sed maximus magna laoreet in. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae diam maximus justo sodales accumsan eu in enim. Vivamus accumsan erat eu ornare semper. Donec nunc augue, fringilla ut rutrum vitae, tempor elementum erat. Sed facilisis at ligula et semper. Nullam tempus lorem ac felis iaculis pharetra. Phasellus vitae metus sit amet nisl ultricies sagittis eu a sem.

Morbi at purus viverra, congue arcu vitae, porttitor sem. Duis elementum vel urna pellentesque vulputate. Donec ut tincidunt libero. Donec eget convallis dui, sit amet vehicula libero. Mauris nec nulla vitae justo hendrerit sollicitudin. Phasellus sit amet erat vel erat aliquam lobortis. Quisque eu posuere ipsum. Fusce vulputate pulvinar viverra. Cras rutrum eros ullamcorper orci semper, eget aliquet tellus feugiat. Ut tempor arcu sit amet nunc consequat suscipit. In interdum, risus lobortis consectetur consequat, nibh quam suscipit sapien, eget varius felis leo in risus. Nam consequat nisl enim, a fringilla purus egestas sit amet. Etiam accumsan, turpis sed commodo bibendum, dui lectus dignissim orci, id feugiat odio mi sed ipsum. Phasellus tristique odio quam, quis aliquet lacus scelerisque sed.

Sed a ante velit. Quisque risus nisl, viverra nec gravida a, lacinia eu orci. Vivamus pellentesque ultricies diam, vitae sodales diam ultricies vitae. Quisque nisi leo, euismod quis elit eu, pulvinar vulputate mauris. Vestibulum vel commodo risus. Mauris cursus ac orci ac varius. Sed sed urna ac orci porttitor accumsan. Curabitur orci nisl, tempus posuere leo id, consectetur viverra turpis. Proin purus arcu, placerat ut venenatis et, posuere at leo. Etiam hendrerit nulla ut erat aliquet luctus. Praesent ac felis eu ex malesuada maximus non in nulla. Integer facilisis rhoncus lorem in efficitur. Praesent pretium condimentum orci ut consequat.

Suspendisse sem mauris, pellentesque at lacus quis, tempor condimentum enim. Nam lobortis urna a iaculis hendrerit. Vestibulum maximus pharetra iaculis. Duis fermentum consectetur metus, id pellentesque nunc. Maecenas porttitor, elit quis fringilla finibus, nibh elit aliquam augue, vel molestie nunc nisl a velit. Donec sed lectus eu ex iaculis sollicitudin in vel mauris. Aenean ac dui id velit suscipit efficitur. Cras rhoncus iaculis metus, non gravida eros gravida vitae. Donec a molestie nibh. Praesent ut augue ultricies, consequat massa in, porta lorem. In erat ex, convallis sed faucibus a, consectetur in felis.

Donec quis risus nec ipsum faucibus semper sed at lacus. Praesent feugiat felis in nisi bibendum congue. Duis pharetra quis lacus id hendrerit. Fusce id vulputate nulla, eget efficitur eros. Sed eu neque mattis est volutpat tristique. Sed lacinia urna a erat efficitur, ac tristique mi pretium. Quisque tellus tellus, hendrerit vel bibendum a, imperdiet a nisl. Curabitur ultrices sodales ante at feugiat. Sed eu tortor vitae lectus suscipit commodo et ut sem. Morbi ante nisi, lacinia vitae congue ac, elementum ut metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc congue lectus metus, et dictum enim posuere vitae.

Duis sit amet lorem lacinia, mattis turpis quis, aliquam nunc. Suspendisse tristique mi ligula, vel maximus leo gravida in. Nunc pretium metus quis erat dapibus porttitor. Integer id venenatis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod nisi eget dapibus aliquet. Quisque porta nulla diam, a fermentum quam aliquet ut. Quisque congue tempus leo id vulputate. Praesent ipsum ipsum, vulputate ac enim eget, consequat convallis leo. Aliquam erat volutpat. Pellentesque arcu orci, laoreet et sem dignissim, porttitor fringilla orci. Phasellus magna sem, venenatis eu orci sed, efficitur pulvinar sapien. Etiam at libero justo. Suspendisse pretium odio libero, sit amet mollis diam gravida eget. Quisque et ligula id ligula tincidunt lobortis. Donec suscipit pretium felis, vel egestas nisl facilisis et. Sed a lectus nec.`;

}
