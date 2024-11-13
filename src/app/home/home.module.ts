import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from "../standalone/navbar/navbar.component";
import { FooterComponent } from "../standalone/footer/footer.component";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
]
})
export class HomeModule { }
