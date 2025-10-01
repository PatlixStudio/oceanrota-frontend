import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MatCardModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);

  user?: User;

  ngOnInit() {
     this.user = this.userService.getCurrentUser() ?? undefined;
    // if (username) {
    //   this.userService.getByUsername(username).subscribe({
    //     next: (data) => (this.user = data),
    //     error: (err) => console.error(err),
    //   });
    // } else {
    //   // If no username in route, get the logged-in user
    //   this.userService.getMe().subscribe({
    //     next: (data) => (this.user = data),
    //     error: (err) => console.error(err),
    //   });
    // }
  }
}

