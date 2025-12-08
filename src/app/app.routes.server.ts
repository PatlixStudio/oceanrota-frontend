import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'marketplace/boats/:id', renderMode: RenderMode.Server },
  { path: 'user/profile/:username', renderMode: RenderMode.Server },
  { path: 'marine-services/marine-service-details/:id', renderMode: RenderMode.Server },
  { path: 'sea-personnel/sea-job-details/:id', renderMode: RenderMode.Server },
  { path: 'learning-center/course-details/:id', renderMode: RenderMode.Server },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
