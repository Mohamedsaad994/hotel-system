import { RoomComment } from './../../modules/client-home/models/IClientHome';
import { Component, AfterViewInit, OnInit, inject, ElementRef, ViewChild } from '@angular/core';
import { DetailsService } from './services/details.service';
import { IRoom, IRoomDetails, ICreateRoomComment, ICreateRoomReviews, ICreateRoomCommentResponse, ICreateRoomReviewsResponse } from './models/details';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientHomeService } from '../../modules/client-home/service/clientHome.service';
import { ThisReceiver } from '@angular/compiler';
import { DeleteComponent } from 'src/app/Modules/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit, OnInit {
  @ViewChild('starContainer') starContainer!: ElementRef;

  stars = new Array(5);
  Math = Math;
  roomId: string = '';

  image: string = '';
  selectedRating: number | null = null;

  roomDetails: IRoomDetails = {
    _id: '',
    roomNumber: '',
    price: 0,
    capacity: 0,
    discount: 0,
    facilities: [],
    createdBy: {
      _id: '',
      userName: ''
    },
    images: [],
    createdAt: '',
    updatedAt: ''
  };

  roomComments: RoomComment[] = []

  currentComment: any
  check!: boolean

  commentForm: FormGroup = new FormGroup({
    roomId: new FormControl(null),
    comment: new FormControl(null, [Validators.required]),
  })

  reviewForm: FormGroup = new FormGroup({
    roomId: new FormControl(null),
    rating: new FormControl(null, [Validators.required]),
    review: new FormControl(null, [Validators.required]),
  })

  constructor(
    private _DetailsService: DetailsService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _ClientHomeService:ClientHomeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetRoomId();
    this.getRoomComments()
  }

  ngAfterViewInit() {
    this.paragraphTransform();
    this.addMouseAndClickEvents();
  }

  paragraphTransform() {
    const paragraph = document.getElementById("styled-text");
    if (paragraph) {
      const text = paragraph.innerHTML;
      const formattedText = text.replace(/\.\s*/g, ".\n");
      paragraph.innerHTML = formattedText;
    }
  }

  getRoomDetails(id: string) {
    this._DetailsService.roomDetails(id).subscribe({
      next: (res: IRoom) => {
        this.roomDetails = res.data.room;
        if (this.roomDetails.discount > 100) {
          this.roomDetails.discount = 100;
        }
      }
    });
  }

  onGetRoomId() {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.roomId = params['id'];
      this.getRoomDetails(this.roomId);
    })
  }

  addComment(commentForm: FormGroup) {
    if (localStorage.getItem('userToken') !== null) {
      commentForm.patchValue({ roomId: this.roomId });
      this._DetailsService.createComment(commentForm.value).subscribe({
        next: (res: ICreateRoomCommentResponse) => {
          console.log(res);
          this.commentForm.reset()
          console.log('Comment Form Valid:', commentForm.valid);
          console.log('Comment Form Errors:', commentForm.errors);
          this.getRoomComments()
          // console.log(res);
        }
      });
    } else {
      this._Router.navigate(['/auth'])
    }
  }

  addReview(reviewForm: FormGroup) {
    if (localStorage.getItem('userToken') !== null) {
      reviewForm.patchValue({ roomId: this.roomId, rating: this.selectedRating });
      if (reviewForm.valid) {
        this._DetailsService.createReview(reviewForm.value).subscribe({
          next: (res: ICreateRoomReviewsResponse) => {
            console.log(res);
          },
          error: (err) => {
            console.error('Error:', err);
          }
        });
      } else {
        reviewForm.markAllAsTouched();
      }
    } else {
      this._Router.navigate(['/auth'])
    }
  }


  addMouseAndClickEvents(): void {
    const stars = this.starContainer.nativeElement.querySelectorAll('.fa-star');

    stars.forEach((star: HTMLElement, index: number) => {
      star.addEventListener('mouseenter', () => {
        if (this.selectedRating === null) {
          const percentage = ((index + 1) / 5) * 100;
          this.fillStars(percentage);
        }
      });

      star.addEventListener('mouseleave', () => {
        if (this.selectedRating === null) {
          this.fillStars(0);
        }
      });

      star.addEventListener('click', () => {
        this.selectedRating = index + 1;
        const percentage = ((index + 1) / 5) * 100;
        this.fillStars(percentage);
        this.reviewForm.patchValue({ rating: this.selectedRating });
        this.reviewForm.controls['rating'].markAsDirty();
        this.reviewForm.controls['rating'].markAsTouched();
        this.reviewForm.controls['rating'].updateValueAndValidity();
      });
    });
  }

  fillStars(percentage: number): void {
    const stars = this.starContainer.nativeElement.querySelectorAll('.fa-star');

    stars.forEach((star: HTMLElement, index: number) => {
      if (percentage >= ((index + 1) / 5) * 100) {
        star.style.color = '#DFCB1D';
      } else {
        star.style.color = '#B0B0B0';
      }
    });
  }

  getRoomComments(){
    // this._ActivatedRoute.params.subscribe((params: Params)=>{
    //   this.roomId = params['id']
    // })
    this._ClientHomeService.getAllComments(this.roomId).subscribe({
      next: (res)=>{
        this.roomComments = res.data.roomComments
      }
    })
  }

  openDeleteDialog(commentId: string): void {

    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {
        name: 'this Comment',
        id: commentId
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteComment(commentId)
      }
  });
  }


  deleteComment(commentId: string){
    this._ClientHomeService.deleteComment(commentId).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.getRoomComments()
      }
    })
  }

  setData(commentData: any){

    window.scrollTo(0, 800)
    this.currentComment = commentData;
    console.log(this.currentComment);
    this.commentForm.get('comment')?.setValue(this.currentComment.comment)
    this.check = true
  }

  updateComment(){
    this._ClientHomeService.updataComment(this.currentComment._id, {comment: this.currentComment.comment}).subscribe({
      next: (res)=>{
        console.log(res);
        this.check= false
      }
    })
  }
}
