import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from './components/nav/nav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { InterceptorProviders } from 'src/app/shared/interceptor/InterceptorProviders';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    TranslateModule
  ],
  providers: [InterceptorProviders],
  declarations: [HomeComponent, NavComponent, TopnavComponent, SidebarComponent]
})
export class HomeModule {}
