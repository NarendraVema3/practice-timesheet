import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validation: boolean;

  loginDetails:any;


  constructor( ) { 
  
     this.loginDetails={
      
      content1:'',
      content2:''


     }
    
           // this.angular.auth()
  }

 

   

  submit( status :boolean )
{      
   

  console.log(status);
  
        // this.loginsrv.home(status)


    // this.loginsrv.logindetails(this.loginDetails.content1 , this.loginDetails.content2)
    // .then(data=>
    // {
    //               console.log(data);
    // })
    // .catch(error=>{
    //   console.log(error);
    // })
    // console.log(this.loginDetails);
    

}


  ngOnInit() {
  }

}
