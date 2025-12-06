import { Injectable } from "@angular/core";
import { IExperience } from "../interfaces/experience";

@Injectable({
  providedIn: 'root',
})
export class Experience {
  private experiences: IExperience[] = [
    {
      position: 'Pasante de TI',
      company: 'Unidad Educativa de las Fuerzas Armadas Liceo Naval Cmdte. Rafael Andrade Lalama',
      duration: 'Agosto 2022 - Septiembre 2022',
      description:
        'Soporte a usuarios, mantenimiento de sistemas, documentación de incidencias. Mantenimiento preventivo y correctivo de los equipos de cómputo. Asistencia efectiva a los usuarios de la institución.',
    },
  ];

  getExperiences(): IExperience[] {
    return this.experiences;
  }
}
