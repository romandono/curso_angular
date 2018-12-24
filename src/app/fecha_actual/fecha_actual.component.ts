import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha_actual',
  template: `
    <p>Madrid, {{ hoy | date: 'd/M/y H:m'}}</p>
    <app-copyright></app-copyright>
  `,
  styleUrls: ['./fecha_actual.component.css']
})

export class Fecha_ActualComponent {
  hoy = new Date();
}
