import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { loginStart, loginSuccess } from './auth.action';
import { exhaustMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { setLoadingAction } from 'src/app/shared/store/shated.actions';

@Injectable({
  providedIn: 'root'
})

export class AuthEffects {

  constructor(
    private actions$: Actions,
    private AuthService: AuthService,
    private store: Store
  ) {
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginStart), exhaustMap((action: any) => {
      return this.AuthService.onlogin(action.email, action.password).pipe(
        map((data) => {
          this.store.dispatch(setLoadingAction({ isLoading: false }));
          let user = this.AuthService.formatUser(data);
          return loginSuccess({ user });
        })
      )
    }))
  })

}
