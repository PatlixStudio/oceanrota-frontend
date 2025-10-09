import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeaJob } from './create-sea-job';

describe('CreateSeaJob', () => {
  let component: CreateSeaJob;
  let fixture: ComponentFixture<CreateSeaJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSeaJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSeaJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
