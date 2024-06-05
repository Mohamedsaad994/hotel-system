
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RoomsService } from '../../services/rooms.service';
import { Room } from '../../models/rooms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{

  roomId: string = '';
  currentRoomData!: Room;

  constructor(private _ActivatedRoute:ActivatedRoute, private _RoomsService:RoomsService) { }

ngOnInit(): void {
  this.roomId = this._ActivatedRoute.snapshot.params['id']
  this.getCurrentRoom()
}

getCurrentRoom(){
  this._RoomsService.getRoomDetails(this.roomId).subscribe({
    next:(res)=>{
      this.currentRoomData = res.data.room
    }
  })
}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1500,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
