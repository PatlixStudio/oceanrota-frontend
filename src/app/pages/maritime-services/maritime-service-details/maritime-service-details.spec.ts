import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineServiceDetails } from './maritime-service-details';

describe('MarineServiceDetails', () => {
  let component: MarineServiceDetails;
  let fixture: ComponentFixture<MarineServiceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineServiceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineServiceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
