import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      name: 'Portal de Servicios Legales - API',
      description:
        'API Segura para el portal de servicios legales. Ofrece interacción entre el abogado y el cliente para la gestión de sus respectivos casos.',
      tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      imageUrl: 'projects-preview/legalserviceportalapi.webp',
      repoUrl: 'https://github.com/RobinLB99/legal-service-portal-api',
    },
    {
      name: 'Portafolio (Antiguo)',
      description: 'Version anterior de mi Portafolio personal.',
      tags: ['Preact'],
      imageUrl: 'projects-preview/portafolio.webp',
      repoUrl: 'https://github.com/RobinLB99/Portafolio_v2',
      webUrl: 'https://robinlb99.github.io/Portafolio_v2',
    },
    {
      name: 'TechBit',
      description: 'Plataforma de Gestión de Tickets de Soporte Técnico.',
      tags: [
        'Jakarta EE',
        'JSP',
        'Java',
        'JavaScript',
        'Bootstrap',
        'MariaDB',
        'Eclipselink',
        'Docker',
      ],
      imageUrl: 'projects-preview/techbit.webp',
      repoUrl: 'https://github.com/RobinLB99/TECHBIT',
    },
    {
      name: 'Librería',
      description:
        'Software para la administración de una librería mediante la gestión de inventario, compra y venta de libros.',
      tags: ['Jakarta EE', 'JSP', 'Java', 'JavaScript', 'Bootstrap', 'MySQL', 'Eclipselink'],
      imageUrl: 'projects-preview/libreria.webp',
      repoUrl: 'https://github.com/RobinLB99/Tienda_de_libros',
    },
    {
      name: 'Tienda',
      description: 'Software de escritorio para la gestión de productos de una tienda.',
      tags: ['Java', 'Java Swing', 'MySQL', 'Eclipselink'],
      imageUrl: 'projects-preview/tienda.webp',
      repoUrl: 'https://github.com/RobinLB99/tienda',
    },
    {
      name: 'Calculadora',
      description: 'Calculadora web para operaciones básicas.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'projects-preview/calculadora.webp',
      repoUrl: 'https://github.com/RobinLB99/Calculadora',
      webUrl: 'https://robinlb99.github.io/Calculadora/',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
