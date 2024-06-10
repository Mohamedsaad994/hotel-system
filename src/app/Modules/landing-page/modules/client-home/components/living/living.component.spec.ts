import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingComponent } from './living.component';

describe('LivingComponent', () => {
  let component: LivingComponent;
  let fixture: ComponentFixture<LivingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivingComponent]
    });
    fixture = TestBed.createComponent(LivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
