import { Component } from '@angular/core';

@Component ({
  selector: 'app-fecha_actual',
  templateUrl: './fecha_actual.component.html',
  styleUrls: ['./fecha_actual.component.css']
})

export class Fecha_ActualComponent {
  hoy = new Date();
}
