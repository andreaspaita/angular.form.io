import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../formservice/form.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import {NgForm} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { Fileupload } from '../fileupload';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-formrender',
  templateUrl: './formrender.component.html',
  styleUrls: ['./formrender.component.css']
})

export class FormrenderComponent implements OnInit {
 FormData;
 FileSave :  Array<Fileupload> = [];
    fd = new FormData();
    FileStorage:File = null;
    inputRequired;
    p;
    constructor(  private spinner: NgxSpinnerService,
                private router:Router,
                private FormService:FormService,
                private sanitizer: DomSanitizer,
                private NgxPaginationModule:NgxPaginationModule,
                ) { }

  ngOnInit() {
    let myItem = localStorage.getItem('formUnique');

    if(typeof myItem == "undefined")
    {
      this.router.navigate(['list']);
    }

  this.FormData = JSON.parse( myItem );

      this.inputRequired = new Array();

        let validNumber = this.FormData.formrender.length -1;
        for(let i = 0; i <=validNumber; i++)
        {
            if( this.FormData.formrender[i] !='undefined' || this.FormData.formrender[i] !=='null')
            {

                if(this.FormData.formrender[i].obligatoire == true)
                {

                    this.inputRequired[this.FormData.formrender[i].name] = true;
                }
            }

        }





  }
    onFileChange(event,keys,f) {


        const reader = new FileReader();

        if(event.target.files && event.target.files.length) {

            const [file] = event.target.files;
           reader.readAsDataURL(file);


            reader.onload = () => {
                //this.FileSave.push(reader.result);

            //    f.value[keys] = reader.result.split(',')[1];
               /* this.FileSave.push(f.value[keys]) ;*/
                this.FileSave.push(new Fileupload(f.value[keys],keys,file.type,null,null,null));

            };

          //  this.FileSave.push(f.value[keys]);


            }
    }


    onSubmit(f: NgForm) {
        let verif = new Array();
        let responce = new Array();
       // verif = null;
        console.log(this.inputRequired);
        if(this.inputRequired !== -1)
        {
            let keys = Object.keys(this.inputRequired);


            if(keys.length !== -1)
            {

                let check = keys.length -1;
                for(let i = 0; i <= check; i++)
                {

                    if( f.value[keys[i]] == '')
                    {
                        verif.push(i);

                        this.inputRequired[keys[i]] =false;
                        console.log(this.inputRequired);

                    }
                }

            }


        }




        if(verif.length > 0)
        {


            return false;
        }else{
            let keysR = Object.keys(f.value);

            if(keysR.length > 0)
            {
                let check = keysR.length -1;
                for(let i = 0; i <= check; i++)
                {
                    console.log(f.value[keysR[i]]);
                    responce.push(f.value[keysR[i]] );

                }
            }

            console.log(responce);
            localStorage.removeItem('reponce');
            localStorage.setItem('reponce',JSON.stringify(responce));
            this.router.navigate(['list']);
            this.spinner.hide();
        }



    }


    Htmlreturnserialize(value)
    {
        return JSON.parse(value);
    }

}
