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
  createdBy: {};
  createdAt: string;
  updatedAt: string;
}

export interface IFacilitiesCreatedByData {
  _id: string;
  userName: string;
}
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
  name: string;
  createdBy: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

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