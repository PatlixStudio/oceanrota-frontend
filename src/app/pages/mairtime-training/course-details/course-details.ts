import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';

interface CourseModule {
  title: string;
  lessons: { title: string; durationMinutes: number }[];
}

interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  durationHours?: number;
  price?: number;
  currency?: string;
  instructor: {
    name: string;
    avatarUrl?: string;
    bio?: string;
  };
  modules: CourseModule[];
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    RouterModule,
    
  ],
  templateUrl: './course-details.html',
  styleUrls: ['./course-details.scss']
})
export class CourseDetails implements OnInit {
  private route = inject(ActivatedRoute);

  course!: Course;

  relatedCourses = [
    { id: 'c2', title: 'Marine Safety Basics', level: 'Beginner', price: 49, currency: 'USD' },
    { id: 'c3', title: 'Advanced Navigation', level: 'Advanced', price: 149, currency: 'USD' },
    { id: 'c4', title: 'Engine Maintenance 101', level: 'Intermediate', price: 79, currency: 'USD' }
  ];

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id') ?? 'c1';

    // TODO: replace with real backend fetch by courseId
    this.course = {
      id: courseId,
      title: 'Practical Seamanship',
      subtitle: 'Hands-on skills for small craft operation',
      description: `This course covers essential seamanship skills including mooring, anchoring,
        line handling, basic navigation and safety procedures. Practical exercises and checklists included.`,
      level: 'Beginner',
      durationHours: 12,
      price: 99,
      currency: 'USD',
      instructor: {
        name: 'Captain Barbossa',
        avatarUrl: './assets/images/marine_icons/pirate.png',
        bio: '20 years of commercial and leisure seamanship, certified trainer.'
      },
      modules: [
        {
          title: 'Introduction & Safety',
          lessons: [
            { title: 'Course Overview', durationMinutes: 10 },
            { title: 'Safety Equipment', durationMinutes: 25 }
          ]
        },
        {
          title: 'Boat Handling',
          lessons: [
            { title: 'Docking and Undocking', durationMinutes: 40 },
            { title: 'Mooring Techniques', durationMinutes: 30 }
          ]
        },
        {
          title: 'Navigation Basics',
          lessons: [
            { title: 'Charts & Buoys', durationMinutes: 45 },
            { title: 'Basic Piloting', durationMinutes: 50 }
          ]
        }
      ]
    };
  }

  onEnroll(): void {
    console.log('Enroll clicked for course:', this.course.id);
    // TODO: open enrollment flow / payment modal / API call
  }

  onContactInstructor(): void {
    console.log('Contact instructor:', this.course.instructor.name);
    // TODO: open messaging or contact form
  }
}
