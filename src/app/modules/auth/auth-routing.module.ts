import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full'
    // children: [
    //   {
    //     path:"login",  
    //     redirectTo:"/login",
    //     component: LoginComponent,
    //   }
    // ]
  },
  // You can add more routes for other authentication-related pages (e.g., signup, forgot password)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }