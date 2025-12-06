import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';
import { TechnologiesComponent } from './pages/technologies/technologies';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Inicio | Robin Lugo B.',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'About | Robin Lugo B.',
    component: AboutComponent,
  },
  {
    path: 'technologies',
    title: 'Technologies | Robin Lugo B.',
    component: TechnologiesComponent,
  },
  {
    path: 'projects',
    title: 'Projects | Robin Lugo B.',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    title: 'Contact | Robin Lugo B.',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
