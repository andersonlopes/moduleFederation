import { NgModule } from '@angular/core';
import { SharedMenuComponent } from './shared-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
imports:[CommonModule, RouterModule],
  declarations: [SharedMenuComponent],
  exports: [SharedMenuComponent]
  // outros imports e configurações, se necessário
})
export class SharedMenuComponentModule {}
