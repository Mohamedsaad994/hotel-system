import { Component, OnInit } from '@angular/core';
import { ClientHomeService } from '../../service/clientHome.service';
import { Ad } from '../../models/IClientHome';

@Component({
  selector: 'app-room-ads',
  templateUrl: './room-ads.component.html',
  styleUrls: ['./room-ads.component.scss']
})
export class RoomAdsComponent  implements OnInit{

  arrayOfAds:Ad[] = []

  constructor(private _ClientHomeService:ClientHomeService){}

  ngOnInit(): void {
    this.getAllAds()
  }

  getAllAds(){
    this._ClientHomeService.getAllAds().subscribe({
      next:(res)=>{
        this.arrayOfAds = res.data.ads
        console.log(this.arrayOfAds);

      }
    })
  }
}
