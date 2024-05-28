import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  imagePath: string = '';

  // 01 - _Router.events.subscribe()
  //      inside num 01 _Router.url
  // 02 - ActivatedRoute.urlConfig
  // 03 - Resolver
}
