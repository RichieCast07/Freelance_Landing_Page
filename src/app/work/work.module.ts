import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPageComponent } from './work-page/work-page.component';
import { NavbarComponent } from "../standalone/navbar/navbar.component";
import { FooterComponent } from "../standalone/footer/footer.component";



@NgModule({
  declarations: [
    WorkPageComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
]
})
export class WorkModule { }
