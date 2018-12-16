import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    
  },
  {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
}, 

{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
