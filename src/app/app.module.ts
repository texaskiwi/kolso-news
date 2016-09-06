import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import { AppComponent }  from './app.component';
import { SentimentPercentagePipe } from './sentiment-summary/sentiment-percentage.pipe';
import { BrandListComponent} from './brand';
import { SentimentSummaryComponent } from './sentiment-summary';


@NgModule({
  imports: [ BrowserModule, 
  MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,

  
   ],
<<<<<<< HEAD

  declarations: [ AppComponent, SentimentPercentagePipe],

=======
  declarations: [ AppComponent, SentimentPercentagePipe,BrandListComponent, SentimentSummaryComponent],
>>>>>>> development
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
