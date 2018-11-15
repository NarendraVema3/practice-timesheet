import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  displayedColumns = ['position', 'name', 'weight', 'symbol','view' , 'delete','edit' ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @ViewChild(MatSort) sort: MatSort;

  mode = new FormControl('over');

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor()
  {

  }


  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit()
  {

  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  view : any;
  delete : any ;
  edit:any;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'narendra', weight: 1.0079, symbol: 'H', view:'string',delete:'test',edit:'edit'  },
 
];
