import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, NewsComponent],
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
