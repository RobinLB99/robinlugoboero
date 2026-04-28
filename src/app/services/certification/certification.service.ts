import { Injectable } from '@angular/core';
import { Certificate } from '../../interfaces/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private certifications: Certificate[] = [
    {
      title: 'Administrador de bases de datos',
      intitution: 'Capacítate para el Empleo',
      dateExpetition: new Date(2026, 3, 27),
      credentialID: 'C1B9AD2D-1A1A-416A-980A-804FB6676D80',
      url: 'https://capacitateparaelempleo.org/verifica/eb86eb07-350a-4e42-aade-9ea92bc211aa/c1b9ad2d-1a1a-416a-980a-804fb6676d80',
    },
    {
      title: 'Curso profesional de Java',
      intitution: 'Código Facilito',
      dateExpetition: new Date(2024, 11, 22),
      credentialID: 'b518baea-39cb-4981-8780-61977aeef306',
      url: 'https://codigofacilito.com/certificates/b518baea-39cb-4981-8780-61977aeef306',
    },
    {
      title: 'Responsive Web Design',
      intitution: 'freeCodeCamp',
      dateExpetition: new Date(2023, 2, 23),
      credentialID: 'robinlb99-rwd',
      url: 'https://freecodecamp.org/certification/RobinLB99/responsive-web-design',
    },
  ];

  getCertifications(): Certificate[] {
    return this.certifications;
  }
}
