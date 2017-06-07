import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA39f2YfW79yNLJsJL3-pB-gnT2AbL5Us0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
