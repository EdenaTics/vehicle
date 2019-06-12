import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guard/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/home-dashboard.module#HomeDashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class HomeRoutingModule {}

