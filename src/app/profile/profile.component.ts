import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  content1: string;
  m: any;

  D:any;

  t:any;

  content:String;

  constructor() { }



   
  personalE(div : string){
    this.content = 'show';
    console.log("mouse enter : " + div);
 }

 personalL(div : string){
  this.content = 'hide';
   console.log('mouse leave :' + div);
 }


 informationE()
 {
  this.content1 = 'show1';
   
 }
 informationL()
 {
  this.content1 = 'hide1';  
 }



  ngOnInit() {


           this.D  = new Date();
            this.t = this.D.getHours(); 
            this.m = this.D.getMinutes();


             
  }

}
