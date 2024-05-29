
export interface Ireset{
    email:string;
    password:string;
    confirmPassword:string;
    seed:string;
  }

export interface IresetResponse{
    success:boolean;
    message:string;
    data: IresetDataResponse;
}

export interface IresetDataResponse{
    user: IresetUserDataResponse;
    token:string;
}

export interface IresetUserDataResponse{
    _id:string;
    userName:string;
    role:string;
}