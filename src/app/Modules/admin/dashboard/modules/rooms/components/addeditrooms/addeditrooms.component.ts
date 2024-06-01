import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { IAllFacilities, IFacilitiesArrayData } from '../../../facilities/models/facilities';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-addeditrooms',
  templateUrl: './addeditrooms.component.html',
  styleUrls: ['./addeditrooms.component.scss']
})
export class AddeditroomsComponent{

  Facilities!: IAllFacilities;
  FacilitiesData!: IFacilitiesArrayData[]

  image!: File;
  url!: any;

  constructor(private _FacilitiesService:FacilitiesService, private _RoomsService:RoomsService){}

  ngOnInit(): void {
    this.getAllFacilities()
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
      next: (res)=>{ }
    })
  }

  onSelect(event: any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        // this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.image = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
}
