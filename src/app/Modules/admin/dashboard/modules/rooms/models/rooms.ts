export interface IAllRooms {
  success: boolean;
  message: string;
  data: IRoomsData;
}

export interface IRoomsFilter {
  page: number;
  size: number;
  [key: string]: any;
}

export interface IRoomsData {
  rooms: IRoomsArrayData[];
  totalCount: number;
}

export interface IRoomsArrayData {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: IRoomsFacility[];
  createdBy: IRoomsCreatedBy;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IRoomsFacility {
  _id: string;
  name: string;
}

export interface IRoomsCreatedBy {
  _id: string;
  userName: string;
}

export interface Root {
  room: Room
}

export interface Room {
  _id: string
  roomNumber: string
  price: number
  capacity: number
  discount: number
  facilities: Facility[]
  createdBy: CreatedBy
  images: string[]
  createdAt: string
  updatedAt: string
}

export interface Facility {
  _id: string
  name: string
}

export interface CreatedBy {
  _id: string
  userName: string
}

// export interface IRoomDelete{

// }
