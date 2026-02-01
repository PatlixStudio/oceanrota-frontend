import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'marketplace/vessel/:id', renderMode: RenderMode.Server },
  { path: 'user/profile/:username', renderMode: RenderMode.Server },
  { path: 'maritime-services/maritime-service-details/:id', renderMode: RenderMode.Server },
  { path: 'seafarers/job-details/:id', renderMode: RenderMode.Server },
  { path: 'maritime-training/course-details/:id', renderMode: RenderMode.Server },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
