import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { IRoomsArrayData } from '../../../rooms/models/rooms';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-addeditads',
  templateUrl: './addeditads.component.html',
  styleUrls: ['./addeditads.component.scss']
})
export class AddeditadsComponent implements OnInit{

  roomsData: IRoomsArrayData[] = []
  currentData : any;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _HelperService:HelperService,
    private _RoomsService:RoomsService,
    private _AdsService:AdsService
  ) {}


  ngOnInit(): void {
    this.getAllRooms()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllRooms(){
    const params = {
      size: 1000,
      page: 1,
    };
    this._RoomsService.getAllRooms(params).subscribe({
      next: (res) =>{
        this.roomsData = res.data.rooms
      }
    })
  }

  adsForm: FormGroup = new FormGroup({
    room: new FormControl (''),
    discount: new FormControl (''),
    isActive: new FormControl ('')
  })

  sendAdsForm(){
    let adsData = this.adsForm.value;
    this._AdsService.createAds(adsData).subscribe({
      next: (res)=>{ },
      error:(err)=>{
        this._HelperService.error(err)
      },
      complete:()=>{
        this.onNoClick()
        this._HelperService.success('Ads Created Successfully')
      }
    })
  }


  sendUpdate(data: any){

    this._AdsService.updateAds(data.adsId,{isActive: data.active, discount: data.discount}).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{
        this._HelperService.error(err)
      },
      complete:()=>{
        this.onNoClick()
        this._HelperService.success('Ads Updated Successfully')
      }
    })
  }
}
