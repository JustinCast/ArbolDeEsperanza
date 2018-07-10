import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import { PeopleService } from '../services/people.service';
import { Person } from '../models/Person';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { TIME_FORMATS } from '../models/TimeFormats';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: TIME_FORMATS }
  ]
})
export class GraphComponent implements OnInit {
  chart = []; // This will hold our chart info
  active: boolean = true
  inactive: boolean = false
  public fromDate: Date
  public toDate: Date
  people: Person[]
  filteredPeople: Person[] = new Array<Person>()
  filterGroup: FormGroup
  public secondChartType: string = 'doughnut'
  public chartData:Array<any> = [];

  // [300, 50, 100, 40, 120];
  //['Licor', 'Marihuana', 'Cocaína', 'Pastillas depresivas', 'Transtornos'];
  public secondChartLabels:Array<any> = [];

  public secondChartColors:Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
    hoverBorderWidth: 0, 
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"], 
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
  }];

  constructor(
    private peopleService: PeopleService,
    private _fb: FormBuilder
  ) { 
    this.filterGroup = _fb.group({
      'fromControl': [Validators.required],
      'toControl': [Validators.required],
      'radioControl': [Validators.required],
    })
  }

  public chartOptions:any = { 
    responsive: true
  };

  public secondChartOptions:any = { 
    responsive: true
  };


  public chartClicked(): void { 
        
  }
  
  public secondChartClicked(e: any): void { 
    e.update()
  } 
  
  public chartHovered(): void {
  }

  public secondChartHovered(): void { 
        
  }

  ngOnInit(): void {
    this.makePeopleRequest()
  }

  onSubmit() {
    this.chart = [];
    this.chartData = []
    this.secondChartLabels = []
    let status = this.filterGroup.get('radioControl').value
    let fromDate = this.filterGroup.get('fromControl').value.toISOString()
    let toDate = this.filterGroup.get('toControl').value.toISOString()

    if(this.people.length !== 0){
      this.people.forEach(p => {
        //console.log("Fecha entrada persona: ", p.EntryDate)
        //console.log("FromControl Value: ", this.filterGroup.get('fromControl').value.toISOString())

        if(status == 1){
          if(p.EntryDate > fromDate && p.EntryDate < toDate && p.ActiveOrInactive){
            //this.filteredPeople.unshift(p)
            if(this.secondChartLabels.includes(p.Age)){
              let index: number = this.secondChartLabels.indexOf(p.Age)
              this.chartData[index]++
            }
            else{
              this.secondChartLabels.push(p.Age)
              this.chartData.push(1)
            }
  
          }
        }
        else if(status == 2){
          if(p.EntryDate > fromDate && p.EntryDate < toDate && !p.ActiveOrInactive){
            //this.filteredPeople.unshift(p)
            if(this.secondChartLabels.includes(p.Age)){
              let index: number = this.secondChartLabels.indexOf(p.Age)
              this.chartData[index]++
            }
            else{
              this.secondChartLabels.push(p.Age)
              this.chartData.push(1)
            }
  
          }
        }
        else{
          if(p.EntryDate > fromDate && p.EntryDate < toDate){
            //this.filteredPeople.unshift(p)
            if(this.secondChartLabels.includes(p.Age)){
              let index: number = this.secondChartLabels.indexOf(p.Age)
              this.chartData[index]++
            }
            else{
              this.secondChartLabels.push(p.Age)
              this.chartData.push(1)
            }
  
          }
        }
      })
    
      this.chart = new Chart('canvas', {
        type: this.secondChartType,
        data: {
          labels: this.secondChartLabels,
          datasets: [
            { 
              data: this.chartData,
              //borderColor: "red",
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(215, 159, 64, 0.2)',
                'rgba(255, 122, 64, 0.2)',
                'rgba(255, 75, 64, 0.2)',
                'rgba(235, 120, 64, 0.2)',
                'rgba(212, 159, 64, 0.2)',
                'rgba(200, 159, 64, 0.2)',
                'rgba(110, 159, 64, 0.2)',
                'rgba(100, 159, 64, 0.2)',
                'rgba(90, 159, 64, 0.2)'
              ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            },
          ],
        },
        options: {
          legend: {
            display: false
          },
          // scales: {
          //   xAxes: [{
          //     display: true
          //   }],
          //   yAxes: [{
          //     display: true
          //   }],
          // }
        }
      });
    }
  }

  makePeopleRequest() {
    this.peopleService.getPeopleRequest()
    .subscribe(
      success => {
        this.people = success
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
          this.peopleService.openSnackBar(`Persona no guardada debido al error: ${err}`, 'Ok', 'red-snackbar')
        }
      }
    )
  }

}
