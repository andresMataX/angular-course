import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import * as mapboxgl from 'mapbox-gl'

interface Marcador {
  color: string
  marcador?: mapboxgl.Marker
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }
      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
        cursor: pointer;
      }
    `,
  ],
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef

  mapa!: mapboxgl.Map
  zoomLevel: number = 16
  center: [number, number] = [-100.31387765440506, 25.72462406101237]
  marcadores: Marcador[] = []

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    })

    this.leerLocalStorage()

    // const markerHtml: HTMLElement = document.createElement('div')
    // markerHtml.innerHTML = 'poto'

    // const marker = new mapboxgl.Marker({
    // element: markerHtml,
    // })
    //   .setLngLat(this.center)
    //   .addTo(this.mapa)
  }

  agregarMarcador() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    )

    const nuevoMarcador = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(this.center)
      .addTo(this.mapa)

    this.marcadores.push({ color, marcador: nuevoMarcador })

    this.guardarMarcadores()

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadores()
    })
  }

  irMarcador(marcador: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marcador.getLngLat(),
    })
  }

  guardarMarcadores() {
    const lngLatArr: Marcador[] = []

    this.marcadores.forEach(({ color, marcador }) => {
      const { lng, lat } = marcador!.getLngLat()

      lngLatArr.push({
        color,
        centro: [lng, lat],
      })
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
  }

  leerLocalStorage() {
    if (!localStorage.getItem('marcadores')) return

    const lngLatArr: Marcador[] = JSON.parse(
      localStorage.getItem('marcadores')!
    )

    lngLatArr.forEach((m) => {
      const nuevoMarcador = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa)

      this.marcadores.push({ marcador: nuevoMarcador, color: m.color })

      nuevoMarcador.on('dragend', () => {
        this.guardarMarcadores()
      })
    })
  }

  borrarMarcador(i: number) {
    this.marcadores[i].marcador?.remove()
    this.marcadores.splice(i, 1)
    this.guardarMarcadores()
  }
}
