import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
