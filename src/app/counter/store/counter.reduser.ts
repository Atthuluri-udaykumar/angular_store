import { createReducer, on } from "@ngrx/store";
import { customCounter, decrement, Increment, reset } from "./counter.actions";
import { initialState } from "./counter.states";


const _counterReducer = createReducer(initialState, on(Increment,
  (state: any) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }), on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter < 0 ? 0 : state.counter - 1
    }
  }), on(reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  })
  , on(customCounter, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value
    }
  })
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
