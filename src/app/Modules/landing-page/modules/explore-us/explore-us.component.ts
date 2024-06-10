import { Component } from '@angular/core';
import { ExploreService } from './servieces/explore.service';
import { Room } from '../client-home/models/IClientHome';
import { ActivatedRoute, Params } from '@angular/router';
import { IExploreUsFiltration } from './models/explore-us';
import {
  IRoom,
  IRoomDetails,
  IRoomExplore,
} from '../../components/details/models/details';
import { PaginatorState } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-explore-us',
  templateUrl: './explore-us.component.html',
  styleUrls: ['./explore-us.component.scss'],
})
export class ExploreUsComponent {
  startDate: string = '';
  endDate: string = '';
  capacity: number = 0;
  size: number = 10;
  page: number = 1;
  roomData: IRoomExplore = {
    data: {
      rooms: [],
      totalCount: 0,
    },
    success: true,
    message: '',
  };

  roomsArray: IRoomDetails[] = [];
  emptyImage: string = '../../../../../assets/images/empty-room.jpg';

  constructor(
    private _ExploreService: ExploreService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      this.capacity = params['capacity'];
    });
    this.getAllRooms();
  }

  first: number = 0;

  rows: number = 10;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.page = Math.floor(this.first / this.rows) + 1;
    this.size = this.rows;
    this.getAllRooms();
  }

  getAllRooms() {
    let roomExplore!: IExploreUsFiltration;
    if (this.startDate && this.endDate && this.capacity) {
      roomExplore = {
        size: this.size,
        page: this.page,
        startDate: this.startDate,
        endDate: this.endDate,
        capacity: this.capacity,
      };
    } else {
      roomExplore = {
        size: this.size,
        page: this.page,
      };
    }
    this._ExploreService.getAllRooms(roomExplore).subscribe({
      next: (res: IRoomExplore) => {
        this.roomData = res;
        this.roomsArray = res.data.rooms;
      },
    });
  }
}
