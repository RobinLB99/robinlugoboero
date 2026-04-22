import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.html',
  styleUrls: ['./technologies.css'],
})
export class TechnologiesComponent {
  public readonly categories = [
    {
      name: 'Lenguajes',
      technologies: [
        { name: 'Java', icon: 'icons/devicon/java-plain.svg' },
        {
          name: 'JavaScript',
          icon: 'icons/devicon/javascript-plain.svg',
        },
        {
          name: 'TypeScript',
          icon: 'icons/devicon/typescript-plain.svg',
        },
      ],
    },
    {
      name: 'Backend & ORM',
      technologies: [
        {
          name: 'Spring Boot',
          icon: 'icons/spring-boot-original.svg',
        },
        {
          name: 'Hibernate',
          icon: 'icons/devicon/hibernate-plain.svg',
        },
      ],
    },
    {
      name: 'Bases de Datos',
      technologies: [
        {
          name: 'PostgreSQL',
          icon: 'icons/devicon/postgresql-plain.svg',
        },
        { name: 'MySQL', icon: 'icons/devicon/mysql-original.svg' },
        { name: 'MariaDB', icon: 'icons/devicon/mariadb-original.svg' },
        {
          name: 'SQL Server',
          icon: 'icons/devicon/microsoftsqlserver-plain.svg',
        },
        { name: 'MongoDB', icon: 'icons/devicon/mongodb-plain.svg' },
      ],
    },
    {
      name: 'Frontend & UI',
      technologies: [
        { name: 'Angular', icon: 'icons/devicon/angularjs-plain.svg' },
        { name: 'Preact', icon: 'icons/preact-plain.svg' },
        { name: 'Thymeleaf', icon: 'icons/devicon/thymeleaf-plain.svg' },
        { name: 'HTMX', icon: 'icons/devicon/htmx-original.svg' },
        { name: 'Tailwind CSS', icon: 'icons/tailwindcss-plain.svg' },
        { name: 'Bootstrap', icon: 'icons/devicon/bootstrap-plain.svg' },
      ],
    },
    {
      name: 'DevOps & Herramientas',
      technologies: [
        { name: 'Linux', icon: 'icons/devicon/linux-plain.svg' },
        { name: 'Docker', icon: 'icons/devicon/docker-plain.svg' },
        { name: 'Git', icon: 'icons/devicon/git-plain.svg' },
        { name: 'Maven', icon: 'icons/devicon/maven-plain.svg' },
        { name: 'Postman', icon: 'icons/devicon/postman-plain.svg' },
      ],
    },
  ];
}
