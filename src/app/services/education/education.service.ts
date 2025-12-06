import { Injectable } from '@angular/core';
import { Education } from '../../interfaces/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educations: Education[] = [
    {
      institution: 'Universidad ECOTEC',
      degree: 'Ingeniería en Sistemas Inteligentes',
      duration: '2024 - Actualidad',
      description:
        'Desarrollo de soluciones tecnológicas mediante el uso de diversos lenguajes de programación y algoritmos, creación de software adaptable y de alto rendimiento que impulse la competitividad organizacional, y diseño redes seguras que aseguren un intercambio confiable de información.',
    },
    {
      institution: 'Tecnológico Universitario Argos',
      degree: 'Tecnología Superior en Redes y Telecomunicaciones',
      duration: '2021 - 2023',
      description:
        'Selección e implementación de sistemas de comunicación, instalación telefonía y voz IP, diseño de redes de fibra óptica e inalámbricas, mantenimiento hardware en entornos individuales, evaluación de proyectos de conectividad y análisis del rendimiento de redes LAN mediante equipos de certificación.',
    },
  ];

  getEducation(): Education[] {
    return this.educations;
  }
}
