import { Data } from './../../../../../../auth/interfaces/auth';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { IAllFacilities, IFacilitiesArrayData } from '../../../facilities/models/facilities';
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
  FacilitiesData!: IFacilitiesArrayData[]

  images: any[] = []
  image!: File;
  url!: any;
  roomId: any;
  oneRoomData!: Room;

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

  getRoomDetails(){
    this._RoomsService.getRoomDetails(this.roomId).subscribe({
      next: (res)=>{
        this.oneRoomData = res.data
        console.log(this.oneRoomData);
      },
      error: (err)=>{
        console.log(err);
      },
      complete: ()=>{
        this.RoomsForm.patchValue({
          roomNumber: this.oneRoomData.roomNumber,
          price: this.oneRoomData.price,
          capacity: this.oneRoomData.capacity,
          discount: this.oneRoomData.discount,
          facilities: this.oneRoomData.facilities.map((value: Facility)=> value._id)
        })
      }
    })
  }

  getAllFacilities(){
    this._FacilitiesService.getAllFacilities().subscribe({
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
      data.append(key, this.RoomsForm.value[key]);
    }
    if (this.image) data.append("profileImage", this.image);

    this._RoomsService.AddRoom(data).subscribe({
      next: (res)=>{ },
      error:(err)=> { },
      complete:()=>{
        this._Router.navigate(['/admin/dashboard/rooms'])
      }
    })
  }

  onSelect(event: any) {
    const files = event.target.files;
    // if (files.length === 0)
    //     return;

    // const mimeType = files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //     // this.message = "Only images are supported.";
    //     return;
    // }

    for(let i = 0; i < files.length; i++){
      let file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>{
        this.images.push(reader.result)
      }
    }

  }
  deletImg(index:number){
    this.images.splice(index, 1)
  }
}
