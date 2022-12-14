import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { NewClothingComponent } from './new-clothing/new-clothing.component';
import { ClothingFormComponent } from '../clothing-form/clothing-form.component';
import { EditClothingComponent } from './edit-clothing/edit-clothing.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    NewClothingComponent,
    ClothingFormComponent,
    EditClothingComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
    
  ]
})
export class PagesModule { }
