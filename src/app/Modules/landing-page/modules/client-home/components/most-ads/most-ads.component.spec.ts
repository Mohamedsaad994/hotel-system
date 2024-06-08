import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAdsComponent } from './most-ads.component';

describe('MostAdsComponent', () => {
  let component: MostAdsComponent;
  let fixture: ComponentFixture<MostAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostAdsComponent]
    });
    fixture = TestBed.createComponent(MostAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
