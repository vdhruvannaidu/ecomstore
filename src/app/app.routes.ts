import { Routes } from '@angular/router';
import {AuthModule} from './modules/auth/auth.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';

export const routes: Routes = [
    
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'auth', redirectTo:'auth/login'},
];
