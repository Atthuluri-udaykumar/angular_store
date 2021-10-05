import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getAdditonSelector = createFeatureSelector('addition');


export const getAdditon = createSelector(getAdditonSelector, (state: any) => {
  return state.value;
})
