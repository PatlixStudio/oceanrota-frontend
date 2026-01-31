import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatFilter } from './boat-filter';

describe('BoatFilter', () => {
  let component: BoatFilter;
  let fixture: ComponentFixture<BoatFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
