import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanWave } from './ocean-wave';

describe('OceanWave', () => {
  let component: OceanWave;
  let fixture: ComponentFixture<OceanWave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanWave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanWave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
