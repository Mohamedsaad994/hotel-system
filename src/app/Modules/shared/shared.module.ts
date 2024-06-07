import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './components/delete/delete.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    SharedTableComponent,
    DynamicPipe,
    SharedHeaderComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    TranslateModule

  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SharedTableComponent,
    SharedHeaderComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    TranslateModule
  ],
})
export class SharedModule {}
