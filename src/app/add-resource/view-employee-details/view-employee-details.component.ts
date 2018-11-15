import { ProjectService } from './../../service/project.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {
  employeeDetails: any;


  id:any;

  constructor( private router:ActivatedRoute , private projectsrv:ProjectService) { }

  ngOnInit() {
    this.router.paramMap
    .subscribe(param=>{
      let id = param.get('id');
      console.log(id);
    });

    this.id = 1;

    this.projectsrv.getEmployeeDetails(this.id)
    .subscribe(x => {
      this.employeeDetails =  x;
      console.log(this.employeeDetails);
    },
    err => {
      console.log(err);
    })




  }

  

}
