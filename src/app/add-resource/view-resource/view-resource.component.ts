import { Router } from '@angular/router';
import { ProjectService } from './../../service/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
export interface Element {
  Id: number;
  name: string;
  role: String;
  emailId: string;
  view:any;
}
@Component({
  selector: 'app-view-resource',
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.css']
})
export class ViewResourceComponent implements OnInit {
  employees: any;

  displayedColumns = ['Id', 'name', 'role', 'emailId','view'];
  dataSource : MatTableDataSource<Element>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor( private projectsrv:ProjectService,private router:Router )
  {  
    this.getEmployees();
    this.dataSource=new MatTableDataSource(this.employees);
    this.dataSource.paginator = this.paginator;
  }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnInit() {
   
  }
    getEmployees(){
    this.projectsrv.getEmployees()
    .subscribe(x => {
      this.employees =  x.json();
      console.log(this.employees);
      this.dataSource=new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    err => {
      console.log(err);
    })
   }

   resourceview(data)
   {
    //  this.router.navigate(['/viewEmployeeDetails']);
    console.log('i am from view source component');
    console.log(data);
   }



  }



