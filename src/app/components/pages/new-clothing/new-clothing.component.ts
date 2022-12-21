import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Clothing } from 'src/app/Clothing';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-clothing',
  templateUrl: './new-clothing.component.html',
  styleUrls: ['./new-clothing.component.css']
})
export class NewClothingComponent implements OnInit {
  confirmButton: string = "Submit"
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  constructor(private listService: ListService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    if (this.dialogTemplate) {
      const dialogRef = this.dialog.open(this.dialogTemplate);

      setTimeout(() => dialogRef.close(), 2000)
    }
  }

  addClothing(Clothing: Clothing){
    this.listService.postClothing(Clothing).subscribe()
    this.router.navigate(['/'])
    this.openDialog()
  }
}
