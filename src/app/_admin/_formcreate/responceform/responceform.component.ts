import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import {NgxSpinnerService} from "ngx-spinner";

import { FormService } from '../../../formservice/form.service';
import 'rxjs/Rx' ;
@Component({
  selector: 'app-responceform',
  templateUrl: './responceform.component.html',
  styleUrls: ['./responceform.component.css']
})
export class ResponceformComponent implements OnInit {
responce;
title;

  constructor( private router:Router,
               private spinner: NgxSpinnerService,

               private FormService:FormService
               ) { }

  ngOnInit() {

      let title= localStorage.getItem('Title');
      if(typeof title == "undefined")
      {
          this.router.navigate(['list']);
      }
      this.title = JSON.parse(title);
      localStorage.removeItem('Title');

      let response= localStorage.getItem('reponce');
      this.responce = JSON.parse(response);
      console.log(this.responce);
  }




}
