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
