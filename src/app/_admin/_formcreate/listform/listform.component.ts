import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

import { FormService } from '../../../formservice/form.service';
import { UiSwitchModule } from 'ngx-toggle-switch';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.css']
})
export class ListformComponent implements OnInit {
    FormData;
    error : string ='';
  constructor( private FormService:FormService,
               private spinner: NgxSpinnerService,
               private UiSwitchModule:UiSwitchModule,
               private NgxPaginationModule:NgxPaginationModule,
   ) { }

  ngOnInit() {
      this.spinner.show();
      console.log(localStorage.getItem('form'));
     let form = localStorage.getItem('form');
      this.FormData = JSON.parse(form);
      this.spinner.hide();
  }

  addFormStorag(key)
  {
     // console.log(key);

      localStorage.setItem('formUnique',JSON.stringify(key) );
  }
    responceFormStorag(i)
    {



        localStorage.setItem('Title',JSON.stringify(this.FormData[i].title) );

    }

   putFormStorage(i)
    {

        localStorage.setItem('FormData',JSON.stringify(this.FormData[i]) );
    }

    Onchange(form,i,type)
    {
        if(type == 'actif')
        {
            if(form.actif === false) {

                form.actif = true;
            }else{

                form.actif = false;

            }
            this.FormData[i].actif = form.actif;
        }else{

            if(form.uniquer === false) {

                form.uniquer = true;
            }else{

                form.uniquer = false;

            }
            this.FormData[i].uniquer = form.actif;
        }


    }
    conertBoolean(value)
    {
        if(value == 1)
        {
            return true ;
        }else{
            return false ;
        }

    }
}
