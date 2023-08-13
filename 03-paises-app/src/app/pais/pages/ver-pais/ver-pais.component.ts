import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit() {
    // this.activateRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.buscarCodigo(id)
    //       .subscribe((pais) => {
    //         console.log(pais[0]);
    //       })
    //   })

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarCodigo(id)),
        tap(resp => console.log(resp[0]))
      )
      .subscribe(pais => {
        this.pais = pais[0]
      })
  }

}
