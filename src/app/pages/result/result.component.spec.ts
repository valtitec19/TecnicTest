import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [ 
        {
          provide: Router,
          useValue: routerSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({n: '5'})
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call goBack()', () => {
    component.goBack();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
});
