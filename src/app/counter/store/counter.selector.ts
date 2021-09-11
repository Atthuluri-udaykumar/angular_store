import { createFeatureSelector, createSelector } from "@ngrx/store";


const getCounterSelector = createFeatureSelector('counter');

export const getCounter = createSelector(getCounterSelector, (state: any) => {
  return state.counter
})


export const getName = createSelector(getCounterSelector, (state: any) => {
  return state.name
})
