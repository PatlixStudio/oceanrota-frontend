import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sea-personnel',
  imports: [CommonModule, MatFormFieldModule, MatCardModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './sea-personnel.html',
  styleUrl: './sea-personnel.scss'
})
export class SeaPersonnel {
  filters = { role: '', location: '' };

  jobs = [
    {
      title: 'Captain',
      vessel: 'Ocean Explorer 2000',
      location: 'Miami, USA',
      description: 'Experienced captain needed for luxury yacht operations.'
    },
    {
      title: 'Deckhand',
      vessel: 'Sea King Trawler',
      location: 'Jakarta, Indonesia',
      description: 'Assist with fishing operations and vessel maintenance.'
    },
    {
      title: 'Marine Engineer',
      vessel: 'CargoMaster 500',
      location: 'Rotterdam, Netherlands',
      description: 'Responsible for engine maintenance and technical support.'
    }
  ];

  searchJobs() {
    console.log('Searching jobs with filters:', this.filters);
    // TODO: call backend API
  }
}
