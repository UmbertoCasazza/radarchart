import { Component } from '@angular/core';

// sto scrivendo io
import { ChartData, ChartType, ChartOptions } from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'radarchart-app';

  // sto iniziando a scrivere io
  public radarChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title:
      {
        display: true,
        text: 'Dati mensili di vendita',
      },
    },
  };

  public radarChartData: ChartData<'radar'> = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ]
  };

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
    
  }

}
