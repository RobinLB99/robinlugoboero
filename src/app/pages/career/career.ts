import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../services/experience';
import { Education } from '../../services/education';
import { IEducation } from '../../interfaces/education';
import { IExperience } from '../../interfaces/experience';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class CareerComponent {
  public experiences: IExperience[] = [];
  public educations: IEducation[] = [];

  private experienceService = inject(Experience);
  private educationService = inject(Education);

  constructor() {
    this.experiences = this.experienceService.getExperiences();
    this.educations = this.educationService.getEducation();
  }
}
