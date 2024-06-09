import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  private _HelperService = inject(HelperService);
  language: string | any = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';

  ngOnInit(): void {
    this._HelperService.langDirChange.subscribe((lang: string) => {
      this.language = lang;
    })
  }
}
