import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutes } from './authentication-routes';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutes
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
