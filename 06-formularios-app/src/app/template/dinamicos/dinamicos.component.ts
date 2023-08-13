import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Andrés',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'F1 22' }
    ]
  }

  agregarJuego() {
    const nuevoFav: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFav });
    this.nuevoJuego = '';
  }

  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }

  guardar(miFormulario: NgForm) {
    console.log(miFormulario.form.controls);
  }

}
