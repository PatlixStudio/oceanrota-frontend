import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineServices } from './marine-services';

describe('MarineServices', () => {
  let component: MarineServices;
  let fixture: ComponentFixture<MarineServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
