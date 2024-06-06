import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAuthorizedComponent } from './nav-authorized.component';

describe('NavAuthorizedComponent', () => {
  let component: NavAuthorizedComponent;
  let fixture: ComponentFixture<NavAuthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavAuthorizedComponent]
    });
    fixture = TestBed.createComponent(NavAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
