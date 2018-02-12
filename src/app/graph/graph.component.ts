import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  ngOnInit(): void {
  }
  public chartType:string = 'bar';
  public secondChartType: string = 'doughnut'
  public chartData:Array<any> = [300, 50, 100, 40, 120];
        
  public chartDatasets:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Casos de abuso psicológico'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Casos de agresión'}
  ];

  public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public secondChartLabels:Array<any> = ['Licor', 'Marihuana', 'Cocaína', 'Pastillas depresivas', 'Transtornos'];

  public chartColors:Array<any> = [
    {
      backgroundColor: 'rgba(220,220,220,0.2)',
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    },
    {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public secondChartColors:Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
    hoverBorderWidth: 0, 
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"], 
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
  }];

  public chartOptions:any = { 
    responsive: true
  };

  public secondChartOptions:any = { 
    responsive: true
  };


  public chartClicked(e: any): void { 
        
  }
  
  public secondChartClicked(e: any): void { 
        
  } 
  
  public chartHovered(e: any): void {
  }

  public secondChartHovered(e: any): void { 
        
  }

}
