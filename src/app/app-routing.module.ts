import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"service",component:ServiceComponent},
  {path:"servicedetails",component:ServicedetailsComponent},
  {path:"contact",component:ContactusComponent},
  {path:"",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
