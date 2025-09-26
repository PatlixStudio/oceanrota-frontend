import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MarketPlace } from './pages/market-place/market-place';
import { SeaPersonnel } from './pages/sea-personnel/sea-personnel';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'marketplace', component: MarketPlace},
    { path: 'sea-personnel', component: SeaPersonnel },
    // { path: 'login', component: LoginComponent },
    // { path: 'boats', component: BoatsComponent },
    { path: '**', redirectTo: '' }
];
