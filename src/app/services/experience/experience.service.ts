import { Injectable } from "@angular/core";
import { Experience } from "../../interfaces/experience";

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      position: 'Pasante de TI',
      company: 'Unidad Educativa de las Fuerzas Armadas Liceo Naval Cmdte. Rafael Andrade Lalama',
      duration: 'Agosto 2022 - Septiembre 2022',
      description:
        'Soporte técnico a los usuarios de la institución, realizando el mantenimiento preventivo y correctivo de los equipos de cómputo y sistemas. Análisis y mantenimiento de la red institucional para garantizar su rendimiento óptimo, además de documentar sistemáticamente todas las incidencias técnicas y las soluciones aplicadas.',
    },
  ];

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
