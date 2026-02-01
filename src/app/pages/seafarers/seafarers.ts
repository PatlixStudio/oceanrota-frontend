import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CrewService } from '../../services/crew.service';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-seafarers',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
  ],
  templateUrl: './seafarers.html',
  styleUrl: './seafarers.scss'
})
export class Seafarers implements OnInit {
  seaPersonnel = inject(CrewService);
  seaJobsService = inject(JobsService);
  filters = { role: '', location: '' };

  ngOnInit() {
    this.seaJobsService.fetchAllJobs();
  }

  searchCandidates(jobId: number) {
    this.seaJobsService.searchPersonnel(jobId, { position: 'Captain' });
  }

  searchJobs() {
    console.log('Searching jobs with filters:', this.filters);
    // TODO: call backend API
  }
}
