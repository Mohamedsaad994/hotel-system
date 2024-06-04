export interface IUser {
  _id: string;
  userName: string;
  email: string;
  phoneNumber: number;
  country: string;
  role: string;
  profileImage: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserApiResponse {
  success: boolean;
  message: string;
  data: {
    users: IUser[];
    totalCount: number;
  };
}

export interface IUserParams {
  page: number;
  size: number;
  [key: string]: any;
}
