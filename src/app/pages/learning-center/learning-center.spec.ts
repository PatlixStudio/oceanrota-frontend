import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCenter } from './learning-center';

describe('LearningCenter', () => {
  let component: LearningCenter;
  let fixture: ComponentFixture<LearningCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
