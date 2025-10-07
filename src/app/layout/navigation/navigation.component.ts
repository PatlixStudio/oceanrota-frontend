import { Component, inject, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageSwitcher } from '../../components/language-switcher/language-switcher';
import { CurrencySwitcher } from "../../components/currency-switcher/currency-switcher";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    LanguageSwitcher,
    CurrencySwitcher
]
})
export class NavigationComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  currentUser = this.userService.getCurrentUser();

  logout() {
    this.userService.clearCurrentUser();
    localStorage.removeItem('token'); // clear token too
    this.router.navigate(['/login']);
  }
}
