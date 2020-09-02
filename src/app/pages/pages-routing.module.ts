import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { AstroRegistrationComponent } from './astro-registration/astro-registration.component';
import { AstrologerComponent } from './astrologer/astrologer.component';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer.component';
import { ReportListingComponent } from './report-listing/report-listing.component';



const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'astroRegistration', component: AstroRegistrationComponent},
  {path: 'astrologer', component: AstrologerComponent},
  {path: 'questionAnswer', component: QuestionAndAnswerComponent},
  {path: 'reportListing', component: ReportListingComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
