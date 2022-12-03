import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //MatSlideToggleModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class MaterialModule { }
