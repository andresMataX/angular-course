import { Component, Input, ViewChild, OnInit } from '@angular/core'
import { BaseChartDirective } from 'ng2-charts'
import {
  ChartConfiguration,
  ChartType,
  ChartData,
  ChartDataset,
} from 'chart.js'

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined
  @Input() horizontal: boolean = false
  @Input() barChartData!: ChartData<'bar'>

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  }
  barChartType: ChartType = 'bar'

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y'
      this.barChartOptions!.scales!['y']!.min = 0
    }
  }
}
