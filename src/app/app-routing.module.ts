import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'

const routes: Routes = [

  { path: '' , loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
  // { path: '' , component: HomePageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
