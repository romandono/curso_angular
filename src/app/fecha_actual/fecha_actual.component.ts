import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha_actual',
  template: `
    <p>La cotización actual del dolar es de {{ dolareuro | euro }}</p>
  `,
  styleUrls: ['./fecha_actual.component.css']
})

export class Fecha_ActualComponent {
  dolareuro: number = 0.88;
}
