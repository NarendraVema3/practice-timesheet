import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  constructor( private router:ActivatedRoute  ) { }

  ngOnInit() {

  this.router.paramMap
  .subscribe(param=>{
    let id = param.get('id');
    console.log(id);
  });

  }

}
