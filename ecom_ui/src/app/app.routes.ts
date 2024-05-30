import { Routes } from '@angular/router';

import { HomelayoutComponent } from './pages/homelayout/homelayout.component';
import { ProductLayoutComponent } from './pages/product-layout/product-layout.component';


export const routes: Routes = [

    
    {
        path: '',
        component: HomelayoutComponent,

    },
    {
        path: 'login',
        loadComponent: () =>import('./components/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'header',
        loadComponent: () =>import('./components/header/header.component').then(m => m.HeaderComponent),
    },
    {
        path: 'register',
        loadComponent: () =>import('./components/register/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'product',
        component: ProductLayoutComponent,
    }

];
