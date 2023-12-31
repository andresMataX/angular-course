import { Component, OnInit } from '@angular/core'
import * as mapboxgl from 'mapbox-gl'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class FullScreenComponent implements OnInit {
  ngOnInit(): void {
    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-100.31387765440506, 25.72462406101237],
      zoom: 17,
    })
  }
}
