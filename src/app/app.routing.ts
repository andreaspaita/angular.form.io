import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './_admin/_formcreate/form/form.component';
import { AddformComponent } from './_admin/_formcreate/addform/addform.component';
import { FormrenderComponent } from './_admin/_formcreate/formrender/formrender.component';
import { ListformComponent } from './_admin/_formcreate/listform/listform.component';
import { ResponceformComponent } from './_admin/_formcreate/responceform/responceform.component';

const APP_ROUTES: Routes = [
            {
                path : '',
                component : AddformComponent,


            },
            {
                path : 'list',
                component : ListformComponent,



            },

            {
                path : 'remplire',
                component : FormrenderComponent,



            },

            {
                path : 'put',
                component : AddformComponent,


            },
    {
        path : 'reponce',
        component : ResponceformComponent,


    },






    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);