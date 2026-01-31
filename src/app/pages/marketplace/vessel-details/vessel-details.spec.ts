import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDetails } from './vessel-details';

describe('ListingDetails', () => {
  let component: VesselDetails;
  let fixture: ComponentFixture<VesselDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
