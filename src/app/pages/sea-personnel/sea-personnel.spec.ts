import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaPersonnel } from './sea-personnel';

describe('SeaPersonnel', () => {
  let component: SeaPersonnel;
  let fixture: ComponentFixture<SeaPersonnel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeaPersonnel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaPersonnel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
