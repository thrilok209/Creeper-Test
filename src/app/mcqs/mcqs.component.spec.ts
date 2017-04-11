/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MCQsComponent } from './mcqs.component';

describe('MCQsComponent', () => {
  let component: MCQsComponent;
  let fixture: ComponentFixture<MCQsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
