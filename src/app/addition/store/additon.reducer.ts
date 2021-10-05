import { createReducer, on } from "@ngrx/store";
import { toAddValue, toResetValue, toSubValue } from "./addition.acitons";
import { addinginitialState } from "./addition.state";

const _createAdditionReducer = createReducer(addinginitialState,
  on(toAddValue, (state: any, aciton: any) => {
    return {
      ...state,
      value: state.value + aciton.value
    }
  }),
  on(toSubValue, (state, action) => {
    return {
      ...state,
      value: state.value - action.value
    }
  }),
  on(toResetValue, (state, action) => {
    return {
      ...state,
      value: 0
    }
  })
)

export function additionReducer(state: any, action: any) {
  return _createAdditionReducer(state, action);
}
