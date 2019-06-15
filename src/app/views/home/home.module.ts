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
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule
} from '@angular/material';
import { InterceptorProviders } from 'src/app/shared/interceptor/InterceptorProviders';
import { MyFleetsComponent } from './components/myfleets/myfleets.component';
import { TablesRoutingModule } from 'src/app/layout/tables/tables-routing.module';
import { TablesComponent } from 'src/app/layout/tables/tables.component';
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
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    TranslateModule
  ],
  providers: [InterceptorProviders],
  declarations: [HomeComponent, NavComponent, TopnavComponent, SidebarComponent, MyFleetsComponent, TablesComponent]
})
export class HomeModule {}
