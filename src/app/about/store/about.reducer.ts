import { createReducer, on } from "@ngrx/store"
import { editAbout } from "./about.action"
import { aboutInititalState } from "./about.state"

const _createAbourReducer = createReducer(aboutInititalState, on(editAbout, (state: any, action: any) => {
  return {
    ...state,
    about: action.about
  }
}))

export function aboutReducer(state: any, action: any) {
  return _createAbourReducer(state, action)
}
