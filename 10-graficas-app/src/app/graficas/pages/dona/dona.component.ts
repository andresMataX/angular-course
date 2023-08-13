import { Component } from '@angular/core'
import { ChartData, ChartType, ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ]
  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#109AB5', '#052D36', '#F58A2F'],
      },
    ],
  }
  doughnutChartType: ChartType = 'doughnut'
}
