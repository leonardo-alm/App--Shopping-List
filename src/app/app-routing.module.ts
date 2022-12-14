import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './components/pages/task-list/task-list.component';
import { NewClothingComponent } from './components/pages/new-clothing/new-clothing.component';
import { EditClothingComponent } from './components/pages/edit-clothing/edit-clothing.component';

const routes: Routes = [
  { path: "clothes", component: TaskListComponent },
  { path: "create", component: NewClothingComponent },
  { path: "edit/:id", component: EditClothingComponent },
  { path: "", redirectTo: "clothes", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
