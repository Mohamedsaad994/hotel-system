import { FacilitiesService } from './services/facilities.service';
import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { HttpErrorResponse } from '@angular/common/http';



import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { IAllFacilities, IFacilitiesArrayData } from './models/facilities';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
  constructor(
    private _HelperService: HelperService,
    private _FacilitiesService: FacilitiesService
  ) {}


  constructor(public dialog: MatDialog, public _HelperService:HelperService, private _FacilitiesService:FacilitiesService ){}
  
  openDeleteDialog(id:number): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {itemId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      
      if(result){
        this.onDeleteItem(result);
      }
    });
  }


  onDeleteItem(id:number){
    this._FacilitiesService.deleteFacility(id).subscribe({
      next:(res) => {
        console.log(res)
      }, error:(err:HttpErrorResponse)=>{
        this._HelperService.error(err)
      },complete:()=> {
        //get facilities method 
      }
    })
  }


  headers: string[] = [
    'name',
    'createdAt',
    'updatedAt',
    'actions'
  ];

  displayHeaders: { [key: string]: string } = {
    name: 'Name',
    createdAt: 'Created at',
    updatedAt: 'Updated at',
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
      complete: () =>
        this._HelperService.success(
          'Facilities Has Been Retrieved Successfully'
        ),
    });
  }

  handleViewItem(id: string): void {
    console.log('View item:', id);
  }

  handleEditItem(id: string): void {
    console.log('Edit item:', id);
  }

  handleDeleteItem(id: string): void {
    console.log('Delete item:', id);
  }

}
