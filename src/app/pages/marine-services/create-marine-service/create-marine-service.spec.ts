import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarineService } from './create-marine-service';

describe('CreateMarineService', () => {
  let component: CreateMarineService;
  let fixture: ComponentFixture<CreateMarineService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMarineService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMarineService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
