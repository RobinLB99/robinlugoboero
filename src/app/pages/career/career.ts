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
  private experienceService = inject(ExperienceService);
  private educationService = inject(EducationService);
  private certificationService = inject(CertificationService);

  public experiences: Experience[] = this.experienceService.getExperiences();
  public educations: Education[] = this.educationService.getEducation();
  public certifications: Certificate[] = this.certificationService.getCertifications();

  private monthNames: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  getMonthName(monthNumber: number): string {
    return this.monthNames[monthNumber];
  }
}
