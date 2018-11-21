import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routing';
import { UiSwitchModule } from 'ngx-toggle-switch'
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { FormComponent } from './_admin/_formcreate/form/form.component';
import { AddformComponent } from './_admin/_formcreate/addform/addform.component';
import { DndModule } from 'ng2-dnd'
import { FormService } from './formservice/form.service';
import { FormrenderComponent } from './_admin/_formcreate/formrender/formrender.component';
import { ListformComponent } from './_admin/_formcreate/listform/listform.component';
import { ResponceformComponent } from './_admin/_formcreate/responceform/responceform.component';


@NgModule({
  declarations: [
    AppComponent,
      FormComponent,
      AddformComponent,
      FormrenderComponent,
      ListformComponent,
      ResponceformComponent,

    /*  FileUploadModule,*/


  ],
  imports: [

      BrowserModule,
      HttpModule,
      Routing,
      NgxSpinnerModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      UiSwitchModule,
      DndModule.forRoot(),
      NgxPaginationModule,




  ],
  providers: [


      FormService,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
