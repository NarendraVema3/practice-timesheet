import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-timesheet',
  templateUrl: './new-timesheet.component.html',
  styleUrls: ['./new-timesheet.component.css']
})
export class NewTimesheetComponent implements OnInit {

  viewmode:'today';
  words2 = [];


  animalControl = new FormControl('', [Validators.required]);

  constructor() { 

console.log(this.viewmode);
  }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  
  animals = [
    {name: 'Today', sound: 'Woof!'},
    {name: 'week', sound: 'Meow!'},
    {name: 'many-project', sound: 'Moo!'}
  ];
  ngOnInit() {
  }
  
  add() {
    this.words2.push({value: 'gsre'});
  }

}
