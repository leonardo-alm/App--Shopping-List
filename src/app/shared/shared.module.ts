import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

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
    RouterModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  exports: [
    HeaderComponent,
    SuccessDialogComponent,
    FooterComponent
  ]
})
export class SharedModule { }
