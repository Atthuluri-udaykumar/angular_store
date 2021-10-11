import { createFeatureSelector, createSelector } from "@ngrx/store";

export const AUTH_STATE_NAME = 'auth';
export const authSelector = createFeatureSelector(AUTH_STATE_NAME);

export const userDetails = createSelector(authSelector, (state: any) => {
  return state.user;
})
