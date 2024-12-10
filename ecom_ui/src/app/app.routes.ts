import { Routes } from '@angular/router';
import { HomelayoutComponent } from './pages/homelayout/homelayout.component';
import { ProductLayoutComponent } from './pages/product-layout/product-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard'; // Import the AuthGuard
import { AuthService } from './services/auth/auth.service';
import { AuthRedirectGuard } from './auth/authRedirect.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomelayoutComponent,
    // canActivate: [AuthRedirectGuard],
    children: [],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product',
    component: ProductLayoutComponent,
    // canActivate: [AuthGuard], // Protected route
  },
  {
    path: 'shop',
    component: HomelayoutComponent,
    // canActivate: [AuthGuard], // Protected route
    children: [
      {
        path: 'header',
        loadComponent: () =>
          import('./components/header/header.component').then(
            (m) => m.HeaderComponent
          ),
        canActivate: [AuthGuard], // Protected route
      },
      {
        path: 'product',
        component: ProductLayoutComponent,
        // canActivate: [AuthGuard], // Protected route
      },
    ],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
];
