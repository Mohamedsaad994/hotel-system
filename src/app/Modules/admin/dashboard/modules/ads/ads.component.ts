import { Component, OnInit } from '@angular/core';
import { IAdsArrayData, IAdsData, IAllAds } from './models/ads';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { AdsService } from './services/ads.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  ads!: IAllAds;
  tableData!: IAdsData;
  adsData!: any[];

  headers: string[] = [
    'roomNumber',
    'price',
    'discount',
    'capacity',
    'isActive',
    'actions',
  ];

  displayHeaders: { [key: string]: string } = {
    roomNumber: 'Room Number',
    price: 'Price',
    discount: 'Discount',
    capacity: 'Capacity',
    isActive: 'Active',
    actions: 'Actions',
  };
 
 
  constructor(private _HelperService:HelperService ,
  private _AdsService:AdsService,
  public dialog:MatDialog
){}

  ngOnInit(): void {
    this.onGetAllAds();
  }

  onGetAllAds(): void {
    this._AdsService.getAllAds().subscribe({
      next: (res) => {
        this.ads = res;
        this.tableData = this.ads.data;
        this.adsData = this.tableData.ads.map(ad => ({
          _id: ad._id,
          roomNumber: ad.room.roomNumber,
          price: ad.room.price,
          discount: ad.room.discount,
          capacity: ad.room.capacity,
          isActive: ad.isActive,
          images: ad.room.images
        }));
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => this._HelperService.success('Success'),
    });
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

  handleViewItem(id: string): void {
    console.log(id, 'view');
  }
  handleEditItem(id: string): void {
    console.log(id, 'Edit');
  }
  
}
