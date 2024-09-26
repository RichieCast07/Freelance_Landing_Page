import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';


const router: Routes = [
  {path: "", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: "work", component: WorkComponent},
  {path: "home", component: HomeComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
