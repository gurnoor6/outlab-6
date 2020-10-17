import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
	{path:'form',component:FormComponent,data:{animation:'formPage'}},
	{path:'contact',component:ContactComponent,data:{animation:'contactPage'}},
	{path:'**',data:{animation:'contactPage'}, redirectTo:'/contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
