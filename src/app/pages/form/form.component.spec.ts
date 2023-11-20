import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultComponent } from '../result/result.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [ 
        {
          provide: Router,
          useValue: routerSpy,
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call click()', () => {
    component.form.controls['number'].setValue(5);
    component.click();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home/result/5']);
  });
});
