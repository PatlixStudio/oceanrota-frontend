import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mairtime-training',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './maritime-training.html',
  styleUrl: './maritime-training.scss'
})
export class MaritimeTraining {
  filters = { keyword: '', level: '' };

  courses = [
    {
      id: '1',
      title: 'Navigation Basics',
      category: 'Navigation',
      duration: '4 weeks',
      description: 'Learn the fundamentals of maritime navigation and chart reading.'
    },
    {
      id: '2',
      title: 'Maritime Safety & Survival',
      category: 'Safety',
      duration: '6 weeks',
      description: 'Essential safety procedures and survival techniques for sea personnel.'
    },
    {
      id: '3',
      title: 'Marine Engine Operations',
      category: 'Engineering',
      duration: '8 weeks',
      description: 'Hands-on course covering marine engine operation and maintenance.'
    }
  ];

  searchCourses() {
    console.log('Searching courses with filters:', this.filters);
    // TODO: connect with backend API
  }
}
