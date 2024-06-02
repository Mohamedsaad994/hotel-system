export interface IAllAds {
    success: boolean;
    message: string;
    data: IAdsData;
  }
  
  export interface IAdsData {
    ads: IAdsArrayData[];
    totalCount: number;
  }
  
  export interface IAdsArrayData {
    _id: string;
    isActive: boolean;
    room: IAdsRoom;
    createdBy: IAdsCreatedBy;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IAdsRoom {
    _id: string;
    roomNumber: string;
    price: number;
    capacity: number;
    discount: number;
    facilities: string[];
    createdBy: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IAdsCreatedBy {
    _id: string;
    userName: string;
  }
  