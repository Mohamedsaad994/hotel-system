import { Component } from '@angular/core';
import { IAdsArrayData, IAdsData, IAdsRoom, IAllAds } from './models/ads';
import { HelperService } from 'src/app/Modules/shared/services/helper.service';
import { AdsService } from './services/ads.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {
  ads!: IAllAds;
  tableData!: IAdsData;
  adsData!: IAdsArrayData[] ;
 
  headers:string[] = ['roomName' , 'price' , 'discount' , 'capacity' , 'active' , 'actions'];
  displayHeaders: { [key: string]: string } = {
    roomName: 'Room name',
    price: 'Price',
    discount: 'Discount',
    capacity: 'Capacity',
    active: 'Active',
    actions: 'Actions',
  };
 
 
  constructor(private _HelperService:HelperService ,
  private _AdsService:AdsService){
    
  }

  ngOnInit(): void {
    this.onGetAllAds() 
  }

onGetAllAds():void{
  this._AdsService.getAllAds().subscribe({
    next:(res)=>{
      this.ads = res;
     this.tableData = this.ads.data;
   this.adsData =this.tableData.ads;
    },
    error:(err:HttpErrorResponse)=> this._HelperService.error(err),
    complete:()=> this._HelperService.success('Success') 
  })
}

handleViewItem(id: string): void{
  console.log(id, 'view');   
}  
handleEditItem(id: string): void{
  console.log(id, 'Edit');   
} 
handleDeleteItem(id: string): void {
  console.log(id,'Delete');
  
}

}
