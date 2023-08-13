import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { PaisesService } from '../../services/paises.service'
import { PaisSmall } from '../../interfaces/paises.interface'
import { switchMap, tap } from 'rxjs'

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  })

  regiones: string[] = []
  paises: PaisSmall[] = []
  // fronteras: string[] = []
  fronteras: PaisSmall[] = []

  loading: boolean = false

  constructor(private fb: FormBuilder, private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones

    // When region changes
    // this.miFormulario.get('region')?.valueChanges.subscribe((region) => {
    //   this.paisesService.getPaisesPorRegion(region).subscribe((paises) => {
    //     this.paises = paises
    //   })
    // })
    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.loading = true
          this.miFormulario.get('pais')?.reset('')
          this.miFormulario.get('frontera')?.disable()
        }),
        switchMap((region) => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe((paises) => {
        this.loading = false
        this.paises = paises
      })

    // When country changes
    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe(
        tap(() => {
          this.loading = true
          this.fronteras = []
          this.miFormulario.get('frontera')?.reset('')
          this.miFormulario.get('frontera')?.enable()
        }),
        switchMap((codigo) => this.paisesService.getPaisPorCodigo(codigo)),
        switchMap((pais) =>
          this.paisesService.getPaisesPorCodigos(pais?.[0].borders || [])
        )
      )
      .subscribe((paises) => {
        this.fronteras = paises
        this.loading = false
      })
  }

  guardar() {
    console.log(this.miFormulario.value)
  }
}
