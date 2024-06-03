import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditadsComponent } from './addeditads.component';

describe('AddeditadsComponent', () => {
  let component: AddeditadsComponent;
  let fixture: ComponentFixture<AddeditadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditadsComponent]
    });
    fixture = TestBed.createComponent(AddeditadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
