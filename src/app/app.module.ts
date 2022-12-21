import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './components/pages/pages.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    PagesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
