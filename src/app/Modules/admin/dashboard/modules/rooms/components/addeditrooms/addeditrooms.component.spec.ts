import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditroomsComponent } from './addeditrooms.component';

describe('AddeditroomsComponent', () => {
  let component: AddeditroomsComponent;
  let fixture: ComponentFixture<AddeditroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditroomsComponent]
    });
    fixture = TestBed.createComponent(AddeditroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
