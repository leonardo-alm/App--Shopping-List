import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('successDialogTemplate') successDialogTemplate?: TemplateRef<any>;
  @ViewChild('shareDialogTemplate') shareDialogTemplate?: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openSuccessDialog() {
    if (this.successDialogTemplate) {
      const dialogRef = this.dialog.open(this.successDialogTemplate);

      setTimeout(() => dialogRef.close(), 2500)
    }
  }

  openShareDialog() {
    if (this.shareDialogTemplate) {
      this.dialog.open(this.shareDialogTemplate);
    }
  }
}
