import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Clothing } from 'src/app/Clothing';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-clothing',
  templateUrl: './edit-clothing.component.html',
  styleUrls: ['./edit-clothing.component.css']
})
export class EditClothingComponent implements OnInit {

  confirmButton: string = "Update"
  Clothing?: Clothing
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;
  
  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.listService.getClothing(id).subscribe((Clothing) => this.Clothing = Clothing) 
  }

  openDialog() {
    if (this.dialogTemplate) {
      const dialogRef = this.dialog.open(this.dialogTemplate);

      setTimeout(() => dialogRef.close(), 2000)
    }
  }

  editClothing(Clothing: Clothing){
    const id = this.Clothing?.id

    this.listService.updateClothing(id!, Clothing).subscribe()
    this.router.navigate(['/'])
    this.openDialog()
  }
}
