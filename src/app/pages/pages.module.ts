import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule
  ],
})
export class PagesModule { }
