export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  message: string;
  data: ILoginDataResponse;
}

export interface ILoginDataResponse {
  user: ILoginUserDataResponse;
  token: string;
}
export interface ILoginUserDataResponse {
  _id: string;
  username: string;
  role: string;
}

export interface IRegisterUserDataResponse {
  success: boolean
  message: string
  data: Data
}

export interface Data {
  userCreated: UserCreated
}

export interface UserCreated {
  userName: string
  email: string
  password: string
  phoneNumber: number
  country: string
  role: string
  profileImage: string
  verified: boolean
  _id: string
  createdAt: string
  updatedAt: string
}
