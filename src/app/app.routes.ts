import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';
import { TechnologiesComponent } from './pages/technologies/technologies';
import { CareerComponent } from './pages/career/career';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Inicio | Robin Lugo B.',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'Sobre mí | Robin Lugo B.',
    component: AboutComponent,
  },
  {
    path: 'career',
    title: 'Trayectoria | Robin Lugo B.',
    component: CareerComponent,
  },
  {
    path: 'technologies',
    title: 'Tecnologías | Robin Lugo B.',
    component: TechnologiesComponent,
  },
  {
    path: 'projects',
    title: 'Proyectos | Robin Lugo B.',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    title: 'Contacto | Robin Lugo B.',
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
