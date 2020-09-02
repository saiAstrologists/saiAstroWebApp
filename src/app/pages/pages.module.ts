import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AstroRegistrationComponent } from './astro-registration/astro-registration.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AstrologerComponent } from './astrologer/astrologer.component';
import { ReportListingComponent } from './report-listing/report-listing.component';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';




@NgModule({
  declarations: [
    HomePageComponent,
    AstroRegistrationComponent,
    AstrologerComponent,
    ReportListingComponent,
    QuestionAndAnswerComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    CarouselModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,

  ]
})
export class PagesModule { }
