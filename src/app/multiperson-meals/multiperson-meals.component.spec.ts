import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipersonMealsComponent } from './multiperson-meals.component';

describe('MultipersonMealsComponent', () => {
  let component: MultipersonMealsComponent;
  let fixture: ComponentFixture<MultipersonMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipersonMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipersonMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
