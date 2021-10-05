import { createFeatureSelector, createSelector } from "@ngrx/store";

const postSelector = createFeatureSelector('post');

export const getPost = createSelector(postSelector, (state: any) => {
  return state.post;
})

export const getPostById = createSelector<object, any, unknown, any>(postSelector, (state: any, props: any) => {
  return state.post.find((val: any) => val.id === props.id);
})
