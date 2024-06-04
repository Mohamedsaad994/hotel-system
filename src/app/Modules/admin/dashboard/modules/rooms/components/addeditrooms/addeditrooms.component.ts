import { Data } from './../../../../../../auth/interfaces/auth';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { IAllFacilities, IFacilitiesArrayData, IFacilitiesParams } from '../../../facilities/models/facilities';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Facility, IRoomsArrayData, Room } from '../../models/rooms';

@Component({
  selector: 'app-addeditrooms',
  templateUrl: './addeditrooms.component.html',
  styleUrls: ['./addeditrooms.component.scss']
})
export class AddeditroomsComponent{

  Facilities!: IAllFacilities;
  FacilitiesData: IFacilitiesArrayData[] = []

  // images: any[] = []
  // image!: File;
  url!: any[];
  roomId: any;
  oneRoomData!: Room;
  files:any[] = []

  constructor(
    private _FacilitiesService:FacilitiesService,
    private _RoomsService:RoomsService,
    private _Router:Router,
    private _ActivatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getAllFacilities()
    this.roomId = this._ActivatedRoute.snapshot.params['id']
    if(this.roomId){
      this.getRoomDetails()
    }else{

    }
  }

  async fetchImage(url: any) {
    var res = await fetch(url);
    var blob = await res.blob();
    for(let i = 0; i < this.files.length; i++){
    // this.imgSrc = blob;
      this.files[i] = blob;

    }
  };

  getRoomDetails(){
    this._RoomsService.getRoomDetails(this.roomId).subscribe({
      next: (res)=>{
        this.oneRoomData = res.data.room
        console.log(this.oneRoomData);
      },
      error: (err)=>{
        console.log(err);
      },
      complete: ()=>{
        this.url = this.oneRoomData.images

        for(let i = 0; i< this.url.length; i++){
          this.fetchImage(this.url[i])
        }

        this.RoomsForm.patchValue({
          roomNumber: this.oneRoomData.roomNumber,
          price: this.oneRoomData.price,
          capacity: this.oneRoomData.capacity,
          discount: this.oneRoomData.discount,
          facilities: this.oneRoomData.facilities.map((value: Facility)=> value._id),
          imgs: this.oneRoomData.images
        })
      }
    })
  }

  getAllFacilities(){
    const params: IFacilitiesParams = {
      page: 1,
      size: 10,
    }
    this._FacilitiesService.getAllFacilities(params).subscribe({
      next:(res)=>{
        this.Facilities= res
        this.FacilitiesData= this.Facilities.data.facilities
      },
      error:(err)=> { },
    })
  }

  RoomsForm:FormGroup = new FormGroup({
    roomNumber : new FormControl('', [Validators.required]),
    imgs : new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    capacity : new FormControl('', [Validators.required]),
    discount : new FormControl('', [Validators.required]),
    facilities: new FormControl('')
  })

  sendRoomsForm(){
    const data = new FormData;

    for (let key in this.RoomsForm.value) {
      if (key === "imgs") continue;
      if(key === "facilities"){
        for(let i = 0; i< this.RoomsForm.value.facilities.length; i++){
          data.append(key, this.RoomsForm.value.facilities[i])
        }
        continue;
      }
      data.append(key, this.RoomsForm.value[key]);
    }
    if (this.files){
      for(let i =0; i <this.files.length; i++){
        data.append('imgs', this.files[i])
      }
    // data.append('imgs', this.images);
    }

    this._RoomsService.AddRoom(data).subscribe({
      next: (res)=>{ },
      error:(err)=> { },
      complete:()=>{
        this._Router.navigate(['/admin/dashboard/rooms'])
      }
    })
  }



onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event: any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
