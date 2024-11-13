import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkPageComponent } from './work/work-page/work-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { FormContactComponent } from './contact/form-contact/form-contact.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contact", component: FormContactComponent},
  {path: "about", component:  AboutPageComponent},
  {path: "work", component: WorkPageComponent},
  {path: "home", component: HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
