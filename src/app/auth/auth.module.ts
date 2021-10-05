import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'signin', component: SignInComponent },
          { path: 'signup', component: SignUpComponent },
          { path: '', redirectTo: 'signin', pathMatch: 'full' },
          { path: '**', redirectTo: 'signin', pathMatch: 'full' }
        ]
      }
    ])
  ]
})
export class AuthModule { }
