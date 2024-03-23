import { Routes } from '@angular/router';
import {AuthModule} from './modules/auth/auth.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './modules/store/components/shop/shop.component';

export const routes: Routes = [
    
    { path: '', component: ShopComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'header', component: HeaderComponent},
    { path: 'auth/register', component: RegisterComponent },
    { path: 'auth', redirectTo:'auth/login'},
    
];
