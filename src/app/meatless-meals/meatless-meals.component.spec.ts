import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatlessMealsComponent } from './meatless-meals.component';

describe('MeatlessMealsComponent', () => {
  let component: MeatlessMealsComponent;
  let fixture: ComponentFixture<MeatlessMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatlessMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatlessMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
