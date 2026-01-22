import { Component, inject,  } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Footer } from '../footer/footer';

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
    CurrencySwitcher,
    Footer
]
})
export class NavigationComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  currentUser = this.userService.getCurrentUser();

  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  logout() {
    this.userService.clearCurrentUser();
    localStorage.removeItem('token'); // clear token too
    this.router.navigate(['/login']);
  }
}
