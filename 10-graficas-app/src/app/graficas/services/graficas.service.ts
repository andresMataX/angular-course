import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsuariosRedesDonaData() {
    return this.getUsuariosRedesSociales().pipe(
      map((data) => {
        const labels = Object.keys(data)
        const values: number[] = Object.values(data)
        return { labels, values }
      })
    )
  }
}
