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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DynamicPipe } from './pipes/dynamic.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [SidebarComponent, NavbarComponent, SharedTableComponent, DynamicPipe],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SharedTableComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],

})
export class SharedModule {}
