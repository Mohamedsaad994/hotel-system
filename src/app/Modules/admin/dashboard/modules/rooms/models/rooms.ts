export interface IAllRooms {
    success: boolean;
    message: string;
    data: IRoomsData;
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
