import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-learning-center',
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, FormsModule, MatSelectModule, MatButtonModule],
  templateUrl: './learning-center.html',
  styleUrl: './learning-center.scss'
})
export class LearningCenter {
  filters = { keyword: '', level: '' };

  courses = [
    {
      title: 'Navigation Basics',
      category: 'Navigation',
      duration: '4 weeks',
      description: 'Learn the fundamentals of maritime navigation and chart reading.'
    },
    {
      title: 'Maritime Safety & Survival',
      category: 'Safety',
      duration: '6 weeks',
      description: 'Essential safety procedures and survival techniques for sea personnel.'
    },
    {
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
