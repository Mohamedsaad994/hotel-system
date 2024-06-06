import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Core/Enums/role.enum';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{


  getRole = localStorage.getItem('role')

  ngOnInit(): void {
    this.isAuthorized()
  }

  isAuthorized(): boolean{
    if (this.getRole != null && this.getRole == Role.user){
      return true
    }else{
      return false
    }
  }

}
