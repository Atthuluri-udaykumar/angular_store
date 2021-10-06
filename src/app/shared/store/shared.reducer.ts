import { createReducer, on } from "@ngrx/store";
import { setLoadingAction } from "./shated.actions";
import { shatedInitialState } from "./shated.state";

export const _sharedReducer = createReducer(shatedInitialState, on(setLoadingAction, (state: any, action: any) => {
  return {
    ...state,
    showLoading: action.isLoading,
  }
}));

export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
