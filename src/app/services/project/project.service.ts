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
      name: 'Servicios Legales',
      type: ['API Rest'],
      description:
        'API REST para gestión de servicios legales. Facilita la interacción entre abogados y clientes.',
      tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      imageUrl: 'projects-preview/legalserviceportalapi.webp',
      repoUrl: 'https://github.com/RobinLB99/legal-service-portal-api',
    },
    {
      name: 'DenunciasEcuador',
      type: ['API Rest'],
      description: 'API Rest para la Gestión de denuncias.',
      tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      imageUrl: 'projects-preview/denunciasecuadorapi.webp',
      repoUrl: 'https://github.com/RobinLB99/denunciasecuador-api',
    },

    {
      name: 'Portafolio v3',
      type: ['Sitio', 'Web'],
      description: '3ra y actual versión de mi Portafolio personal.',
      tags: ['Angular', 'CSS Vanilla'],
      imageUrl: 'projects-preview/portafolio.webp',
      repoUrl: 'https://github.com/RobinLB99/robinlugoboero',
    },
    {
      name: 'Portafolio v2',
      type: ['Sitio', 'Web'],
      description: '2da versión de mi Portafolio personal.',
      tags: ['Preact', 'Bootstrap'],
      imageUrl: 'projects-preview/portafolio-v2.webp',
      repoUrl: 'https://github.com/RobinLB99/Portafolio_v2',
      webUrl: 'https://robinlb99.github.io/Portafolio_v2',
    },
    {
      name: 'TechBit',
      type: ['Aplicación', 'Web'],
      description: 'Plataforma MVC para la Gestión de Tickets de Soporte Técnico.',
      tags: ['JSP', 'Java', 'JavaScript', 'Bootstrap', 'MariaDB', 'Docker'],
      imageUrl: 'projects-preview/techbit.webp',
      repoUrl: 'https://github.com/RobinLB99/TECHBIT',
    },
    {
      name: 'Librería',
      type: ['Aplicación', 'Web'],
      description:
        'Plataforma MVC para la administración de una librería mediante la gestión de inventario, compra y venta de libros.',
      tags: ['JSP', 'Java', 'JavaScript', 'Bootstrap', 'MySQL'],
      imageUrl: 'projects-preview/libreria.webp',
      repoUrl: 'https://github.com/RobinLB99/Tienda_de_libros',
    },
    {
      name: 'Tienda',
      type: ['Aplicación', 'Escritorio'],
      description: 'Software de escritorio para la gestión de productos de una tienda.',
      tags: ['Java', 'Java Swing', 'MySQL'],
      imageUrl: 'projects-preview/tienda.webp',
      repoUrl: 'https://github.com/RobinLB99/tienda',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
