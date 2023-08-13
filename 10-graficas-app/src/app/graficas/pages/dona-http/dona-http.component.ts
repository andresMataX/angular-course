import { Component, OnInit } from '@angular/core'
import { GraficasService } from '../../services/graficas.service'
import { ChartData, ChartType } from 'chart.js'

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  doughnutChartLabels: string[] = []
  data: number[] = []

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
    //   const labels = Object.keys(data)
    //   const values: number[] = Object.values(data)

    //   labels.forEach((l) => this.doughnutChartLabels.push(l))
    //   values.forEach((v) => this.data.push(v))
    // })

    this.graficasService
      .getUsuariosRedesDonaData()
      .subscribe(({ labels, values }) => {
        labels.forEach((l) => this.doughnutChartLabels.push(l))
        values.forEach((v) => this.data.push(v))
      })
  }

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: [
          '#109AB5',
          '#052D36',
          '#F58A2F',
          '#9E9E9E',
          '#000000',
        ],
      },
    ],
  }
  doughnutChartType: ChartType = 'doughnut'
}
