import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUnautorizedComponent } from './nav-unautorized.component';

describe('NavUnautorizedComponent', () => {
  let component: NavUnautorizedComponent;
  let fixture: ComponentFixture<NavUnautorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavUnautorizedComponent]
    });
    fixture = TestBed.createComponent(NavUnautorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
