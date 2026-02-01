import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-job',
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
  templateUrl: './create-job.html',
  styleUrls: ['./create-job.scss']
})
export class CreateJob {

  private fb = inject(FormBuilder);

  createJobForm: FormGroup = this.fb.group({
    jobTitle: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    requirements: ['', Validators.required],
    location: ['', Validators.required],
    salary: ['', [Validators.required, Validators.min(1)]],
    currency: ['USD', Validators.required],
    durationMonths: ['', [Validators.required, Validators.min(1)]]
  });

  submitted = false;

  currencyOptions = ['USD', 'EUR', 'GBP'];

  onSubmit(): void {
    this.submitted = true;
    if (this.createJobForm.invalid) return;

    console.log('Sea Job Submitted:', this.createJobForm.value);
    // TODO: send form data to backend API
  }
}
