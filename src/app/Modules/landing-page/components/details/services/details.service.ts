import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateRoomComment, ICreateRoomCommentResponse, ICreateRoomReviews, ICreateRoomReviewsResponse, IRoom } from '../models/details';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private _HttpClient: HttpClient) {}

  roomDetails(id: string): Observable<IRoom> {
    return this._HttpClient.get<IRoom>(`portal/rooms/${id}`)
  }

  createComment(commentData: ICreateRoomComment): Observable<ICreateRoomCommentResponse> {
    return this._HttpClient.post<ICreateRoomCommentResponse>(`portal/room-comments`, commentData)
  }

  createReview(reviewData: ICreateRoomReviews): Observable<ICreateRoomReviewsResponse> {
    return this._HttpClient.post<ICreateRoomReviewsResponse>(`portal/room-reviews`, reviewData)
  }
}
