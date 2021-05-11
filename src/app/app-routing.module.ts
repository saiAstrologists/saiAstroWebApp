import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'chat', component: ChatComponent },
  { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'dashboard', loadChildren: () => import('./Dashboard/dashboard-module.module').then(m => m.DashboardModuleModule)},
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  { path: 'transaction', component: TransactionComponent},
  { path: 'wallet', component: WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
