import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoadingComponent} from './account/pages/loading/loading.component';
import {SigninComponent} from './account/pages/signin/signin.component';
import {SignupComponent} from './account/pages/signup/signup.component';
import {ForgotComponent} from './account/pages/forgot/forgot.component';

const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'account/signin', component: SigninComponent },
  { path: 'account/signup', component: SignupComponent },
  { path: 'account/forgot', component: ForgotComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
