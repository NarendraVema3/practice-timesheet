import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../service/project.service';
export interface Element{
  id:number;
  projectname:string;
  projectdescription:string;
  projectcost:string;
  projectmanager:string;
  client:string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: any;

  displayedColumns = ['id', 'projectname', 'projectdescription', 'projectcost','projectmanager' , 'client' ,'view','delete','edit'];
  dataSource :  MatTableDataSource<Element>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */

   constructor( private projectsrv:ProjectService,private router:Router )
   {
     this.getprojects();
     this.dataSource=new MatTableDataSource(this.project);
     this.dataSource.paginator = this.paginator;


   }





  ngAfterViewInit() {
  }

  ngOnInit()
  {
   
  }
  getprojects(){
    this.projectsrv.getprojects()
    .subscribe(x => {
      this.project =  x.json();
      console.log(this.project);
      this.dataSource=new MatTableDataSource(this.project);

    },
    err => {
      console.log(err);
    })
    
  }
  //  editProject(project){


  //   console.log(project)

  //     //  this.router.navigate(['/changeproject'])

  //  }



}



