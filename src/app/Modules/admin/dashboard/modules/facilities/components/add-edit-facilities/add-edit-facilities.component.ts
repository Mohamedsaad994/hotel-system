import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-facilities',
  templateUrl: './add-edit-facilities.component.html',
  styleUrls: ['./add-edit-facilities.component.scss']
})
export class AddEditFacilitiesComponent {

  constructor(
    public dialogRef: MatDialogRef<AddEditFacilitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
