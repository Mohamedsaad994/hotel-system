export interface AdsData {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  ads: Ad[];
  totalCount: number;
}

export interface Ad {
  _id: string;
  isActive: boolean;
  room: Room;
  createdBy: CreatedBy;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
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

export interface CreatedBy {
  _id: string;
  userName: string;
}







export interface DataOfReview {
  success: boolean
  message: string
  data: Data
}

export interface Data {
  roomReviews: RoomReview[]
  totalCount: number
}

export interface RoomReview {
  _id: string
  room: Room
  user: User
  rating: number
  review: string
  createdAt: string
  updatedAt: string
}

export interface Room {
  _id: string
  roomNumber: string
}

export interface User {
  _id: string
  userName: string
  profileImage: string
}



export interface RoomsData {
  success: boolean
  message: string
  data: Data
}

export interface Data {
  rooms: Room[]
  totalCount: number
}

export interface Room {
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
  isBooked: boolean
}

export interface Facility {
  _id: string
  name: string
}
