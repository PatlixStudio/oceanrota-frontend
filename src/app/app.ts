import { Component, inject, signal } from '@angular/core';
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal($localize `OceanRota`);

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.isAuthenticated();
  }
}
