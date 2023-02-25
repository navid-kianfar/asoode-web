import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import {SharedModule} from '../shared/shared.module';
import { LoadingComponent } from './pages/loading/loading.component';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ForgotComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountModule { }
