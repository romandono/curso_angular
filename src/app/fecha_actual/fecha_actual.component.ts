import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha_actual',
  template: `
    <p>{{ ciudad | lowercase }}, {{ hoy | date: 'd-M-y'}} a las {{ hoy | date: 'H:m Z'}}</p>
    <app-copyright></app-copyright>
  `,
  styleUrls: ['./fecha_actual.component.css']
})

export class Fecha_ActualComponent {
  hoy = new Date();
  ciudad: string = 'Madrid';
}
