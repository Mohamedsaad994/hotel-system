import { Component, OnInit, inject } from '@angular/core';
import { ClientHomeService } from '../../service/clientHome.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RoomReview } from '../../models/IClientHome';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit{

  reviewData: RoomReview[] = []

  constructor(private _ClientHomeService:ClientHomeService){}


  ngOnInit(): void {
    this.getAllReviews()
  }

  getAllReviews(){
    this._ClientHomeService.getReviews().subscribe({
      next: (res)=>{
        this.reviewData = res.data.roomReviews
        console.log(this.reviewData);

      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,

    nav: true
  }
}
