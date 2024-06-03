import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IRoomsArrayData } from '../../../rooms/models/rooms';
import { RoomsService } from '../../../rooms/services/rooms.service';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent {
  roomsData: IRoomsArrayData[] = []
  currentData : any;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _RoomsService:RoomsService,
    private _AdsService:AdsService
  ) {}


  ngOnInit(): void {
    this.getAllRooms()
    this.disableFormControls();
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



  disableFormControls() {

     this.adsForm.get('room')?.disable();
     this.adsForm.get('discount')?.disable();
     this.adsForm.get('isActive')?.disable();
    
   
   }



}
