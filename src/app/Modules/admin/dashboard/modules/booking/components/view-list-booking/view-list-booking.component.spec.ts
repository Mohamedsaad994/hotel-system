import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListBookingComponent } from './view-list-booking.component';

describe('ViewListBookingComponent', () => {
  let component: ViewListBookingComponent;
  let fixture: ComponentFixture<ViewListBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewListBookingComponent]
    });
    fixture = TestBed.createComponent(ViewListBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
