import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha_actual',
  template: `
    <p>El resultado es {{ resultado | number: '3.2-2' }}</p>
  `,
  styleUrls: ['./fecha_actual.component.css']
})

export class Fecha_ActualComponent {
  resultado: number = 1.148;
}
