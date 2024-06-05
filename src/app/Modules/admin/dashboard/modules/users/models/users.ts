export interface IAllUsers {
    success:string;
    message:string;
    data: IDataAllUsers;
}

export interface IDataAllUsers{
    users: IDataArrayAllUsers[];
    totalCount:number;
}

export interface IDataArrayAllUsers{
    _id:string;
    userName:string;
    email:string;
    phoneNumber:number;
    country:string;
    role:string;
    profileImage:string;
    verified:boolean;
    createdAt:string;
    updatedAt:string;
}