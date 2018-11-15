import { Router } from '@angular/router';
import { ProjectService } from './../service/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newprojects',
  templateUrl: './newprojects.component.html',
  styleUrls: ['./newprojects.component.scss']
})
export class NewprojectsComponent implements OnInit {
  projects: any;
  newproject: any;
  check: any;

  addprojects:any;



  constructor(private projectsrv:ProjectService, private router:Router ) { 

    this.addprojects = {
      projectname:'',
      projectdesc:'',
      clientname:'',
      projectmanager:'',
      projectcost:''
    }


       this.projects = {
        title: 'req',
    content: 'content'
       }



    this.projectsrv.getprojects()
    .subscribe(x => {
      this.check =  x.json();
      console.log(this.check);
    },
    err => {
      console.log(err);
    })

    
  }

  submit()
  {
     console.log(this.addprojects);
    //  this.projectsrv.addproject(this.addprojects)
    this.projectsrv.addproject(this.projects)
     .subscribe(x => {
      this.newproject =  x.json();

      console.log(this.newproject);
      this.router.navigate(['/projects'])
    },
    err => {
      console.log(err);
    })
  }

  openDialog()
  {
    console.log('hello');
  }
  ngOnInit() {
  }

}
