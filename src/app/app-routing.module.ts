import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'chat', component: ChatComponent },
  { path: 'home' , loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'dashboard' , loadChildren: () => import('./Dashboard/dashboard-module.module').then(m => m.DashboardModuleModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
