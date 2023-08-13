import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Poto',
    precio: 10,
    existencia: 10
  }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.invalid && this.miFormulario?.form.controls['precio']?.touched;
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario);

    this.miFormulario.resetForm({
      producto: 'Poto',
      precio: 0,
      existencias: 0
    });
  }

}
