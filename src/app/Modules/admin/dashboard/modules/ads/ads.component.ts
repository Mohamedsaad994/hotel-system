import { Component } from '@angular/core';
import { IAdsArrayData, IAdsData, IAdsRoom, IAllAds } from './models/ads';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { AdsService } from './services/ads.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {
  ads!: IAllAds;
  tableData!: IAdsData;
  adsData!: IAdsArrayData[] ;
 
  headers:string[] = ['roomName' , 'price' , 'discount' , 'capacity' , 'active' , 'actions'];
  displayHeaders: { [key: string]: string } = {
    roomName: 'Room name',
    price: 'Price',
    discount: 'Discount',
    capacity: 'Capacity',
    active: 'Active',
    actions: 'Actions',
  };
 
 
  constructor(private _HelperService:HelperService ,
  private _AdsService:AdsService,
  public dialog:MatDialog
){}

  ngOnInit(): void {
    this.onGetAllAds() 
  }

onGetAllAds():void{
  this._AdsService.getAllAds().subscribe({
    next:(res)=>{
      this.ads = res;
     this.tableData = this.ads.data;
   this.adsData =this.tableData.ads;
    },
    error:(err:HttpErrorResponse)=> this._HelperService.error(err),
    complete:()=> this._HelperService.success('Success') 
  })
}

handleViewItem(id: string): void{
  console.log(id, 'view');   
}  
handleEditItem(id: string): void{
  console.log(id, 'Edit');   
} 


//delete

openDeleteDialog(id: string): void {
  this._AdsService.getAdDetails(id).subscribe({
    next: (res) => {
      const dialogRef = this.dialog.open(DeleteComponent, {
        data: { name: res.data.ads.room.roomNumber },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.onDeleteItem(id);
        }
      });
    },
  });
}

onDeleteItem(id: string) {
  this._AdsService.deleteAd(id).subscribe({
    next: (res) => {  },
    error: (err: HttpErrorResponse) => {
      console.log(err);
      this._HelperService.error(err);
    },
    complete: () => {
      this._HelperService.success('Ad Has Been Deleted');
      this.onGetAllAds();
    }
  });
}

handleDeleteItem(id: string): void {
  this.openDeleteDialog(id);  
}

}
