import { Router } from '@angular/router';
import { ProjectService } from './../service/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})

export class AddResourceComponent implements OnInit {


  @ViewChild('email') inputText;


  // server()
  // {
  //   let data = this.inputText.nativeElement;
  // console.log(data.value);
  // }





  employees: any;
  // newemployee(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  employee: any;






  imageUrl: string = "http://decentkidsworld.com/wp-content/themes/decent/images/menImage.png";

  imageUrl1:any;

  resource:any;

  fileToUpload: File = null;


  constructor( private projectsrv:ProjectService,private router:Router  ) { 

    this.resource ={

      address: '',
      age: '',
      dateOfBirth: "2018-11-13T05:57:56.711+0000",
      department: '',
      doj: '2018-11-13T05:57:56.711+0000',
      emailId: '',
      empId: 0,
      employeeStatus: '',
      employeeType: '',
      experience: 0,
      firstName: '',
      jobLocation: '',
      lastName: '',
      maritalStatus: '',
      mobileNo: '',
      otherEmail: '',
      reportingTo: '',
      role: '',
      sourceOfHire: '',
      userName: ''
    }


      // let data = this.resource.emailId

      // console.log(data);


// setInterval(this.server,2000);



  }

  ngOnInit() {

    // this.projectsrv.getEmployees()
    // .subscribe(x => {
    //   this.employees =  x.json();
    //   console.log(this.employees);
    // },
    // err => {
    //   console.log(err);
    // })

  }

  handleFileInput(file: FileList) {
    console.log('hello', file);
    this.fileToUpload = file.item(0);

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

          this.imageUrl1 = event.target.value;
          console.log(this.imageUrl1);
    }

    reader.readAsDataURL(this.fileToUpload);

  }

  submit()
  {

      let extend =  '@linkbizitsolutions'

  this.resource.userName = this.resource.emailId + extend ;

    this.projectsrv.addEmployeeDetails(this.resource)
    .subscribe(x => {
      this.employee =  x.json();

      console.log(this.employee);
      this.router.navigate(['/viewresource']);
    },
    err => {
      console.log(err);
    })

  }



}
