import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMenuComponentModule } from './shared-menu/shared-menu.component.module';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  // Rotas do aplicativo host
  // ...

  // Rotas dos módulos remotos serão adicionadas aqui dinamicamente
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedMenuComponentModule,
  ],
  exports:[
    SharedMenuComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
