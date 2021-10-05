import { additionState } from "../addition/store/addition.state";
import { additionReducer } from "../addition/store/additon.reducer";
import { counterReducer } from "../counter/store/counter.reduser";
import { counterState } from "../counter/store/counter.states";
import { postResucer } from "../post/store/post.reduce";
import { PostState } from "../post/store/post.state";

export interface appState {
  counter: counterState,
  post: PostState,
  addition: additionState
}

export const appReducer = {
  addition: additionReducer,
  counter: counterReducer,
  post: postResucer
}
