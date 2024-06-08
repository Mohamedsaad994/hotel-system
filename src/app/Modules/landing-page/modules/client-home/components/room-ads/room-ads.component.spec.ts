import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdsComponent } from './room-ads.component';

describe('RoomAdsComponent', () => {
  let component: RoomAdsComponent;
  let fixture: ComponentFixture<RoomAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomAdsComponent]
    });
    fixture = TestBed.createComponent(RoomAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
