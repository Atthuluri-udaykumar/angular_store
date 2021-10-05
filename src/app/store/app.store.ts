import { aboutReducer } from "../about/store/about.reducer";
import { AboutInitialState } from "../about/store/about.state";
import { additionState } from "../addition/store/addition.state";
import { additionReducer } from "../addition/store/additon.reducer";
import { counterReducer } from "../counter/store/counter.reduser";
import { counterState } from "../counter/store/counter.states";
import { postResucer } from "../post/store/post.reduce";
import { PostState } from "../post/store/post.state";

export interface appState {
  counter: counterState,
  post: PostState,
  addition: additionState,
  about: AboutInitialState
}

export const appReducer = {
  addition: additionReducer,
  counter: counterReducer,
  // post: postResucer,
  about: aboutReducer
}
