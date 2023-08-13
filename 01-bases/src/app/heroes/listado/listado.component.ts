import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spider-man', 'Daredevil', 'Moon knight', 'Thor']
  heroeBorrado: string = ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || ''
  }

}
