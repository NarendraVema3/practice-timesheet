import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Chart } from   'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  LineChart = {};
  barChart={};

  toNumber; 


  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit()
  {

    this.toNumber = parseInt('10.0000',10);
    console.log(this.toNumber);
   
    this.barChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"],
        datasets: [{
          label: 'number of hours spent per month',
          data: [90, 55, 77, 63, 85, 52, 70, 80, 44, 59, 86],
          fill: false,
          lineTension: 0,
          borderColor: "blue",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display:false
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display:false
                      }   
                  }]
      }
    },
  });

    


  }

  droppedData: string;
 
  dragEnd(event) {
    console.log('Element was dragged', event);
  }



}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'TMS', weight: 40, symbol: 'Basha'},
  {position: 2, name: 'AZMI', weight: 50, symbol: 'Rahil'},
  {position: 3, name: 'SCHOOL', weight: 60, symbol: 'sravanthi'},
  {position: 4, name: 'MINISTRY', weight: 70, symbol: 'vipul'},
  {position: 5, name: 'RTT', weight: 80, symbol: 'jaheer'},
  {position: 6, name: 'SHAN', weight: 0, symbol: 'C'},
  {position: 7, name: 'MANING', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 
];



