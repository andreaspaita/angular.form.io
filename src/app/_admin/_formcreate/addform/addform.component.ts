import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { Form } from '../form';
import { Formtitle } from '../formtitle';
import {ViewChild, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { FormService } from '../../../formservice/form.service';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
    FormAdd : Array<Form> = [];
    Input :number = 0;
    FormTitle: Array<Formtitle> = [];
    FormTitleRender ;
    listOne: Array<string> = [];
     constructor(
            private router: Router,
            private spinner: NgxSpinnerService,

               private sanitizer: DomSanitizer,
               private elRef:ElementRef,
               private cdRef:ChangeDetectorRef,
                     private FormService:FormService) { }

  ngOnInit() {
      if(window.location.pathname =='/put'){
          let formrescu= localStorage.getItem('FormData');
          let form = JSON.parse(formrescu);
          this.FormAdd = form.formrender;

          this.listOne.push(form.formrender.length);
          this.Input = form.formrender.length;
          this.FormTitleRender = new Formtitle(  form.title, form.description,  form.pages,form.nombrepages, form.actif,form.uniquer,form.submit)

      }else{
          this.FormTitleRender = new Formtitle( "", "",  false, 0,0,0,'valider');
      }
  }

  AddInput(option)
  {
      let i;
      ++ this.Input;
      i =  this.Input;
      let input =null;
      this.listOne.push(i);
      switch (option) {

          case 'html':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  'input_'+i+'_c','html',null,null,true,null,null,0,0,null,false,false,true));
              break;
          case 'textarea':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  'input_'+i+'_c','textarea',null,null,true,null,null,0,0,null,false,false,true));
              break
          case 'checkbox':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  'input_'+i+'_c','checkbox',null,null,true,null,null,0,0,null,false,false,true));
              break;
          case 'select':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  'input_'+i+'_c','select',null,null,true,null,null,0,0,null,false,false,true));
              break;
          case 'radio':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  'input_'+i+'_c','radio',null,'input_'+i+'_p',true,null,null,null,0,null,false,false,true));
              break;
          case 'file':
              this.FormAdd.push(new Form(null,input,'file_'+i,i,null,'file_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  null,'file',null,'input_'+i+'_p',false,null,null,0,0,null,false,false,true));
              this.listOne.push(i);
              break;
          case 'number':
              this.FormAdd.push(new Form(null,null,'input_'+i,i,null,'input_'+i+'_v' ,null,'input_'+i+'_l',null,
                  null,option,null,'input_'+i+'_p',false,null,null,0,0,null,false,false,true));
              break;
          case 'date':
              this.FormAdd.push(new Form(null,null,'input_'+i,i,null,'input_'+i+'_v' ,null,'input_'+i+'_l',null,
                  null,option,null,'input_'+i+'_p',false,null,null,0,0,null,false,false,true));
              break;
          case 'text':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  null,option,null,'input_'+i+'_p',false,null,null,0,0,null,false,false));
              break;
          case 'mail':
              this.FormAdd.push(new Form(null,input,'input_'+i,i,null,'input_'+i+'_v'  ,null,'input_'+i+'_l',null,
                  null,option,null,'input_'+i+'_p',false,null,null,0,0,null,false,false));
              break;

      }

  }
    deleteForm(index)
  {

       this.FormAdd[index] = null;
  }

  AddSub(option,i)
  {

      let key  ;
      if(this.FormAdd[i].subcategorie == null)
      {
           key = 0 +1
          this.FormAdd[i].subcategorie = new Array();
      }else{
           key = this.FormAdd[i].subcategorie.length + 1;
           }

       let input = null;
      let iV = i+1;
      if(option == 'select' || option == 'checkbox')
      {
          this.FormAdd[i].subcategorie.push(new Form(null,input,'input_'+iV+'_'+key,key,null,'input_'+iV+'_'+key+'_v'  ,null,
              null,null,'input_'+iV+'_'+key+'_c','sub',null,null,false,null,null,0,0,null,false,false,true));
      }else{
          this.FormAdd[i].subcategorie.push(new Form(null,input,'input_'+iV+'_'+key,key,null,'input_'+iV+'_'+key+'_v'  ,null,
              null,null,'input_'+iV+'_'+key+'_c','sub',null,null,false,null,null,0,0,null,false,false,true));
      }




  }
    deleteFormSubform(i,k)
    {
        this.FormAdd[i].subcategorie[k] = null;

    }
    scroll(el) {
        el.scrollIntoView();
    }

    onSubmit(f: NgForm) {

        let key =   Object.keys(f.value);

            if(f.value.pages ===true)
            {
                this.FormTitle.push(new Formtitle(f.value.title,f.value.description,true,f.value.nombrespages,f.value.actif,f.value.unique,f.value.button, this.FormAdd))
            }else{
                this.FormTitle.push(new Formtitle(f.value.title,f.value.description,false,f.value.nombrespages,f.value.actif,f.value.unique,f.value.button, this.FormAdd))
            }



            for (let i = 0; i <= key.length; i++) {
            if(typeof key != "undefined")
            {
                let KeyT = key[i];

                if(typeof KeyT !="undefined")
                {
                    let keyValue = KeyT;
                    let keyExplode = KeyT.split('_');

                    let keysArray = parseInt(keyExplode[1]) -1;

                    if(   keyExplode.length == 4 )
                    {

                        let keysSub = parseInt(keyExplode[2]) -1;
                        if(keyExplode[3] == "v")
                        {
                            this.FormAdd[keysArray].subcategorie[keysSub].value = f.value[keyValue];

                        }else if(keyExplode[3] == "p"){

                            this.FormAdd[keysArray].subcategorie[keysSub].placeholder = f.value[keyValue];

                        }else if(keyExplode[3] == "l"){

                            this.FormAdd[keysArray].subcategorie[keysSub].labele = f.value[keyValue];

                        }else if(keyExplode[3] == "c")
                        {
                            this.FormAdd[keysArray].subcategorie[keysSub].choices = f.value[keyValue];
                        }else if(keyExplode[3] == "s"){
                            if(f.value[keyValue] !== "")
                            {
                                this.FormAdd[keysArray].subcategorie[keysSub].selected = f.value[keyValue];


                            }

                        }

                    } else if(keyExplode.length == 2) {
                        if(f.value[keyValue] !== "")
                       {
                           this.FormAdd[keysArray].position =  f.value[keyValue];
                       }else{
                           this.FormAdd[keysArray].position = i;
                       }

                   }else{

                       if(keyExplode[2] == "v")
                       {
                           this.FormAdd[keysArray].value = f.value[keyValue];

                       }else if(keyExplode[2] == "p"){

                           this.FormAdd[keysArray].placeholder = f.value[keyValue];

                       }else if(keyExplode[2] == "l"){

                           this.FormAdd[keysArray].labele = f.value[keyValue];

                       }else if(keyExplode[2] == "c")
                       {
                           this.FormAdd[keysArray].choices = f.value[keyValue];
                       }else if(keyExplode[2] == "d")
                       {
                           this.FormAdd[keysArray].description = f.value[keyValue];
                       }else if(keyExplode[2] == "o")
                       {


                           if(f.value[keyValue] !="")
                           {
                               this.FormAdd[keysArray].obligatoire = f.value[keyValue];
                           }

                       }else if(keyExplode[2] == "h"){
                           this.FormAdd[keysArray].value = JSON.stringify(f.value[keyValue]);
                       }else if(keyExplode[2] == "m"){
                           this.FormAdd[keysArray].formmultiple = f.value[keyValue];
                       }else if(keyExplode[2] == "e")
                        {
                            this.FormAdd[keysArray].error = f.value[keyValue];
                        }
                   }

                }


            }



        }

        this.spinner.show();

        if(window.location.pathname !='/put') {

            this.FormTitle['formrender'] = this.FormAdd;
            console.log(this.FormTitle);
            localStorage.setItem('form',JSON.stringify( this.FormTitle));
            this.router.navigate(['list']);
            this.spinner.hide();
        }else{
            this.spinner.hide();
        }



  }

    ngAfterViewInit() {
        // Hack: Scrolls to top of Page after page view initialized
        let top = document.getElementById('footer');
        if (top !== null) {
            top.scrollIntoView();
            top = null;
        }
    }
    hideSwhod(i)
    {
        if( this.FormAdd[i].hidden ==true)
        {
            this.FormAdd[i].hidden = false;
        }else{
            this.FormAdd[i].hidden = true;
        }
    }



    ShowTabs()
    {



        let number = 0;
        for (let i = 0; i <= this.FormAdd.length; i++) {

            if(this.FormAdd[i-1] != null)
            {
                ++number;
            }
        }
        if( 1 >= number)
        {
            return false;
        }else{
            return true;
        }
    }



    checkValueSebCont(key)
    {


        if( this.FormAdd[key].subcategorie !== null )
        {

            if(this.FormAdd[key].subcategorie.length >= 1)
            {
                if(this.FormAdd[key].subcategorie[0] !== null)
                {
                    return true;
                }else{
                    return false;
                }

            }else
                {
                return false;

            }
        }else{
            return false;
        }
    }


    ValudeType(value)
    {
let key = value -1;
        if(value != "undefined" && this.FormAdd[key] !=null )
        {

            if(this.FormAdd.length >= 1)
            {
                if(this.FormAdd[key].type == 'radio' || this.FormAdd[key].type == 'select'||  this.FormAdd[key].type  =='checkbox')
                {
                   return true;


                }else{
                    return false;
                }
            }

        }


    }

    valuCheckInput(value)
    {
        let key = value - 1;
        if(value != "undefined" && this.FormAdd[key] !=null )
        {

            if(this.FormAdd.length >= 1)
            {

                if(this.FormAdd[key].type == 'radio' || this.FormAdd[key].type == 'select'||  this.FormAdd[key].type  =='checkbox' )
                {


                    return true;



                }else{
                    return false;
                }
            }

        }else{
            return false;
        }

    }


    onChange($event)
    {

        if($event !== "undefined" && this.FormAdd[$event] !=null )
        {

            if(this.FormAdd.length >= 1)
            {
                if(this.FormAdd[$event].type == 'radio' || this.FormAdd[$event].type == 'select'||  this.FormAdd[$event].type  =='checkbox')
                {

                    this.FormAdd[$event].obligatoireVisible = false;
                }
            }

        }

    }




    conertBoolean(value)
    {
        if(value == true)
        {
            return 1 ;
        }else{
            return  0 ;
        }

    }




}
