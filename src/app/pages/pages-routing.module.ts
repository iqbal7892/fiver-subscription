import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
