import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha_actual',
  template: `
    <p>{{ sexo | i18nSelect: encabezamiento }} {{ nombre }}</p>
  `,
  styleUrls: ['./fecha_actual.component.css']
})

export class Fecha_ActualComponent {
  nombre: string = 'Carlos';
  sexo: string = 'hombre';
  encabezamiento: any = { 'hombre': 'Estimado', 'mujer': 'Estimada' };
}
