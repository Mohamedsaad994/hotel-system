import { Component, OnInit, inject } from '@angular/core';
import { ClientHomeService } from '../../service/clientHome.service';
import { Ad } from '../../models/IClientHome';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-room-ads',
  templateUrl: './room-ads.component.html',
  styleUrls: ['./room-ads.component.scss']
})
export class RoomAdsComponent  implements OnInit{

  private _HelperService = inject(HelperService);
  language: string | any = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';
  arrayOfAds:Ad[] = []

  constructor(private _ClientHomeService:ClientHomeService){}

  ngOnInit(): void {
    this._HelperService.langDirChange.subscribe((lang: string) => {
      this.language = lang;
    })
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
