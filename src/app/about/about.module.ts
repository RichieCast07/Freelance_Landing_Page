import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from "../standalone/footer/footer.component";
import { NavbarComponent } from "../standalone/navbar/navbar.component";


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    FooterComponent,
    NavbarComponent
]
})
export class AboutModule { }
