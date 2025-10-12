import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SeaPersonnelService } from '../../services/sea-personnel.service';
import { SeaJobsService } from '../../services/sea-jobs.service';

@Component({
  selector: 'app-sea-personnel',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
  ],
  templateUrl: './sea-personnel.html',
  styleUrl: './sea-personnel.scss'
})
export class SeaPersonnel implements OnInit {
  seaPersonnel = inject(SeaPersonnelService);
  seaJobsService = inject(SeaJobsService);
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
