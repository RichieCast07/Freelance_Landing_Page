import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from './form-contact/form-contact.component';
import { NavbarComponent } from "../standalone/navbar/navbar.component";
import { FooterComponent } from "../standalone/footer/footer.component";


@NgModule({
  declarations: [
    FormContactComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
]
})
export class ContactModule { }
