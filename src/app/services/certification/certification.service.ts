import { Injectable } from '@angular/core';
import { Certificate } from '../../interfaces/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private certifications: Certificate[] = [
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
