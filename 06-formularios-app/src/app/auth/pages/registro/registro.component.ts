import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ValidatorsService } from '../../../shared/validators/validators.service'
import { EmailValidatorService } from '../../../shared/validators/email-validator.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vS.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vS.emailPattern)],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, this.vS.noPuedeSerPoto]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vS.camposIguales('password', 'password2')],
    }
  )

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors

    if (errors?.['required']) {
      return 'El correo es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El valor no corresponde a un correo'
    } else if (errors?.['emailTomado']) {
      return 'El correo ya fue tomado'
    }

    return ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private vS: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andres Mata',
      email: 'test1@test.com',
    })
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    )
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched()
  }
}
