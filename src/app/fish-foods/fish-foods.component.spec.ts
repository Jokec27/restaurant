import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFoodsComponent } from './fish-foods.component';

describe('FishFoodsComponent', () => {
  let component: FishFoodsComponent;
  let fixture: ComponentFixture<FishFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
