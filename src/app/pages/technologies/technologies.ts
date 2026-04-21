import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

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
      name: 'Lenguajes de Programación',
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
        { name: 'HTML', icon: 'icons/devicon/html5-plain.svg' },
        { name: 'CSS', icon: 'icons/devicon/css3-plain.svg' },
      ],
    },
    {
      name: 'Frameworks y Librerías Backend',
      technologies: [
        {
          name: 'Spring Boot',
          icon: 'icons/spring-boot-original.svg',
        },
        // {
        //   name: 'Spring',
        //   icon: 'icons/devicon/spring-original.svg',
        // },
        {
          name: 'JPA/Hibernate',
          icon: 'icons/devicon/hibernate-plain.svg',
        },
        { name: 'Maven', icon: 'icons/devicon/maven-plain.svg' },
      ],
    },
    {
      name: 'Frameworks y Librerías Frontend',
      technologies: [
        { name: 'Angular', icon: 'icons/devicon/angularjs-plain.svg' },
        { name: 'Preact', icon: 'icons/devicon/react-original.svg' },
        { name: 'Thymeleaf', icon: 'icons/devicon/thymeleaf-plain.svg' },
        { name: 'HTMX', icon: 'icons/devicon/htmx-original.svg' },
        { name: 'Bootstrap', icon: 'icons/devicon/bootstrap-plain.svg' },
        { name: 'Tailwind CSS', icon: 'icons/tailwindcss-plain.svg' },
      ],
    },
    {
      name: 'Herramientas / DevOps',
      technologies: [
        { name: 'Docker', icon: 'icons/devicon/docker-plain.svg' },
        { name: 'Git', icon: 'icons/devicon/git-plain.svg' },
        { name: 'Linux', icon: 'icons/devicon/linux-plain.svg' },
        { name: 'Postman', icon: 'icons/devicon/postman-plain.svg' },
      ],
    },
    {
      name: 'Bases de Datos',
      technologies: [
        { name: 'MongoDB', icon: 'icons/devicon/mongodb-plain.svg' },
        { name: 'MariaDB', icon: 'icons/devicon/mariadb-original.svg' },
        { name: 'MySQL', icon: 'icons/devicon/mysql-original.svg' },
        {
          name: 'PostgreSQL',
          icon: 'icons/devicon/postgresql-plain.svg',
        },
        {
          name: 'SQL Server',
          icon: 'icons/devicon/microsoftsqlserver-plain.svg',
        },
      ],
    },
  ];
}
