import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { PaisSmall, Pais } from '../interfaces/paises.interface'
import { combineLatest, Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private baseUrl: string = 'https://restcountries.com/v3.1'

  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ]

  get regiones() {
    return [...this._regiones]
  }

  constructor(private http: HttpClient) {}

  getPaisesPorRegion(region: string) {
    const url = `${this.baseUrl}/region/${region}?fields=name,cca3`
    return this.http.get<PaisSmall[]>(url)
  }

  getPaisPorCodigo(codigo: string): Observable<Pais[] | null> {
    if (!codigo) {
      return of(null)
    }

    const url = `${this.baseUrl}/alpha/${codigo}`
    return this.http.get<Pais[]>(url)
  }

  getPaisPorSmall(codigo: string): Observable<PaisSmall> {
    const url = `${this.baseUrl}/alpha/${codigo}?fields=name,cca3`
    return this.http.get<PaisSmall>(url)
  }

  getPaisesPorCodigos(borders: string[]) {
    if (!borders) {
      return of([])
    }

    const peticiones: Observable<PaisSmall>[] = []

    borders.forEach((codigo) => {
      const peticion = this.getPaisPorSmall(codigo)
      peticiones.push(peticion)
    })

    return combineLatest(peticiones)
  }
}
