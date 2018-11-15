import { ProjectService } from './../service/project.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  timesheet: any;

  displayedColumns = ['position', 'name', 'weight', 'symbol','view' , 'delete' ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */

     constructor( private projectsrv:ProjectService )
     {

      this.projectsrv.getTimesheets()
      .subscribe(x => {
         this.timesheet = x;
        console.log(this.timesheet);
      },
      err => {
        console.log(err);
      })
     }






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
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', view:'string',delete:'test'  },
 
];