import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenizeVessel } from './tokenize-vessel';

describe('TokenizeVessel', () => {
  let component: TokenizeVessel;
  let fixture: ComponentFixture<TokenizeVessel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenizeVessel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenizeVessel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
