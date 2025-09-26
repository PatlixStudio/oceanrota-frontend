import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MarketPlace } from './pages/market-place/market-place';
import { SeaPersonnel } from './pages/sea-personnel/sea-personnel';
import { MarineServices } from './pages/marine-services/marine-services';
import { LearningCenter } from './pages/learning-center/learning-center';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'marketplace', component: MarketPlace},
    { path: 'marine-services', component: MarineServices},
    { path: 'sea-personnel', component: SeaPersonnel },
    { path: 'learning-center', component: LearningCenter },
    // { path: 'login', component: LoginComponent },
    // { path: 'boats', component: BoatsComponent },
    { path: '**', redirectTo: '' }
];
