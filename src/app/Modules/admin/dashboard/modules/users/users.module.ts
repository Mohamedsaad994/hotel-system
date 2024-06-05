import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/Modules/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class UsersModule { }
