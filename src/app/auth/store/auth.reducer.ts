import { createReducer, on } from "@ngrx/store"
import { loginSuccess } from "./auth.action"
import { authInitialState } from "./auth.state"

export const _authReducer = createReducer(authInitialState, on(loginSuccess, (state: any, action: any) => {
  return {
    ...state,
    user: action.user,
  }
}))

export function authReducer(state: any, action: any) {
  return _authReducer(state, action)
}
