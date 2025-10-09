import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-marine-service',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './create-marine-service.html',
  styleUrl: './create-marine-service.scss'
})
export class CreateMarineService {
  private fb = inject(FormBuilder);

  marineServiceForm: FormGroup = this.fb.group({
    serviceName: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    category: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(1)]],
    currency: ['USD', Validators.required],
    durationHours: ['']
  });

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    if (this.marineServiceForm.invalid) {
      return;
    }

    console.log('Marine Service Submitted:', this.marineServiceForm.value);
    // TODO: Call backend API to save the service
  }
}
