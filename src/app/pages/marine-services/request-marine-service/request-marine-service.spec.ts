import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMarineService } from './request-marine-service';

describe('RequestMarineService', () => {
  let component: RequestMarineService;
  let fixture: ComponentFixture<RequestMarineService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestMarineService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestMarineService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
