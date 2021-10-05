import { createAction, props } from "@ngrx/store";

export const toAddValue = createAction('toAddValue', props<any>());
export const toSubValue = createAction('toSubValue', props<any>());
export const toResetValue = createAction('toResetValue', props<any>());



