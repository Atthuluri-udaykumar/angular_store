import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from "@ngrx/effects"
import { AuthEffects } from './store/auth.effects';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './store/auth.selector';
import { authReducer } from './store/auth.reducer';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
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
