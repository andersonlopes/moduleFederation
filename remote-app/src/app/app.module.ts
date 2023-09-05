import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';



@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    FlightsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
