import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './language-switcher.html',
  styleUrls: ['./language-switcher.scss'],
})
export class LanguageSwitcher {
  languages = ['en', 'tr', 'de'];
  currentLang = 'en';

  constructor(private location: Location, private router: Router) {
    const pathLang = this.detectLangFromUrl(location.path());
    const storedLang = localStorage.getItem('preferredLang');
    this.currentLang = pathLang || storedLang || 'en';
  }

  private detectLangFromUrl(path: string): string | null {
    const match = path.match(/^\/(en|tr|de)(\/|$)/);
    return match ? match[1] : null;
  }

  changeLang(lang: string) {
    if (lang === this.currentLang) return;

    this.currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // remove current prefix like /en/, /tr/, /de/
    const path = this.location.path().replace(/^\/(en|tr|de)/, '');

    // ✅ Always prefix with the chosen language
    const newUrl = `/${lang}${path || '/'}`;

    // update <html lang="..."> for accessibility/SEO
    document.documentElement.lang = lang;

    // full reload to trigger locale
    window.location.href = newUrl;
  }
}
