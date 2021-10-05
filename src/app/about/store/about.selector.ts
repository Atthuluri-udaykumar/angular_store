import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getAboutSelector = createFeatureSelector('about');

export const aboutText = createSelector(getAboutSelector, (state: any) => {
  return state.about;
})
