import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { FacilitiesService } from './services/facilities.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {

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

}
