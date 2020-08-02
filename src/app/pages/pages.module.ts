import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AstroRegistrationComponent } from './astro-registration/astro-registration.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    AstroRegistrationComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    CarouselModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
