import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AstroRegistrationComponent } from './astro-registration/astro-registration.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AstroRegistrationComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    CarouselModule
  ]
})
export class PagesModule { }
