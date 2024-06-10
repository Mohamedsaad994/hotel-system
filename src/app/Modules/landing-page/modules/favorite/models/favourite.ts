
export interface IFavRoomResponse{
    success:boolean;
    message:string;
    data:IAllFavResData
}

export interface IAllFavResData {
    favoriteRooms: IFavRoom[]
    totalCount: number;
  }
export interface IFavRoom{
    rooms: IRoom[]
    user: IUser
    _id: string
    createdAt: string
    updatedAt: string

}

export interface IRoom {
    _id: string
    roomNumber: string
    price: number
    capacity: number
    discount: number
    facilities: string[]
    createdBy: string
    images: string[]
    createdAt: string
    updatedAt: string
  }

  
  export interface IUser {
    _id: string
    userName: string
  }

  //delete

  
  export interface IDeleteFavRes {
    success: boolean
    message: string
    data: IDeleteFavResData
  }
  
  export interface IDeleteFavResData {
    favoriteRoom: IDeleteFavResRoom
  }
  
  export interface IDeleteFavResRoom {
    _id: string
    rooms: string[]
    user: string
    createdAt: string
    updatedAt: string
  }