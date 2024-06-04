export interface IAllBooking {
  success: boolean;
  message: string;
  data: IBookingData;
}

export interface IBookingParams {
  page: number;
  size: number;
  [key: string]: any;
}

export interface IBookingData {
  booking: IBooking[];
  totalCount: number;
}

export interface IBooking {
  _id: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  user: IUser;
  room: IRoom;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  _id: string;
  userName: string;
}

export interface IRoom {
  _id: string;
  roomNumber: string;
}
