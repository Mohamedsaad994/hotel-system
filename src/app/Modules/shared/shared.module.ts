import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DynamicPipe } from './pipes/dynamic.pipe';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  declarations: [SidebarComponent, NavbarComponent, SharedTableComponent, DynamicPipe],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SharedTableComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
