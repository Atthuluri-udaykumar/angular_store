import { createAction, props } from "@ngrx/store";
export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[set error] message';

export const setLoadingAction = createAction(SET_LOADING_ACTION, props<{ isLoading: boolean }>())
export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{ error: string }>())
