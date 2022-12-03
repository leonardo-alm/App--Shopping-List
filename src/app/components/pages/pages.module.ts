import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';




@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent,
  ]
})
export class PagesModule { }
