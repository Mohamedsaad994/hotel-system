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
