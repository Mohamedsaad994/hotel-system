import { Component, OnInit } from '@angular/core';
import { IAdsArrayData, IAdsData, IAdsParams, IAllAds } from './models/ads';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { AdsService } from './services/ads.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { AddeditadsComponent } from './components/addeditads/addeditads.component';
import { ViewAdsComponent } from './components/view-ads/view-ads.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  ads: IAllAds = {
    data: {
      ads: [],
      totalCount: 0
    },
    message: '',
    success: false
  };
  tableData!: IAdsData;
  adsData!: any[];
  pageNumber: number = 5;
  pageSize: number = 1;

  currentAdsData!: IAdsArrayData;

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

  constructor(
    private _HelperService: HelperService,
    private _AdsService: AdsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetAllAds();
  }

  onGetAllAds(): void {
    const adsParams: IAdsParams = {
      page: this.pageNumber,
      size: this.pageSize
    }

    this._AdsService.getAllAds(adsParams).subscribe({
      next: (res) => {
        this.ads = res;
        this.tableData = this.ads.data;
        this.adsData = this.tableData.ads.map((ad) => ({
          _id: ad._id,
          roomNumber: ad.room.roomNumber,
          price: ad.room.price,
          discount: ad.room.discount,
          capacity: ad.room.capacity,
          isActive: ad.isActive,
          images: ad.room.images,
        }));
      },
      error: (err: HttpErrorResponse) => this._HelperService.error(err),
      complete: () => this._HelperService.success('Success'),
    });
  }

  pageNumberEvent(event: number) {
    this.pageNumber = event;
    this.onGetAllAds();
  }

  pageSizeEvent(event: number) {
    this.pageSize = event;
    this.onGetAllAds();
  }

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
      next: (res) => {},
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this._HelperService.error(err);
      },
      complete: () => {
        this._HelperService.success('Ad Has Been Deleted');
        this.onGetAllAds();
      },
    });
  }

  handleDeleteItem(id: string): void {
    this.openDeleteDialog(id);
  }

  handleViewItem(id: string): void {
    // console.log(id, 'view');
    this.openViewDialog(id);
  }
  handleEditItem(id: string): void {
    this.openEditDialog(id, 'Edit');
  }

  openEditDialog(id: string, mode: string): void {
    this._AdsService.getAdDetails(id).subscribe({
      next: (res) => {
        this.currentAdsData = res.data.ads;
        const dialogRef = this.dialog.open(AddeditadsComponent, {
          width: '500px',
          height: 'auto',
          data: {
            adsId: id,
            room: this.currentAdsData.room._id,
            active: this.currentAdsData.isActive,
            discount: this.currentAdsData.room.discount,
            mode: mode,
          },
        });

        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed');
          console.log(result);
          this.onGetAllAds();
        });
      },
    });
  }

  openViewDialog(id: string): void {
    this._AdsService.getAdDetails(id).subscribe({
      next: (res) => {
        this.currentAdsData = res.data.ads;
        const dialogRef = this.dialog.open(ViewAdsComponent, {
          width: '500px',
          height: 'auto',
          data: {
            adsId: id,
            room: this.currentAdsData.room._id,
            active: this.currentAdsData.isActive,
            discount: this.currentAdsData.room.discount,
          },
        });

        dialogRef.afterClosed().subscribe((result) => {
          // this.onGetAllAds()
        });
      },
    });
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddeditadsComponent, {
      width: '500px',
      height: 'auto',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onGetAllAds();
    });
  }
}
