import { createReducer, on } from "@ngrx/store"
import { addPost } from "./post.action"
import { postInitialStates } from "./post.state"

const _postResucer = createReducer(postInitialStates, on(addPost, (state: any, action: any) => {
  return {
    ...state,
    post: [...state.post, action.post]
  }
}))

export function postResucer(state: any, action: any) {
  return _postResucer(state, action)
}
