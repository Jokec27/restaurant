import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoultryDishesComponent } from './poultry-dishes.component';

describe('PoultryDishesComponent', () => {
  let component: PoultryDishesComponent;
  let fixture: ComponentFixture<PoultryDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoultryDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoultryDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
