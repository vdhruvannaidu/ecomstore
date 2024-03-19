import { Routes } from '@angular/router';
import {AuthModule} from './modules/auth/auth.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

export const routes: Routes = [
    // { path: 'auth/login', component: AuthModule },
    {
        path: '',
        redirectTo:'auth/login',
        // pathMatch:'full'
        // component: LoginComponent 
    },

    // { path: 'test', component: TestComponent },
    // { path: 'auth/login', component: LoginComponent },
];
