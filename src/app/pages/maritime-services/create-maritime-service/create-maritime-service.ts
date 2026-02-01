import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-maritime-service',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './create-maritime-service.html',
  styleUrls: ['./create-maritime-service.scss']
})
export class CreateMaritimeService {

  private formBuilder = inject(FormBuilder);

  marineServiceForm: FormGroup = this.formBuilder.group({
    serviceName: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    category: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(1)]],
    currency: ['USD', Validators.required],
    durationHours: ['']
  });

  submitted = false;

  // Dropdown options
  categoryOptions = [
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'repair', label: 'Repair' },
    { value: 'inspection', label: 'Inspection' },
    { value: 'cleaning', label: 'Cleaning' }
  ];

  currencyOptions = ['USD', 'EUR', 'GBP'];

  onSubmit(): void {
    this.submitted = true;

    if (this.marineServiceForm.invalid) {
      return;
    }

    console.log('Marine Service Submitted:', this.marineServiceForm.value);
    // TODO: integrate with backend API
  }
}
