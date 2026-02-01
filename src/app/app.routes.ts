import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MarketPlace } from './pages/marketplace/marketplace';
import { Seafarers } from './pages/seafarers/seafarers';
import { MaritimeServices } from './pages/maritime-services/maritime-services';
import { MaritimeTraining } from './pages/mairtime-training/maritime-training';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { UserProfile } from './pages/user/profile/profile';
import { VesselDetails } from './pages/marketplace/vessel-details/vessel-details';
import { AddListing } from './pages/marketplace/add-listing/add-listing';
import { CreateMaritimeService } from './pages/maritime-services/create-maritime-service/create-maritime-service';
import { RequestMaritimeService } from './pages/maritime-services/request-maritime-service/request-maritime-service';
import { MaritimeServiceDetails } from './pages/maritime-services/maritime-service-details/maritime-service-details';
import { JobDetails } from './pages/seafarers/job-details/job-details';
import { CreateJob } from './pages/seafarers/create-job/create-job';
import { CourseDetails } from './pages/mairtime-training/course-details/course-details';
import { TokenizeVessel } from './pages/tokenize-vessel/tokenize-vessel';
import { MarineShop } from './pages/marine-shop/marine-shop';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'forgot-password', component: ForgotPassword },

    {
        path: 'marketplace',
        children: [
            { path: '', component: MarketPlace },
            { path: 'vessel/:id', component: VesselDetails },
            { path: 'add-listing', component: AddListing }
        ]
    },
    {
        path: 'maritime-services', children: [
            { path: '', component: MaritimeServices },
            { path: 'maritime-service-details/:id', component: MaritimeServiceDetails },
            { path: 'create-marine-service', component: CreateMaritimeService },
            { path: 'request-marine-service', component: RequestMaritimeService }
        ]
    },
    {
        path: 'seafarers', children: [
            { path: '', component: Seafarers },
            { path: 'create-sea-job', component: CreateJob },
            { path: 'job-details/:id', component: JobDetails },
        ]
    },
    {
        path: 'maritime-training', children: [
            { path: '', component: MaritimeTraining },
            { path: 'course-details/:id', component: CourseDetails },
        ]
    },
    {
        path: 'marine-shop', children: [
            { path: '', component: MarineShop },
        ]
    },
    {
        path: 'tokenize', children: [
            { path: '', component: TokenizeVessel }
        ]
    },

    { path: 'user/profile/:username', component: UserProfile },

    { path: '**', redirectTo: '' }
];
