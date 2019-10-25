import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGpohYz9t6hsj10jqD-4S5T0ohPpuVfSQ'
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
