import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-currency-switcher',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './currency-switcher.html',
  styleUrl: './currency-switcher.scss'
})
export class CurrencySwitcher {
  currencies = ['USD', 'EUR', 'XRP', 'BNB', 'BTC'];

  changeCurrency(currency: string) {
    console.log("Currency Selected", currency)
  }
}
