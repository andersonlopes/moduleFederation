import { FlightsComponent } from './flights.component';
import { Routes } from '@angular/router';

export const FLIGHTS_ROUTES: Routes = [
    {
        path: 'flights-search',
        component: FlightsComponent
    }
]