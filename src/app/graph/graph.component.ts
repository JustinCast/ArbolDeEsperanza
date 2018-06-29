import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../models/Person';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public fromDate: Date
  public toDate: Date
  people: Person[]
  filterGroup: FormGroup
  public secondChartType: string = 'doughnut'
  public chartData:Array<any> = [300, 50, 100, 40, 120];

  public secondChartLabels:Array<any> = ['Licor', 'Marihuana', 'Cocaína', 'Pastillas depresivas', 'Transtornos'];

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


  public chartClicked(e: any): void { 
        
  }
  
  public secondChartClicked(e: any): void { 
        
  } 
  
  public chartHovered(e: any): void {
  }

  public secondChartHovered(e: any): void { 
        
  }

  ngOnInit(): void {
    this.makePeopleRequest()
  }

  onSubmit() {

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
