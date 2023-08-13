import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'andrés';
  nombreUpper: string = 'ANDRÉS';
  nombreCompleto: string = 'anDRÉS MaTA';

  fecha: Date = new Date();

}
