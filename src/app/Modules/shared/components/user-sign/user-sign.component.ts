import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.scss']
})
export class UserSignComponent {
  constructor(
    private dialogRef: MatDialogRef<UserSignComponent>
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
