import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentUserComponent } from './view-current-user.component';

describe('ViewCurrentUserComponent', () => {
  let component: ViewCurrentUserComponent;
  let fixture: ComponentFixture<ViewCurrentUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCurrentUserComponent]
    });
    fixture = TestBed.createComponent(ViewCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
