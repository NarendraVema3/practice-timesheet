import { Router } from '@angular/router';
import { ProjectService } from './../service/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  project: any;

  displayedColumns = ['position', 'name', 'weight', 'symbol','view' ,'status','edit' ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @ViewChild(MatSort) sort: MatSort;


  status = [
    {value: 'steak-0', viewValue: 'Accept'},
    {value: 'pizza-1', viewValue: 'Reject'},
    {value: 'tacos-2', viewValue: 'Hold'}
  ];





  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */

   constructor( private projectsrv:ProjectService,private router:Router )
   {


   }





  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit()
  {
    this.projectsrv.getprojects()
    .subscribe(x => {
      this.project =  x.json();
      console.log(this.project);
    },
    err => {
      console.log(err);
    })
    
  }
  
   editProject(){

     console.log('i am in edit box');
  
   }



}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  view : any;
  status:any;
  edit : any ;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', view:'string',status:'test',edit:'test'  },
 
];