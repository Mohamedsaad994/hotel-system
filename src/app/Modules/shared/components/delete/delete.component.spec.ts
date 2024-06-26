
import { ComponentFixture, TestBed } from '@angular/core/testing';

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { DeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
