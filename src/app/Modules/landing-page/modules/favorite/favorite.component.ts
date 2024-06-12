import { Component } from '@angular/core';
import { FavouriteService } from './services/favourite.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IRoom, IFavRoom, IDeleteFavResRoom,IFavRoomResponse, IAllFavResData } from './models/favourite';
import { ToastrService } from 'ngx-toastr';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { PaginatorState } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  size: number = 10;
  page: number = 1;

  // pageSize: number = 10;
  // pageNumber: number = 0;
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

  
  first: number = 0;

  rows: number = 10;
  
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.page = Math.floor(this.first / this.rows) + 1;
    this.size = this.rows;
    this.getAllFavourites();
  }


  
  openDeleteDialog(id:string, roomNum:string): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {itemId:id, name:roomNum},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      
      if(result){
        this.onDeleteItem(result);
      }
    });
  }



  
  onDeleteItem(id: string){
    this._FavouriteService.deleteRoom(id).subscribe({
      next:(res) => {
        console.log(res)
      }, error:(err: HttpErrorResponse) => {
        console.log(err);
        this._HelperService.error(err);
      },complete:()=> {
        this.getAllFavourites();
      }
    })
  }

  
  iconClass = 'fa-solid fa-heart';
  
  toggleIconClass() {
   
    // Toggle between 'fa-solid' and 'fa-regular'
    this.iconClass = this.iconClass === 'fa-solid fa-heart' ? 'fa-regular fa-heart' : 'fa-solid fa-heart';
  }

  handleDeleteItem(id:string, roomNum:string) {
    this.toggleIconClass();
    setTimeout(()=>{
      this.openDeleteDialog(id, roomNum)
    }, 1000);
    
  }

  
  SuccessToaster(toastEnAr:string) {
    this._TranslateService.get('toaster.'+toastEnAr).subscribe((res: string) => {
      this._ToastrService.success(res);
    });
  }
}
