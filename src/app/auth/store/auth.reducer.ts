import { createReducer } from "@ngrx/store"
import { authInitialState } from "./auth.state"

export const _authReducer = createReducer(authInitialState)

export function authReducer(state: any, action: any) {
  _authReducer(state, action)
}
