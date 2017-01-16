/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SadotComponent } from './sadot.component';

describe('SadotComponent', () => {
  let component: SadotComponent;
  let fixture: ComponentFixture<SadotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
