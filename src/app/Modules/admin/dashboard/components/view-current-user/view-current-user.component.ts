import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';

@Component({
  selector: 'app-view-current-user',
  templateUrl: './view-current-user.component.html',
  styleUrls: ['./view-current-user.component.scss']
})
export class ViewCurrentUserComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}



  onNoClick(): void {
    this.dialogRef.close();
  }
}
