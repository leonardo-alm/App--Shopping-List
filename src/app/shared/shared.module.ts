import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SuccessDialogComponent,
    FooterComponent
  ],
  
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SuccessDialogComponent,
    FooterComponent
  ]
})
export class SharedModule { }
