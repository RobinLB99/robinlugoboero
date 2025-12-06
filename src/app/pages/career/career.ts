import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience/experience.service';
import { EducationService } from '../../services/education/education.service';
import { Education } from '../../interfaces/education';
import { Experience } from '../../interfaces/experience';
import { CertificationService } from '../../services/certification/certification.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class CareerComponent {
  public experiences: Experience[] = [];
  public educations: Education[] = [];
  public certifications: Certificate[];

  private experienceService = inject(ExperienceService);
  private educationService = inject(EducationService);
  private certificationService = inject(CertificationService);

  private monthNames: string[] = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  constructor() {
    this.experiences = this.experienceService.getExperiences();
    this.educations = this.educationService.getEducation();
    this.certifications = this.certificationService.getCertifications();
  }

  getMonthName(monthNumber: number): string {
    return this.monthNames[monthNumber];
  }
}
