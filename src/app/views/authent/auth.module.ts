import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingRoutes } from './auth-routing.routing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PasswordforgotComponent } from './passwordforgot/passwordforgot.component';
import { MatInputModule, MatCheckboxModule, MatButtonModule, MatRadioModule, MatRadioGroup } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingRoutes,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ],
  declarations: [AuthComponent, LoginComponent, PasswordforgotComponent, RegisterComponent]
})
export class AuthModule {}
