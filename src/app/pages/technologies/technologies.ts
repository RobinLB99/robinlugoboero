import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-technologies",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./technologies.html",
  styleUrls: ["./technologies.css"],
})
export class TechnologiesComponent {
  public readonly categories = [
    {
      name: "Lenguajes de Programación",
      technologies: [
        { name: "Java", icon: "devicon-java-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "HTML", icon: "devicon-html5-plain" },
        { name: "CSS", icon: "devicon-css3-plain" },
      ],
    },
    {
      name: "Frameworks / Librerías Backend",
      technologies: [
        { name: "Spring Boot", icon: "devicon-spring-plain" },
        { name: "Spring Framework", icon: "devicon-spring-plain" },
        { name: "JPA/Hibernate", icon: "devicon-hibernate-plain" },
        { name: "Maven", icon: "devicon-maven-plain" },
      ],
    },
    {
      name: "Frameworks / Librerías Frontend",
      technologies: [
        { name: "Angular", icon: "devicon-angularjs-plain" },
        { name: "React", icon: "devicon-react-plain" },
        { name: "Thymeleaf", icon: "devicon-thymeleaf-plain" },
        { name: "HTMX", icon: "devicon-htmx-plain" },
      ],
    },
    {
      name: "Herramientas / DevOps",
      technologies: [
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Linux", icon: "devicon-linux-plain" },
        { name: "Postman", icon: "devicon-postman-plain" },
      ],
    },
    {
      name: "Bases de Datos",
      technologies: [
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "MariaDB", icon: "devicon-mariadb-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
      ],
    },
  ];
}
