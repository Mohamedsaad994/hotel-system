import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';
import { FavouriteService } from './services/favourite.service';
import { SharedModule } from 'src/app/Modules/shared/shared.module';


@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    SharedModule
  ],
  providers:[
    FavouriteService
  ]
})
export class FavoriteModule { }
