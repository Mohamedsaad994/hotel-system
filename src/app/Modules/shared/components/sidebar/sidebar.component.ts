import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface IMenu{
  text: string;
  icon: string;
  link: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  custom:boolean = true

  constructor(private _Router:Router){}

  menu: IMenu[] = [
    {
      text: 'Home',
      icon: 'fa-solid fa-home',
      link: '/admin/dashboard/home',
      isActive: true
    },
    {
      text: 'Users',
      icon: 'fa-solid fa-user-group',
      link: '/admin/dashboard/users',
      isActive: true
    },
    {
      text: 'Rooms',
      icon: 'fa-solid fa-list-check',
      link: '/admin/dashboard/rooms',
      isActive: true
    },
    {
      text: 'Ads',
      icon: 'fa-solid fa-table-list',
      link: '/admin/dashboard/ads',
      isActive: true
    },
    {
      text: 'Booking',
      icon: 'fa-solid fa-list-check',
      link: '/admin/dashboard/booking',
      isActive: true
    },
    {
      text: 'Facilities',
      icon: 'fa-regular fa-heart',
      link: '/admin/dashboard/facilities',
      isActive: true
    },
  ]

  logOut(){
    localStorage.removeItem('userToken')
    this._Router.navigate(['/auth'])
  }
}
