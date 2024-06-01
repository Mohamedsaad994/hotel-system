import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {

@Input() headertext:string = '' ;
@Input() headerCaption:string = '' ;
@Input() headerBtnText:string = '' ;
@Input() headerBtnClick:string = '';


}
