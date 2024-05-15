import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { HomelayoutComponent } from './pages/homelayout/homelayout.component';
// import { ShopComponent } from './modules/store/components/shop/shop.component';

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
    }

];
