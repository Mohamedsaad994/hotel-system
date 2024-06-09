export interface IRoom {
  success: true;
  message: string;
  data: IRoomData;
}

export interface IRoomExplore {
  success: true;
  message: string;
  data: IRoomDataExplore;
}

interface IRoomData {
  room: IRoomDetails;
  totalCount: number;
}

interface IRoomDataExplore {
  rooms: IRoomDetails[];
  totalCount: number;
}

export interface IRoomDetails {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: [];
  createdBy: {
    _id: string;
    userName: string;
  };
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICreateRoomComment {
  roomId: string;
  comment: string;
}

export interface IRoomComment {
  room: string;
  user: string;
  comment: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateRoomCommentResponse {
  success: boolean;
  message: string;
  data: {
    roomComment: IRoomComment;
  };
}

export interface ICreateRoomReviews {
  roomId: string;
  rating: number;
  review: string;
}

export interface ICreateRoomReviewsResponse {
  success: boolean;
  message: string;
  data: {
    roomReview: IRoomReview;
  };
}

export interface IRoomReview {
  room: string;
  user: string;
  rating: number;
  review: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
