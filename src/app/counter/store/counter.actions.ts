import { createAction, props } from "@ngrx/store";

export const Increment = createAction('Increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customCounter = createAction('customCounter', props<any>())
