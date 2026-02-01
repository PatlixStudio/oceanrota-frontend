import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMaritimeService } from './request-maritime-service';

describe('RequestMarineService', () => {
  let component: RequestMaritimeService;
  let fixture: ComponentFixture<RequestMaritimeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestMaritimeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestMaritimeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
