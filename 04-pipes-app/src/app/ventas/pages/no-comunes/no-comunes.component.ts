import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Andrés';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = ['Andrés', 'Emilio', 'Sofía', 'Valeria', 'Kevin', 'Angel'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Andrés',
    edad: 35,
    direccion: 'Monterrey, México'
  }

  heroes = [
    {
      nombre: 'Daredevil',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Iron-man',
      vuela: true
    },
  ]

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  })

}
