import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AstrologerDashboardComponent } from './astrologer-dashboard/astrologer-dashboard.component';
import { AuthGuard } from '../auth/canActivateAuth.gaurd';
import { AstroReportComponent } from './astro-report/astro-report.component';
import { EditReportComponent } from './astro-report/edit-report/edit-report.component';
import { AstroQuestionComponent } from './astro-question/astro-question.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';



@NgModule({
  declarations: [
    AstrologerDashboardComponent,
    AstroReportComponent,
    EditReportComponent,
    AstroQuestionComponent,
    ConfirmationModalComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardModuleModule { }
