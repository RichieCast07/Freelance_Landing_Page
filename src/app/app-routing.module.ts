import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: "work", component: WorkComponent},
  {path: "home", component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
