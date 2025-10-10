import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MarketPlace } from './pages/market-place/market-place';
import { SeaPersonnel } from './pages/sea-personnel/sea-personnel';
import { MarineServices } from './pages/marine-services/marine-services';
import { LearningCenter } from './pages/learning-center/learning-center';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { UserProfile } from './pages/user/profile/profile';
import { BoatDetails } from './pages/market-place/boat-details/boat-details';
import { AddListing } from './pages/market-place/add-listing/add-listing';
import { CreateMarineService } from './pages/marine-services/create-marine-service/create-marine-service';
import { RequestMarineService } from './pages/marine-services/request-marine-service/request-marine-service';
import { MarineServiceDetails } from './pages/marine-services/marine-service-details/marine-service-details';
import { JobDetails } from './pages/sea-personnel/job-details/job-details';
import { CreateSeaJob } from './pages/sea-personnel/create-sea-job/create-sea-job';
import { CourseDetails } from './pages/learning-center/course-details/course-details';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'forgot-password', component: ForgotPassword },

    {
        path: 'marketplace',
        children: [
            { path: '', component: MarketPlace },
            { path: 'boats/:id', component: BoatDetails },
            { path: 'add-listing', component: AddListing }
        ]
    },
    {
        path: 'marine-services', children: [
            { path: '', component: MarineServices },
            { path: 'marine-service-details/:id', component: MarineServiceDetails },
            { path: 'create-marine-service', component: CreateMarineService },
            { path: 'request-marine-service', component: RequestMarineService }
        ]
    },
    {
        path: 'sea-personnel', children: [
            { path: '', component: SeaPersonnel },
            { path: 'sea-job-details/:id', component: JobDetails },
        ]
    },
    {
        path: 'learning-center', children: [
            { path: '', component: LearningCenter },
            { path: 'course-details/:id', component: CourseDetails },
        ]
    },

    { path: 'user/profile/:username', component: UserProfile },

    { path: '**', redirectTo: '' }
];
