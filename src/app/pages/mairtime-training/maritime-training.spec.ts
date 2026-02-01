import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimeTraining } from './maritime-training';

describe('LearningCenter', () => {
  let component: MaritimeTraining;
  let fixture: ComponentFixture<MaritimeTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritimeTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritimeTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
