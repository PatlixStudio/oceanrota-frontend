import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatMenuModule, MatButtonModule, MatIconModule,],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
  private translateService = inject(TranslateService);

  languages = ['en', 'tr', 'de'];
  currentLang = 'en';


  changeLang(lang: string) {
    this.currentLang = lang;
    this.translateService.use(lang); // ngx-translate service
  }
}
