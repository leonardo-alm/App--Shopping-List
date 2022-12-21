import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Clothing } from 'src/app/Clothing';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() item?: Clothing
  @ViewChild('confirmDialogTemplate') confirmDialogTemplate?: TemplateRef<any>;
  @ViewChild('successDialogTemplate') successDialogTemplate?: TemplateRef<any>;

  constructor(private listService: ListService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openConfirmDialog() {
    if (this.confirmDialogTemplate) {
      this.dialog.open(this.confirmDialogTemplate);
    }
  }

  openSuccessDialog() {
    if (this.successDialogTemplate) {
      const dialogRef = this.dialog.open(this.successDialogTemplate);

      setTimeout(() => dialogRef.close(), 2000)
    }
  }

  deleteItem(item: Clothing) {
    this.listService.deleteClothing(item.id).subscribe()
    this.item = undefined;
    this.openSuccessDialog()
  }
}
