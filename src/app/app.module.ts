import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandSummaryComponent } from './brand/brand-summary/brand-summary.component';
import { SentimentSummaryComponent } from './sentiment-summary/sentiment-summary.component';
import { NewsListComponent } from './news/news-list/news-list.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA4kT7pN3LUrzcSPuiLFWvWvNyt7ufdf18",
  authDomain: "brand-substance.firebaseapp.com",
  databaseURL: "https://brand-substance.firebaseio.com",
  storageBucket: "brand-substance.appspot.com",
  messagingSenderId: "474426026556"
};


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
    [MaterialModule.forRoot()],
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
