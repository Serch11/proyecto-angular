//importamos los modulos de router de angular
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

//importamos los componentes del proyecto de angular
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CreateComponent } from './component/create/create.component';
import { ProjectComponent } from './component/project/project.component';
import {ErrorComponent} from './component/error/error.component';
 
//array de rutas
const appRouter = [
    {path:"",component:AboutComponent},
    {path:"sobremi",component:AboutComponent},
    {path:"contacto",component:ContactComponent},
    {path:"creaproyecto",component:CreateComponent},
    {path:"proyectos",component:ProjectComponent},
    {path:"**",component:ErrorComponent}
];

export const appRoutingProviders:any[] = [];
export const routing = RouterModule.forRoot(appRouter);



