import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    CarouselModule
  ]
})
export class PagesModule { }
