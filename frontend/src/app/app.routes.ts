import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LandingComponent } from './pages/landing.component';
import { AboutComponent } from './pages/about.component';
import { ProjectsComponent } from './pages/projects.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' },
];

export const appProviders = [provideHttpClient()];
