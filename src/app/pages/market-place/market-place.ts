import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-market-place',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './market-place.html',
  styleUrl: './market-place.scss'
})
export class MarketPlace {
  filters = { keyword: '', location: '' };

  vessels = [
    {
      name: 'Ocean Explorer 2000',
      type: 'Yacht',
      location: 'Miami, USA',
      description: 'Luxury yacht for private cruising with modern amenities.',
      image: 'assets/images/yacht1.jpg'
    },
    {
      name: 'Sea King Trawler',
      type: 'Fishing Boat',
      location: 'Jakarta, Indonesia',
      description: 'Reliable trawler for commercial fishing operations.',
      image: 'assets/images/fishing1.jpg'
    },
    {
      name: 'CargoMaster 500',
      type: 'Cargo Ship',
      location: 'Rotterdam, Netherlands',
      description: 'Medium-size cargo vessel suitable for regional transport.',
      image: 'assets/images/cargo1.jpg'
    }
  ];

  searchVessels() {
    console.log('Search vessels with filters:', this.filters);
    // TODO: call backend API
  }
}
