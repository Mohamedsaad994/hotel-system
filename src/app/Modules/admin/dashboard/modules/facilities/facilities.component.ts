import { FacilitiesService } from './services/facilities.service';
import { Component } from '@angular/core';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IAddEditFacility, IAddFacilityDataResponse, IAllFacilities, IEditFacilityResponse, IFacilitiesArrayData, IFacilitiesDetails, IFacilitiesDetailsCreatedBy, IFacilitiesDetailsResponse, IRoom } from './models/facilities';
import { HttpErrorResponse } from '@angular/common/http';
import { AddEditFacilitiesComponent } from './components/add-edit-facilities/add-edit-facilities.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
 
  constructor(
    private _HelperService: HelperService,
    private _FacilitiesService: FacilitiesService,
    public dialog: MatDialog
  ) {}

  headers: string[] = [
    'name',
    'createdAt',
    'updatedAt',
    'actions'
  ];

  displayHeaders: { [key: string]: string } = {
    name: 'Name',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
    actions: 'Actions'
  };

  roomFacilities!: IAllFacilities;
  roomFacilitiesData!: IFacilitiesArrayData[];

  ngOnInit(): void {
    this.onGetAllFacilities();
  }

  onGetAllFacilities() {
    this._FacilitiesService.getAllFacilities().subscribe({
      next: (res: IAllFacilities) => {
        this.roomFacilities = res;
        this.roomFacilitiesData = this.roomFacilities.data.facilities
      },

      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () =>{}
    });
  }
onAddFacilities(data:IAddEditFacility){
  this._FacilitiesService.addFacilities(data).subscribe({
    next:(res)=>{},
    error:(err: HttpErrorResponse)=> this._HelperService.error(err),
    complete:()=>{
      this._HelperService.success('Facilities Added Successfully');
      this.onGetAllFacilities();
    }
  })
}
onDetailsFacilities(_id:string){
  this._FacilitiesService.detailsFacilities(_id).subscribe({
    next:(res)=>{
      const dialogRef = this.dialog.open(AddEditFacilitiesComponent, {
        width:'550px',
        height:'auto' ,
        data: {name:res.data.facility.name},
      });
    
      dialogRef.afterClosed().subscribe(result => {
       this.onEditFacilities(_id,result.name);    
      });
    }
  })
}
onEditFacilities(_id:string,newName:IAddEditFacility){
  this._FacilitiesService.editFacilities(_id,newName).subscribe({
    next:(res:IEditFacilityResponse)=>{},
    error:(err: HttpErrorResponse)=> this._HelperService.error(err),
    complete:()=>{
      this._HelperService.success('Facilities Updated Successfully');
      this.onGetAllFacilities();
    }
  })
}
  handleViewItem(id: string): void {
    this.onDetailsFacilities(id)
  }

  handleEditItem(_id:string): void {
   this.onDetailsFacilities(_id)
  }

  handleDeleteItem(id: string): void {
    console.log('Delete item:', id);
  }

  openAddFacilitiesDialog(): void {
    const dialogRef = this.dialog.open(AddEditFacilitiesComponent, {
      width:'550px',
      height:'auto' ,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
     this.onAddFacilities(result.name);    
    });
  }



}




