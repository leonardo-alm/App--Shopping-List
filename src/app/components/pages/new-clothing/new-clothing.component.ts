import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-clothing',
  templateUrl: './new-clothing.component.html',
  styleUrls: ['./new-clothing.component.css']
})
export class NewClothingComponent implements OnInit {
  botao: string = "Adicionar!"
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  constructor(private listService: ListService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    if (this.dialogTemplate) {
      const dialogRef = this.dialog.open(this.dialogTemplate, {
        data: { title: "adicionado" }
      });

      setTimeout(() => {
        dialogRef.close();
      }, 2000)
    }
  }

  addClothing(roupa: Roupa){
    this.listService.postClothing(roupa).subscribe()
    this.router.navigate(['/'])
    this.openDialog()
  }

}
