import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriedFoodsComponent } from './fried-foods.component';

describe('FriedFoodsComponent', () => {
  let component: FriedFoodsComponent;
  let fixture: ComponentFixture<FriedFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriedFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriedFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
