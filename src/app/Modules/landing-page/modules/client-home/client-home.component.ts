import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { ClientHomeService } from './service/clientHome.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent {
  private _HelperService = inject(HelperService);
  language: string | any = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';

  constructor(private _ClientHomeService:ClientHomeService){}

  ngOnInit(): void {
    this._HelperService.langDirChange.subscribe((lang: string) => {
      this.language = lang;
    })
    // this.sendToExplore()
  }

  // explorForm:FormGroup = new FormGroup({
  //   startDate: new FormControl('2023-01-30'),
  //   endDate: new FormControl('2023-01-20'),
  //   capacity: new FormControl('3'),

  // })

  // sendToExplore(){

  //   this._ClientHomeService.getAllRooms(this.explorForm.value).subscribe({
  //     next: (res)=>{
  //       console.log('allRooms', res);
  //     }
  //   })
  // }
}
