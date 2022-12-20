import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Roupa } from 'src/app/Roupa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-clothing',
  templateUrl: './edit-clothing.component.html',
  styleUrls: ['./edit-clothing.component.css']
})
export class EditClothingComponent implements OnInit {

  botao: string = "Atualizar!"
  roupa?: Roupa
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;
  
  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.listService.getClothing(id).subscribe((roupa) => this.roupa = roupa) 
  }

  openDialog() {
    if (this.dialogTemplate) {
      const dialogRef = this.dialog.open(this.dialogTemplate, {
        data: { title: "atualizado" }
      });

      setTimeout(() => {
        dialogRef.close();
      }, 2000)
    }
  }

  editClothing(roupa: Roupa){
    const id = this.roupa?.id

    this.listService.updateClothing(id!, roupa).subscribe()
    this.router.navigate(['/'])
    this.openDialog()
  }
}
