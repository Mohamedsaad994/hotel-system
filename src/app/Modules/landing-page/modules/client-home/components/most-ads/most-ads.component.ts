import { Component } from '@angular/core';
import { ClientHomeService } from '../../service/clientHome.service';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { Router } from '@angular/router';
import { IRoomsArrayData, IRoomsUserDetails } from 'src/app/Modules/admin/dashboard/modules/rooms/models/rooms';
import { FavouritesService } from '../../service/favourites.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserSignComponent } from 'src/app/Modules/shared/components/user-sign/user-sign.component';

@Component({
  selector: 'app-most-ads',
  templateUrl: './most-ads.component.html',
  styleUrls: ['./most-ads.component.scss']
})
export class MostAdsComponent {
  roomRespnse:IRoomsUserDetails|undefined;
  roomsData:IRoomsArrayData[] | any=[];
  pageNumber: number = 1;
  pageSize: number = 5;
constructor(private _ClientHomeService:ClientHomeService , private _HelperService:HelperService,
  private _Router:Router , private _FavouritesService:FavouritesService,
  public dialog: MatDialog
){}
ngOnInit(): void {
  this.onGetAllRooms()
}
onGetAllRooms() {
  let params = {
    page: this.pageNumber,
    size: this.pageSize,
  };
  return this._ClientHomeService.getAllRoom(params).subscribe({
    next: (res) => {
      this.roomRespnse = res;
      this.roomsData = res.data.rooms;        
    },
  });
}
addFavouriteById(roomId: string){
  if (!localStorage.getItem('role')) {
    this.openDialogUserSign();
  }
  return this._FavouritesService.addFavourite(roomId).subscribe({
    next: (res) => {
    },
    error:(err:HttpErrorResponse)=> this._HelperService.error(err.error.message),
    complete:()=>{
      this._HelperService.success('Room added to favorites successfully');
    }
  })
}


openDialogUserSign(): void {
  const dialogRef = this.dialog.open(UserSignComponent, {
    data: {},
    width: '40%',
  });

  dialogRef.afterClosed().subscribe((result) => {
  });
}

}
