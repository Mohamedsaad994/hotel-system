export interface IAllAds {
  success: boolean;
  message: string;
  data: IAdsData;
}



  export interface IParams{
    page :number,
   size:number
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

export interface IAdDetailsResponse {
  success: string;
  message: string;
  data: IDataAdDetailsResponse;
}
export interface IDataAdDetailsResponse {
  ads: IAdsArrayData;
}

export interface IAdsParams {
  page: number;
  size: number;
  [Key: string]: any
}

