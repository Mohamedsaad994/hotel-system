import { Component } from '@angular/core';
import { FavouriteService } from './services/favourite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IRoom, IFavRoom, IDeleteFavResRoom,IFavRoomResponse, IAllFavResData } from './models/favourite';
import { ToastrService } from 'ngx-toastr';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  pageSize: number = 10;
  pageNumber: number = 0;
  totalCount!: number;
  rooms: string[] = [];

  room: IRoom[] = [];

  favouriteRooms:IFavRoom[] = [];
  data: IAllFavResData = {
    favoriteRooms: this.favouriteRooms,
    totalCount: 0
  }

  iDeleteFavResRoom: IDeleteFavResRoom = {
    _id: '',
    rooms: this.rooms,
    user: '',
    createdAt: '',
    updatedAt: ''
  }
  iDeleteFavResData: any = {
    favoriteRoom: this.iDeleteFavResRoom
  }

  emptyImage: string = '../../../../../assets/images/empty-room.jpg';
  lang: string = localStorage.getItem('lang') !== null ? localStorage.getItem('lang')! : 'en';
  loginToFav: any = localStorage.getItem('role');

  constructor(
    private _FavouriteService:FavouriteService,
    private _HelperService:HelperService,
    public dialog: MatDialog,
    private _Router: Router,
    private _TranslateService: TranslateService,
    private _ToastrService: ToastrService,

  ){}


  ngOnInit(): void{
    this._TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {

      this.lang = event.lang;
    });
    this.getAllFavourites();
  }


  getAllFavourites(){
    this._FavouriteService.getFavouriteRooms().subscribe({
      next:(res) =>{
        this.favouriteRooms = res.data.favoriteRooms
        console.log(this.favouriteRooms);
        this.totalCount = res.data.favoriteRooms[0].rooms.length;
      },
      error:(err:HttpErrorResponse) =>{
        this._HelperService.error(err);
      }

    })
  }





  // toLogin(): void {
  //   this._ToastrService.error('You need to login first')
  //   this._Router.navigate(['/auth'])

  // }
  // backToHome() {
  //   this._Router.navigate(['../'])

  // }
  //delete

  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string, itname: string, componentName: string): void {
    const dialog = this.dialog.open(DeleteComponent, {
      // width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        comp: componentName,
        id: id,
        name: itname
      }
    });
    dialog.afterClosed().subscribe(res => {
      if (res != null) {
        this.onDeleteItem(res)
      }
    })
  }

  onDeleteItem(roomId: string) {
    console.log(roomId);

    this._FavouriteService.deleteRoom(roomId).subscribe({
      next: (res) => {  },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this._HelperService.error(err);
      },
      complete: () => {
        this._HelperService.success('Room Has Been Deleted');
        this.getAllFavourites();
      }
    });
  }


  iconClass = 'fa-solid fa-heart';

  toggleIconClass() {

    // Toggle between 'fa-solid' and 'fa-regular'
    this.iconClass = this.iconClass === 'fa-solid fa-heart' ? 'fa-regular fa-heart' : 'fa-solid fa-heart';
  }

  handleDeleteItem(roomId: string, roomNumber: string) {
    this.toggleIconClass();
    setTimeout(()=>{
      this.openDeleteDialog('700ms', '350ms', roomId, roomNumber, 'Room')
    }, 1000);

  }

  pageNumberEvent(event: number): void {
    this.pageNumber = event;
    this.getAllFavourites();
  }

  pageSizeEvent(event: number): void {
    this.pageSize = event;
    this.getAllFavourites();
  }


  SuccessToaster(toastEnAr:string) {
    this._TranslateService.get('toaster.'+toastEnAr).subscribe((res: string) => {
      this._ToastrService.success(res);
    });
  }
}
