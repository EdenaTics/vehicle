import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordforgotComponent } from './passwordforgot/passwordforgot.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'fpassword',
        component: PasswordforgotComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

export const AuthRoutingRoutes = RouterModule.forChild(routes);
