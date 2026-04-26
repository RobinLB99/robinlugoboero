import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      name: 'Sistema de Punto de Venta',
      type: ['Aplicación', 'Web'],
      description:
        'Sistema Web para tiendas pequeñas que facilita el registro de ventas, control de caja, inventario y reportes en un solo lugar. ',
      tags: ['Spring Boot', 'Angular', 'Java', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      imageUrl: 'projects-preview/possystem.webp',
      repoUrl: 'https://github.com/RobinLB99/point-of-sale',
      state: 'En Desarrollo',
    },
    {
      name: 'API REST para Servicios Legales',
      type: ['Aplicación', 'API', 'Web'],
      description:
        'API REST para gestión de servicios legales. Facilita la interacción entre abogados y clientes.',
      tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      imageUrl: 'projects-preview/legalserviceportalapi.webp',
      repoUrl: 'https://github.com/RobinLB99/legal-service-portal-api',
    },
    {
      name: 'DenunciasEcuador',
      type: ['Aplicación', 'API', 'Web'],
      description: 'API REST para la gestión de denuncias.',
      tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      imageUrl: 'projects-preview/denunciasecuadorapi.webp',
      repoUrl: 'https://github.com/RobinLB99/denunciasecuador-api',
    },

    {
      name: 'Portafolio Personal',
      type: ['Sitio', 'Web'],
      description: '3ra versión de mi Portafolio personal.',
      tags: ['Angular', 'Tailwind CSS'],
      imageUrl: 'projects-preview/portafolio.webp',
      repoUrl: 'https://github.com/RobinLB99/robinlugoboero',
    },
    {
      name: 'Portafolio (Antiguo)',
      type: ['Sitio', 'Web'],
      description: '2da versión de mi Portafolio personal.',
      tags: ['Preact', 'Bootstrap'],
      imageUrl: 'projects-preview/portafolio-v2.webp',
      repoUrl: 'https://github.com/RobinLB99/Portafolio_v2',
      webUrl: 'https://robinlb99.github.io/Portafolio_v2',
    },
    {
      name: 'TechBit',
      type: ['Aplicación', 'MVC', 'Web'],
      description: 'Plataforma de Gestión de Tickets de Soporte Técnico.',
      tags: ['JSP', 'Java', 'JavaScript', 'Bootstrap', 'MariaDB', 'Eclipselink', 'Docker'],
      imageUrl: 'projects-preview/techbit.webp',
      repoUrl: 'https://github.com/RobinLB99/TECHBIT',
    },
    {
      name: 'Librería',
      type: ['Aplicación', 'MVC', 'Web'],
      description:
        'Software para la administración de una librería mediante la gestión de inventario, compra y venta de libros.',
      tags: ['JSP', 'Java', 'JavaScript', 'Bootstrap', 'MySQL', 'Eclipselink'],
      imageUrl: 'projects-preview/libreria.webp',
      repoUrl: 'https://github.com/RobinLB99/Tienda_de_libros',
    },
    {
      name: 'Tienda',
      type: ['Aplicación', 'Escritorio'],
      description: 'Software de escritorio para la gestión de productos de una tienda.',
      tags: ['Java', 'Java Swing', 'MySQL', 'Eclipselink'],
      imageUrl: 'projects-preview/tienda.webp',
      repoUrl: 'https://github.com/RobinLB99/tienda',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
