import { Component, OnInit } from '@angular/core';
import { IAdsArrayData, IAdsData, IAllAds } from './models/ads';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { AdsService } from './services/ads.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(
    private _HelperService: HelperService,
    private _AdsService: AdsService
  ) {}

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

  handleViewItem(id: string): void {
    console.log(id, 'view');
  }
  handleEditItem(id: string): void {
    console.log(id, 'Edit');
  }
  handleDeleteItem(id: string): void {
    console.log(id, 'Delete');
  }
}
