import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MarketPlace } from './pages/market-place/market-place';
import { SeaPersonnel } from './pages/sea-personnel/sea-personnel';
import { MarineServices } from './pages/marine-services/marine-services';
import { LearningCenter } from './pages/learning-center/learning-center';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { Profile } from './pages/user/profile/profile';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'forgot-password', component: ForgotPassword },

    { path: 'marketplace', component: MarketPlace},
    { path: 'marine-services', component: MarineServices},
    { path: 'sea-personnel', component: SeaPersonnel },
    { path: 'learning-center', component: LearningCenter },

    { path: 'user/profile/:username', component: Profile },

    { path: '**', redirectTo: '' }
];
