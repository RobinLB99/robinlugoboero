import { Component, inject } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectService } from '../../services/project/project.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  public readonly faGithub = faGithub;
  public readonly faGitlab = faGitlab;
  public readonly faExternalLink = faExternalLinkAlt;
  public readonly projects: Project[] = inject(ProjectService).getProjects();
}
