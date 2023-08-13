import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  mensaje: string = 'Pepe'
  color: string = 'text-red-500'

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  tienerError(campo: string) {
    return !this.miFormulario.get(campo)?.valid || false
  }

  cambiarMensaje() {
    this.mensaje = 'Papa'
  }

  cambiarColor() {
    this.color = 'text-cyan-500'
  }
}
