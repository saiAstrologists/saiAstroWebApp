import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home' , loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'dashboard' , loadChildren: () => import('./Dashboard/dashboard-module.module').then(m => m.DashboardModuleModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
