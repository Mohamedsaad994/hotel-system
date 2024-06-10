import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackyardComponent } from './backyard.component';

describe('BackyardComponent', () => {
  let component: BackyardComponent;
  let fixture: ComponentFixture<BackyardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackyardComponent]
    });
    fixture = TestBed.createComponent(BackyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
