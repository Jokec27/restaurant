import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholfreeDrinksComponent } from './alcoholfree-drinks.component';

describe('AlcoholfreeDrinksComponent', () => {
  let component: AlcoholfreeDrinksComponent;
  let fixture: ComponentFixture<AlcoholfreeDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholfreeDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholfreeDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
