import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
//import { FlightsComponent } from './flights.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    CommonModule
  ],
  declarations: [
    FlightsComponent,
  ]
})
export class FlightModule { }
