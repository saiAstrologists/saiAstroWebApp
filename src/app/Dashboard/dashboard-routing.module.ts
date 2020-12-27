import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstrologerDashboardComponent } from './astrologer-dashboard/astrologer-dashboard.component';
import { AstroReportComponent } from './astro-report/astro-report.component';
import { AstroQuestionComponent } from './astro-question/astro-question.component';


import { AuthGuard } from '../auth/canActivateAuth.gaurd'


const routes: Routes = [

  {path: '', component: AstrologerDashboardComponent,canActivate: [AuthGuard]},
  {path: 'astroReport', component: AstroReportComponent, canActivate: [AuthGuard]},
  {path: 'astroQuestion', component: AstroQuestionComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
