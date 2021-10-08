import { createReducer, on } from "@ngrx/store";
import { setErrorMessage, setLoadingAction } from "./shated.actions";
import { shatedInitialState } from "./shated.state";

export const _sharedReducer = createReducer(shatedInitialState, on(setLoadingAction, (state: any, action: any) => {
  return {
    ...state,
    showLoading: action.isLoading,
  }
}), on(setErrorMessage, (state: any, action: any) => {
  return {
    ...state,
    errorMessage: action.error
  }
})
);

export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
