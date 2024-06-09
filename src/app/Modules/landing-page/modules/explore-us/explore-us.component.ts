import { Component } from '@angular/core';
import { ExploreService } from './servieces/explore.service';
import { Room } from '../client-home/models/IClientHome';
import { ActivatedRoute, Params } from '@angular/router';
import { IExploreUsFiltration } from './models/explore-us';
import { IRoom, IRoomDetails, IRoomExplore } from '../../components/details/models/details';

@Component({
  selector: 'app-explore-us',
  templateUrl: './explore-us.component.html',
  styleUrls: ['./explore-us.component.scss']
})
export class ExploreUsComponent {
  startDate: string = '';
  endDate: string = '';
  capacity: number = 0;

  roomsArray: IRoomDetails[] = []
  emptyImage: string = '../../../../../assets/images/empty-room.jpg'

  constructor(private _ExploreService:ExploreService, private _ActivatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      this.capacity = params['capacity'];
    })
    this.getAllRooms();
  }

  getAllRooms(){
    const roomExplore: IExploreUsFiltration = {
      size: 10,
      page: 1,
      startDate: this.startDate,
      endDate: this.endDate,
      capacity: this.capacity
    }
    this._ExploreService.getAllRooms(roomExplore).subscribe({
      next:(res: IRoomExplore)=>{
        this.roomsArray = res.data.rooms
        console.log(this.roomsArray);
      }
    })
  }
}
