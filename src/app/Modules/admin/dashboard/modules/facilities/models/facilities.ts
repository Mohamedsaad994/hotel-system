export interface IAllFacilities {
  success: boolean;
  message: string;
  data: IFacilitiesData;
}

export interface IFacilitiesData {
  facilities: IFacilitiesArrayData[];
  totalCount: number;
}

export interface IFacilitiesArrayData {
  _id: string;
  name: string;
  createdBy:IFacilitiesCreatedByData;
  createdAt: string;
  updatedAt: string;
}

export interface IFacilitiesCreatedByData {
  _id: string;
  userName: string;
}
//Add
export interface IAddEditFacility{
  name: string;
}
export interface IAddFacilityResponse {
  success: boolean;
  message: string;
  data: IAddFacilityDataResponse;
}

export interface IAddFacilityDataResponse {
  facility: IFacility;
}

export interface IFacility {
  _id: string;
  name: string;
  createdBy: IFacilitiesCreatedByData;
  createdAt: string;
  updatedAt: string;
}
//Edit
export interface IEditFacilityResponse {
  success: boolean;
  message: string;
  data: IEditFacilityDataResponse;
}

export interface IEditFacilityDataResponse {
  room: IRoom;
}

export interface IRoom {
  _id: string
  name: string
  createdBy: string
  createdAt: string
  updatedAt: string
}
//Details
export interface IFacilitiesDetailsResponse {
  success: boolean
  message: string
  data: IFacilitiesDataDetails
}

export interface IFacilitiesDataDetails {
  facility: IFacilitiesDetails
}

export interface IFacilitiesDetails {
  _id: string
  name: string
  createdBy: IFacilitiesDetailsCreatedBy
  createdAt: string
  updatedAt: string
}

export interface IFacilitiesDetailsCreatedBy {
  _id: string
  userName: string
}