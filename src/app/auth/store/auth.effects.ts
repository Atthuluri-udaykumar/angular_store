import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { loginStart, loginSuccess } from './auth.action';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoadingAction } from 'src/app/shared/store/shated.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthEffects {

  constructor(
    private actions$: Actions,
    private AuthService: AuthService,
    private store: Store,
    private router: Router
  ) {
  }

  login$ = createEffect((): any => {
    return this.actions$.pipe(ofType(loginStart), exhaustMap((action: any) => {
      return this.AuthService.onlogin(action.email, action.password).pipe(
        map((data) => {
          this.store.dispatch(setLoadingAction({ isLoading: false }));
          this.store.dispatch(setErrorMessage({ error: '' }))
          let user = this.AuthService.formatUser(data);
          return loginSuccess({ user });
        }), catchError((err: any) => {
          this.store.dispatch(setLoadingAction({ isLoading: false }));
          // this.store.dispatch(setErrorMessage({ error: err?.error?.error?.message }))
          return of(setErrorMessage({ error: err?.error?.error?.message }));
        })
      )
    }))
  })

  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginSuccess), tap((action: any) => {
      this.router.navigate(['/home']);
    }));
  }, { dispatch: false });



}
