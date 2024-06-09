import { Component } from '@angular/core';
import { ExploreService } from './servieces/explore.service';
import { Room } from '../client-home/models/IClientHome';

@Component({
  selector: 'app-explore-us',
  templateUrl: './explore-us.component.html',
  styleUrls: ['./explore-us.component.scss']
})
export class ExploreUsComponent {

  roomsArray: Room[] = []
  emptyImage: string = '../../../../../assets/images/empty-room.jpg'

  constructor(private _ExploreService:ExploreService){}

  ngOnInit(): void {
    this.getAllRooms()
  }

  getAllRooms(){
    this._ExploreService.getAllRooms().subscribe({
      next:(res)=>{
        this.roomsArray = res.data.rooms
        console.log(this.roomsArray);
      }
    })
  }
}
