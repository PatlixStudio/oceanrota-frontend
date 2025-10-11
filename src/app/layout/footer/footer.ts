import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { OceanWave } from "../../components/ocean-wave/ocean-wave";

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, RouterModule, OceanWave],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
