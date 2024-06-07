import { Component, inject } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent {
  private _HelperService = inject(HelperService);
  language: string = 'en';

  ngOnInit(): void {
    this._HelperService.langDirChange.subscribe((lang: string) => {
      this.language = lang;
    })
  }
}
