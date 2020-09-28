import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { AstroRegistrationComponent } from './astro-registration/astro-registration.component';
import { AstrologerComponent } from './astrologer/astrologer.component';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer.component';
import { ReportListingComponent } from './report-listing/report-listing.component';
import { AstrologerChatComponent } from './astrologer-chat/astrologer-chat.component';
import { AuthGuard } from '../auth/canActivateAuth.gaurd'


const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'astroRegistration', component: AstroRegistrationComponent, canActivate: [AuthGuard]},
  {path: 'astrologer', component: AstrologerComponent, canActivate: [AuthGuard]},
  {path: 'questionAnswer', component: QuestionAndAnswerComponent, canActivate: [AuthGuard]},
  {path: 'reportListing', component: ReportListingComponent, canActivate: [AuthGuard]},
  {path: 'astrologerChat', component: AstrologerChatComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
