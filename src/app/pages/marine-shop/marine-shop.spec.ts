import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineShop } from './marine-shop';

describe('MarineShop', () => {
  let component: MarineShop;
  let fixture: ComponentFixture<MarineShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineShop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineShop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
