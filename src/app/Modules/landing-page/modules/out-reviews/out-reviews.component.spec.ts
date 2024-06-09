import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutReviewsComponent } from './out-reviews.component';

describe('OutReviewsComponent', () => {
  let component: OutReviewsComponent;
  let fixture: ComponentFixture<OutReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutReviewsComponent]
    });
    fixture = TestBed.createComponent(OutReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
