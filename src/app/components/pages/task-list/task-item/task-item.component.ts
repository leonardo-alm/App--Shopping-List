import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() item?: Roupa
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  constructor(private listService: ListService,  private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    if (this.dialogTemplate) {
      this.dialog.open(this.dialogTemplate);
    }
  }

  deleteItem(item: Roupa){
    this.listService.deleteClothing(item.id).subscribe()
    this.item = undefined;
  }
}
