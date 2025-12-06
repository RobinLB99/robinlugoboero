import { Component, inject } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  public readonly projects: Project[] = inject(ProjectService).getProjects();
}
