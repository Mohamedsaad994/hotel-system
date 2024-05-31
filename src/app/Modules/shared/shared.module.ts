import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports:[
    MatDialogModule
  ],
  declarations: [
    DeleteComponent
  ]
})
export class SharedModule { }
