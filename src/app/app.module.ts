import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandSummaryComponent } from './brand/brand-summary/brand-summary.component';
import { SentimentSummaryComponent } from './sentiment-summary/sentiment-summary.component';
import { NewsListComponent } from './news/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandSummaryComponent,
    SentimentSummaryComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [MaterialModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
