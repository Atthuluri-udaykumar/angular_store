import { createAction, props } from "@ngrx/store";

export const addPost = createAction('ADD_POST_ACTION', props<any>());
