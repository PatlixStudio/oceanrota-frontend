import { Component, signal } from '@angular/core';
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal($localize `OceanRota`);
}
