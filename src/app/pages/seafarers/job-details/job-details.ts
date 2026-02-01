import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Job {
  id: string;
  jobTitle: string;
  description: string;
  requirements: string[];
  location: string;
  salary: number;
  currency: string;
  durationMonths: number;
  recruiter: {
    name: string;
    avatarUrl?: string;
  };
}

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './job-details.html',
  styleUrls: ['./job-details.scss']
})
export class JobDetails implements OnInit {

  private route = inject(ActivatedRoute);
  job!: Job;


  relatedJobs = [
    {
      id: '2',
      jobTitle: 'First Mate',
      location: 'Port of Miami, USA',
      salary: 4000,
      currency: 'USD',
      durationMonths: 12
    },
    {
      id: '3',
      jobTitle: 'Deckhand',
      location: 'Port of Miami, USA',
      salary: 2800,
      currency: 'USD',
      durationMonths: 6
    },
    {
      id: '4',
      jobTitle: 'Engineer',
      location: 'Port of Miami, USA',
      salary: 5000,
      currency: 'USD',
      durationMonths: 12
    }
  ];

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');

    // TODO: fetch job details from backend by jobId
    this.job = {
      id: jobId || '1',
      jobTitle: 'Deckhand',
      description: 'Assist in deck operations, maintenance, and general duties aboard the vessel.',
      requirements: [
        'Valid seafarer certificate',
        'Experience in deck operations',
        'Ability to work in shifts',
        'Good physical fitness'
      ],
      location: 'Port of Miami, USA',
      salary: 3000,
      currency: 'USD',
      durationMonths: 6,
      recruiter: {
        name: 'Captain Smith',
        avatarUrl: './assets/images/marine_icons/sailor.png'
      }
    };
  }

  onContactRecruiter(): void {
    console.log('Contact recruiter:', this.job.recruiter.name);
    // TODO: open chat or email
  }
}
