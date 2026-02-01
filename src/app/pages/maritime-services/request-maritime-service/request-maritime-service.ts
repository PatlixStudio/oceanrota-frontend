import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-request-maritime-service',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './request-maritime-service.html',
  styleUrls: ['./request-maritime-service.scss']
})
export class RequestMaritimeService {
  private formBuilder = inject(FormBuilder);

  requestServiceForm: FormGroup = this.formBuilder.group({
    requestedService: ['', Validators.required],
    preferredDate: ['', Validators.required],
    location: ['', Validators.required],
    description: [''],
    budget: ['', [Validators.required, Validators.min(1)]],
    contactEmail: ['', [Validators.required, Validators.email]]
  });

  submitted = false;

  requestedServiceOptions = [
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'repair', label: 'Repair' },
    { value: 'inspection', label: 'Inspection' },
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'other', label: 'Other' }
  ];

  onSubmit(): void {
    this.submitted = true;

    if (this.requestServiceForm.invalid) return;

    console.log('Marine Service Request Submitted:', this.requestServiceForm.value);
    // TODO: send request to backend API
  }
}
