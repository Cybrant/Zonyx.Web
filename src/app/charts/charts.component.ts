import { Component } from '@angular/core';
import { historical_data_zurn } from './data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  view: any[] = [500, 300];
  yScaleMin = historical_data_zurn.reduce(function (prev, current) {
    return prev && prev.close < current.close ? prev : current;
  }).close;
  yScaleMax = historical_data_zurn.reduce(function (prev, current) {
    return prev && prev.close > current.close ? prev : current;
  }).close;

  multi: any[];

  // options
  showLabels = true;
  animations = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;

  colorScheme = {
    domain: ['#5AA454'],
  };

  constructor() {
    this.multi = [
      {
        name: 'Zurn',
        series: historical_data_zurn.map((d) => ({
          name: this.formatDate(d.date),
          value: d.close,
        })),
      },
    ];
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = ('0' + date.getUTCDate()).slice(-2); // Get day with leading zero
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // Get month with leading zero
    const year = date.getUTCFullYear().toString().slice(-2); // Get last two digits of the year
    return `${day}.${month}.${year}`; // Return formatted date
  }
}
