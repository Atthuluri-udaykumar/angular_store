import { createFeatureSelector, createSelector } from "@ngrx/store"

export const SHARED_STATE_NAME = 'shared'

const sharedSelector = createFeatureSelector(SHARED_STATE_NAME);

export const getSharedState = createSelector(sharedSelector, (state: any) => {
  return state.showLoading;
})
