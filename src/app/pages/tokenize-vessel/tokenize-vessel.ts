import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tokenize-vessel',
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './tokenize-vessel.html',
  styleUrl: './tokenize-vessel.scss'
})
export class TokenizeVessel {

}
