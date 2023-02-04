import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpiecesOfHungarianComponent } from './masterpieces-of-hungarian.component';

describe('MasterpiecesOfHungarianComponent', () => {
  let component: MasterpiecesOfHungarianComponent;
  let fixture: ComponentFixture<MasterpiecesOfHungarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpiecesOfHungarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterpiecesOfHungarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
